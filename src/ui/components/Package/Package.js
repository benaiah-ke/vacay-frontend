import { Link } from 'react-router-dom'
import { APP_ROUTES, getRoute } from '../../../config/routes'
import './Package.css'

export default function Package({ packageItem }) {
    return (
        <div className="card package mb-3">
            <img className="img-fluid" alt={packageItem.name} src={packageItem.image} />

            <div className="card-body">
                <div className="mb-3 d-flex align-items-center">
                    <i className="fa fa-map-marker mr-2 text-muted"></i>
                    {packageItem.location}
                </div>

                <h6 className="package-title">{packageItem.name}</h6>

                <div className="mb-2">
                    {packageItem.price}
                </div>

                <Link to={getRoute(APP_ROUTES.BOOK_EXPERIENCE, {id: packageItem.id})} className="btn btn-primary btn-block">
                    Make Reservation
                </Link>
            </div>
        </div>
    )
}