import { useContext, useState } from "react"
import { Route, Routes } from "react-router-dom";
import Swal from "sweetalert2"
import { API_ENDPOINTS, getApiUrl } from "../../../config/api"
import { APP_ROUTES } from "../../../config/routes";
import { BookingDataContext } from "../../../context/booking_data";
import { get } from "../../../helpers/requests"
import BookingOptions from '../../components/BookingOptions/BookingOptions';
import Package from "../../components/Package/Package"
import NotFound from "../NotFound";
import SingleExperience from "./SingleExperience";

export default function Experiences(){
    const [packages, setPackages] = useState([
        {
            id: 1,
            name: "Sarova Whitesands Beach Resort & Spa",
            location: "Mombasa, Kenya",
            price: "KSh 30,000",
            image: "https://viutravel-cms-bucket.s3.eu-west-1.amazonaws.com/1307/conversions/102632650-thumbnail.webp",  
            description: "Sarova Whitesands Beach Resort & Spa is situated north of Mombasa on one of East Arica's most stunning beaches, manicured grounds, Arabic architecture and wonderful facilities making it simply the place to stay on the Kenyan coast. The Resort is set on 23 acres of land, and has the longest beach front on the North Coast giving you panoramic views to the Indian Ocean. ",
            activity: ""
            
        },
        {
            id: 2,
            name: "Sarova Whitesands Beach Resort & Spa",
            location: "Mombasa, Kenya",
            price: "KSh 30,000",
            image: "https://viutravel-cms-bucket.s3.eu-west-1.amazonaws.com/1307/conversions/102632650-thumbnail.webp",  
            description: "Sarova Whitesands Beach Resort & Spa is situated north of Mombasa on one of East Arica's most stunning beaches, manicured grounds, Arabic architecture and wonderful facilities making it simply the place to stay on the Kenyan coast. The Resort is set on 23 acres of land, and has the longest beach front on the North Coast giving you panoramic views to the Indian Ocean. ",
            activity: ""
            
        },
        {
            id: 3,
            name: "Sarova Whitesands Beach Resort & Spa",
            location: "Mombasa, Kenya",
            price: "KSh 30,000",
            image: "https://viutravel-cms-bucket.s3.eu-west-1.amazonaws.com/1307/conversions/102632650-thumbnail.webp",  
            description: "Sarova Whitesands Beach Resort & Spa is situated north of Mombasa on one of East Arica's most stunning beaches, manicured grounds, Arabic architecture and wonderful facilities making it simply the place to stay on the Kenyan coast. The Resort is set on 23 acres of land, and has the longest beach front on the North Coast giving you panoramic views to the Indian Ocean. ",
            activity: ""
            
        }
    ])

    const [loading, setLoading] = useState(false) // Whether data is being loaded from backend
    
    const [loaded, setLoaded] = useState(true) // Whether data has been loaded at least once
    
    const [optionsHidden, setOptionsHidden] = useState(false) // Whether booking options are hidden

    // Booking data
    const {bookingData, setBookingData} = useContext(BookingDataContext)

    // Form actions
    function getPackages(){
        setLoading(true) // Set the loading state

        // send the booking data to the backend
        get(getApiUrl(API_ENDPOINTS.GET_PACKAGES, bookingData))
            .then((response) => {
                setLoading(false) // Done getting data
                setLoaded(true)
                setOptionsHidden(true) // Hide booking options form

                setPackages(response)
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)

                Swal.fire({
                    icon: 'error',
                    title: 'Failed',
                    text: 'Something went wrong and we are unable to fetch available packages. Please try again',
                })
            }
        )

    }

    return (

        <Routes>
            <Route
                path=":id"
                element={ <SingleExperience packages={packages} /> }
                />

            <Route path="" element={
                <div className="new-booking">
                    <div className="container">
                        <div className="row">
        
                            <div className="col-12">
                                
                                {/* BOOKING OPTIONS */}
                                <h3 className="card-title">Book a travel package</h3>
                                
                                <p className="card-text">
                                    Tell us when and where you shall be travelling to and we will find you the best travel packages in the area
                                </p>
        
                                <button data-toggle="collapse" data-target="#options" className="btn btn-link mb-3">Show/Hide Booking Options</button>
        
                                <div id="options" className={optionsHidden ? "collapse" : "collapse open"}>
                                    <BookingOptions
                                        loading={loading}
                                        onSubmit={getPackages}
                                        />
                                </div>
                                {/* END BOOKING OPTIONS */}
        
                                {/* PACKAGES */}
        
                                {
                                    loaded ?                                             
                                    <div className="row">
                                        {/* RESULTS */}
                                        <div className="col-12">
        
                                            <div className="row">
                                                
                                                {
                                                    packages.length > 0 ?
                                                    packages.map((packageItem) => (
                                                        <div key={packageItem.id} className="col-md-6 col-xl-4">
                                                            <Package packageItem={packageItem} />
                                                        </div>
                                                    ))
                                                    :
                                                    <div className="col-12">
                                                        <h3>No packages found</h3>
        
                                                        <p>
                                                            Unfortunately, we did not find any travel packages for&nbsp;
                                                            {bookingData.destination}&nbsp;
                                                            from {bookingData.from}&nbsp;
                                                            to {bookingData.to}.
                                                            Try changing your filters or come back later
                                                        </p>
                                                    </div>
                                                }
        
                                            </div>
        
                                        </div>
                                        {/* RESULTS */}
                                    </div>
                                    :
                                    ''
                                }
        
                                {/* END PACKAGES */}
        
                            </div>
                            
                        </div>
                    </div>
                </div>
            } />

            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}