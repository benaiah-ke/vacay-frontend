import { useContext, useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom";
import Swal from "sweetalert2"
import { API_ENDPOINTS, getApiUrl } from "../../../config/api"
import { APP_ROUTES } from "../../../config/routes";
import { BookingDataContext } from "../../../context/booking_data";
import { get, post } from "../../../helpers/requests"
import BookingOptions from '../../components/BookingOptions/BookingOptions';
import Loader from "../../components/Loader";
import Package from "../../components/Package/Package"
import NotFound from "../NotFound";

export default function SingleExperience({ packages }){
    const [packageInfo, setPackageInfo] = useState(null) // Current package
    
    const [loading, setLoading] = useState(false) // Whether data is being sent to backend

    const {bookingData, setBookingData} = useContext(BookingDataContext)
    
    // Get the current package
    const params = useParams();
    
    useEffect(() => {
        packages.forEach((p) => {
            if(p.id === parseInt(params.id)){
                setPackageInfo(p)
            }
        })
    }, [])


    // If not found
    if(packageInfo == null){
        return <NotFound />
    }

    // Form actions
    function bookPackage(){

        setLoading(true) // Set the loading state

        // send the booking data to the backend for booking
        post(getApiUrl(API_ENDPOINTS.BOOK_PACKAGE, bookingData))
            .then((response) => {
                setLoading(false) // Done

                // Check if sucessful
                if(response.success){
                    Swal.fire({
                        icon: 'success',
                        title: 'Booked',
                        text: 'Your booking is reserved',
                    })
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Booking Failed',
                        text: 'Unable to reserve the booking. Please try again',
                    })
                }
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)

                Swal.fire({
                    icon: 'error',
                    title: 'Failed',
                    text: 'Something went wrong and we are unable to reserve the booking. Please try again',
                })
            }
        )

    }

    return (
        <div className="new-booking">
            <div className="container">
                <h3 className="card-title">Book a package</h3>

                <div className="row has-loader">

                    {
                        loading ?
                        <Loader text="Please wait" />
                        :
                        ""
                    }

                    {/* PACKAGE INFO */}
                    <div className="col-lg-12">

                        {
                            packageInfo ?                                             
                            <div className="row">
                                <div className="col-lg-6">
                                    <img className="img-fluid" style={{borderRadius: '30px'}} src={packageInfo.image} />
                                </div>

                                <div className="col-lg-6">
                                    <h4>{packageInfo.name}</h4>

                                    <p>{packageInfo.description}</p>
                                </div>

                                <div className="col-12">
                                    <h4>Activity</h4>

                                    <p>{packageInfo.activity}</p>
                                </div>

                                <div className="col-12">
                                    <h4>Booking Price</h4>

                                    <p>{packageInfo.price}</p>

                                    Note that fee applies for the previously selected booking options
                                </div>

                                <div className="col-lg-12 mt-3">
                                    <h4>Make a reservation</h4>
                                    <BookingOptions
                                        data={bookingData}
                                        loading={loading}
                                        onSubmit={bookPackage}
                                        action="Make Reservation"
                                        />

                                </div>

                            </div>
                            :
                            ''
                        }


                    </div>
                    
                </div>
            </div>
        </div>
    )
}