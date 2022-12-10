import { useContext } from "react"
import { Link } from "react-router-dom"
import { APP_ROUTES } from "../../../../config/routes"
import { UserContext } from "../../../../context/user"

export default function Dashboard(){
    const {currentUser, setCurrentUser} = useContext(UserContext)

    return (
        <section>
            <div className="container">

                <p>
                    Welcome {currentUser.name}, We have assembled some links to get you going
                </p>

                <div className="row">

                    
                    <div className="col-12 col-md-6 col-lg-6 mb-4">
                        <Link className="card link-card" to={APP_ROUTES.PROFILE}>
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <span className="icon bg-success text-white">
                                        <i className="fa fa-fw fa-user"></i>
                                    </span>

                                    <div className="ml-3">
                                        <h5 className="mb-2 card-title">Your Profile</h5>
                                        <p className="card-text mb-0">View and make updates to your user profile and settings</p>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 mb-4">
                        <Link className="card link-card" to={APP_ROUTES.EXPERIENCES}>
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <span className="icon bg-primary text-white">
                                        <i className="fa fa-fw fa-calendar-o"></i>
                                    </span>

                                    <div className="ml-3">
                                        <h5 className="mb-2 card-title">My History</h5>
                                        <p className="card-text mb-0">View a history of your past travel package bookings</p>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </div>

                    <div className="col-12 col-md-6 col-lg-6 mb-4">
                        <Link className="card link-card" to={APP_ROUTES.NEW_EXPERIENCE}>
                            <div className="card-body">
                                <div className="d-flex align-items-center">
                                    <span className="icon bg-info text-white">
                                        <i className="fa fa-fw fa-add"></i>
                                    </span>

                                    <div className="ml-3">
                                        <h5 className="mb-2 card-title">Make Booking</h5>
                                        <p className="card-text mb-0">Going somewhere? Book a new travel package</p>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </div>

                </div>

            </div>
        </section>
    )
}