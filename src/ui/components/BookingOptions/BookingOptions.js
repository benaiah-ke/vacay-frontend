import { format } from 'date-fns';
import { useState } from "react"
import Flatpickr from "react-flatpickr";
import Loader from "../../components/Loader"

export default function BookingOptions({ loading, onSubmit }) {
    const [bookingData, setBookingData] = useState({
        destination: "",
        from: "today",
        to: "today",
        adults: 1,
        kids: 0
    })
    
    function updateDate(dates){
        var from = format(dates[0], 'yyyy-MM-dd')
        var to = from
    
        if(dates.length > 1){
            to = format(dates[1], 'yyyy-MM-dd')
        }
    
        setBookingData({ ...bookingData, from: from, to:to })
    }

    return (
        <div className="card shadow mb-4 border-0" style={{borderRadius: '30px'}}>
            <div className="card-body">
                <form onSubmit={(e) => {e.preventDefault(); onSubmit(bookingData)}} className="has-loader">

                    {
                        loading ?
                        <Loader text="Finding packages" />
                        :
                        ''
                    }

                    <div className="row">

                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="form-group mb-4">
                                <label htmlFor="destination">
                                    <strong>Destination</strong>
                                </label>
                                
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </span>
                                    </div>
                                    <input required type="text" id="destination" className="form-control" placeholder="e.g Diani" value={bookingData.destination} onChange={(e) => setBookingData({...bookingData, destination: e.target.value})} />
                                </div>
                            </div>
                        </div>

                        {/* Date from */}
                        <div className="col-12 col-sm-6 col-lg-8">
                            <div className="form-group mb-4">
                                <label htmlFor="from">
                                    <strong>Date Range</strong>
                                </label>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-calendar-alt"></i>
                                        </span>
                                    </div>

                                    <Flatpickr
                                        value={bookingData.from + " to " + bookingData.to}
                                        className="form-control flatpickr"
                                        onClose={(dates) => {
                                            updateDate(dates)
                                        }}
                                        options={{
                                            minDate: "today",
                                            mode: "range",
                                            enableTime: false,
                                            dateFormat: "Y-m-d"
                                        }}
                                    />


                                </div>
                                <span className="small">Click the start date then the end date</span>
                            </div>
                        </div>

                        {/* Number of adults */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="form-group mb-4">
                                <label htmlFor="adults">
                                    <strong>Adults</strong>
                                </label>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input type="number" id="adults" className="form-control" value={bookingData.adults} onChange={(e) => setBookingData({...bookingData, adults: e.target.value})} />
                                </div>
                            </div>
                        </div>

                        {/* Number of kids */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="form-group mb-4">
                                <label htmlFor="kids">
                                    <strong>Kids</strong>
                                </label>

                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fas fa-user"></i>
                                        </span>
                                    </div>
                                    <input type="number" id="kids" className="form-control" value={bookingData.kids} onChange={(e) => setBookingData({...bookingData, kids: e.target.value})} />
                                </div>
                            </div>
                        </div>


                        <div className="col-12 col-sm-6 col-lg-4 d-flex align-items-end">
                            <button className="btn btn-block btn-success mb-4">
                                <i className="fas fa-search mr-2"></i>
                                Find Travel Packages
                            </button>
                        </div>
                        
                    </div>
                    </form>

            </div>
        </div>
    )
}