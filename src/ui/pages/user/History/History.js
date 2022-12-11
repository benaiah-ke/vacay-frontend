import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { API_ENDPOINTS, getApiUrl } from "../../../../config/api";
import { APP_ROUTES } from "../../../../config/routes";
import { get } from "../../../../helpers/requests";
import Booking from "../../../components/Booking/Booking";
import Loader from "../../../components/Loader";

export default function History(){
    const [bookings, setBookings] = useState([
        {
            id: 1,
            name: "Sarova Whitesands Beach Resort & Spa",
            location: "Mombasa, Kenya",
            price: "KSh 30,000",
            image: "https://viutravel-cms-bucket.s3.eu-west-1.amazonaws.com/1307/conversions/102632650-thumbnail.webp",  
            description: "Sarova Whitesands Beach Resort & Spa is situated north of Mombasa on one of East Arica's most stunning beaches, manicured grounds, Arabic architecture and wonderful facilities making it simply the place to stay on the Kenyan coast. The Resort is set on 23 acres of land, and has the longest beach front on the North Coast giving you panoramic views to the Indian Ocean. ",
            activity: "Some activity, other activity",
            from: "2021-08-01",
            to: "2021-08-05",
            status: "Complete",
            adults: 2,
            kids: 0
        },
        {
            id: 1,
            name: "Sarova Whitesands Beach Resort & Spa",
            location: "Mombasa, Kenya",
            price: "KSh 30,000",
            image: "https://viutravel-cms-bucket.s3.eu-west-1.amazonaws.com/1307/conversions/102632650-thumbnail.webp",  
            description: "Sarova Whitesands Beach Resort & Spa is situated north of Mombasa on one of East Arica's most stunning beaches, manicured grounds, Arabic architecture and wonderful facilities making it simply the place to stay on the Kenyan coast. The Resort is set on 23 acres of land, and has the longest beach front on the North Coast giving you panoramic views to the Indian Ocean. ",
            activity: "Some activity, other activity",
            from: "2021-08-01",
            to: "2021-08-05",
            status: "Complete",
            adults: 2,
            kids: 1
        }
    ])

    const [loading, setLoading] = useState(true) // Whether data is being loaded from backend
    
    // Load bookings
    useEffect(() => {
        getBookings()
    }, [])

    // Form actions
    function getBookings(){
        setLoading(true) // Set the loading state

        // send the booking data to the backend
        get(getApiUrl(API_ENDPOINTS.GET_BOOKING_HISTORY))
            .then((response) => {
                setLoading(false) // Done getting data

                setBookings(response)
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)

                Swal.fire({
                    icon: 'error',
                    title: 'Failed',
                    text: 'Something went wrong and we are unable to fetch your history. Please try again',
                })
            }
        )

    }

    return (
        <div>
            <div className="container">
                <h3>Booking History</h3>

                {
                    loading ?
                    <Loader text="Fecthing your history" />
                    :
                    <>

                    {
                        bookings.length === 0 ?

                        // START NO RESULTS
                        <>
                            <p>
                                There's nothing here. Once you start making bookings, you can find them later on this page
                            </p>

                            <Link to={APP_ROUTES.NEW_EXPERIENCE} className="btn btn-link">Explore Packages Now</Link>
                        </>
                        // END NO RESULTS

                        :

                        // START RESULTS
                        <div className="row">

                            {
                                bookings.map(booking => (
                                    <div key={booking.id} className="col-12">
                                        <Booking booking={booking} />
                                    </div>
                                ))
                            }

                        </div>
                        // END RESULTS

                    }
                    
                    </>
                }
                

            </div>
        </div>
                                
    )
}