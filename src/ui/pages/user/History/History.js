import { Link } from "react-router-dom";
import { APP_ROUTES } from "../../../../config/routes";

export default function History(){
    return (
        <div>
            <div className="container">
                <h3 className="card-title">Booking History</h3>

                <p>
                    There's nothing here. Once you start making bookings, you can find them later on this page
                </p>

                <Link to={APP_ROUTES.NEW_EXPERIENCE} className="btn btn-link">Explore Packages Now</Link>
                
                <div className="row">

                    <div className="col-12">

                    </div>

                </div>

            </div>
        </div>
                                
    )
}