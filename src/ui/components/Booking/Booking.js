import { useState } from 'react'
import Swal from 'sweetalert2'
import { API_ENDPOINTS, getApiUrl } from '../../../config/api'
import { post } from '../../../helpers/requests'
import Loader from '../Loader'
import './Booking.css'

export default function Booking({ booking }) {
    const [loading, setLoading] = useState(false) // Whether data is being sent to backend

    function deleteBooking(){

        setLoading(true) // Set the loading state

        // send the booking data to the backend for booking
        post(getApiUrl(API_ENDPOINTS.DELETE_BOOKING, {id: booking.id}))
            .then((response) => {
                setLoading(false) // Done

                // Check if sucessful
                if(response.success){
                    Swal.fire({
                        icon: 'success',
                        title: 'Booked',
                        text: 'Your booking has been deleted',
                    })
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Deletion Failed',
                        text: 'Unable to delete the booking. Please try again',
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
        <div className="booking mb-3 has-loader">
            {
                loading ?
                <Loader text="Please wait" />
                :
                ''
            }

            <img className="img-fluid" alt={booking.name} src={booking.image} />

            <div className="booking-info">
                <h6 className="package-title">{booking.name}</h6>

                <div className="mb-3 d-flex align-items-center">
                    <i className="fa fa-map-marker mr-2 text-muted"></i>
                    {booking.location}
                </div>

                <div className="mb-2 text-primary">
                    <h5>{booking.price}</h5>
                </div>

                <div className="mb-3 d-flex align-items-center">
                    <i className="fa fa-calendar mr-2 text-muted"></i>
                    {booking.from} - {booking.to}
                </div>

                <div className="mb-3 d-flex align-items-center">
                    <i className="fa fa-users mr-2 text-muted"></i>
                    {booking.adults + ' adults, ' + booking.kids + ' kids'}
                </div>

                <button onClick={deleteBooking} className="btn btn-danger">
                    Delete
                </button>
            </div>
        </div>
    )
}