import { useContext } from "react"
import { Navigate, NavLink, Route, Routes } from "react-router-dom"
import { APP_ROUTES } from "../../../../config/routes"
import { BookingDataProvider } from "../../../../context/booking_data"
import { UserContext } from "../../../../context/user"
import Experiences from "../../explore/Experiences"
import SingleExperience from "../../explore/SingleExperience"
import NotFound from "../../NotFound"
import Dashboard from "../Dashboard/Dashboard"
import History from "../History/History"
import Profile from "../Profile/Profile"

export default function UserArea(){
    const {currentUser, setCurrentUser} = useContext(UserContext)

    // If a user is not logged in, redirect to login
    if(!currentUser){
        return <Navigate to={APP_ROUTES.LOGIN} />
    }

    function logOut(){
        setCurrentUser(null)
    }

    return (
        <section className="py-4 py-md-5">
            <div className="container">

                <div className="row">

                    {/* FIXED SIDENAV */}
                    <div className="col-12 col-md-3 d-none d-md-block">
                        <div className="card sticky-top">
                            <div className="card-body border-bottom">
                                <h5 className="mb-2">{currentUser.name}</h5>
                                <div className="mb-3">{currentUser.email}</div>
                                <button onClick={logOut} className="border-danger btn btn-light text-danger btn-block">
                                    <i className="fa fa-fw fa-sign-out mr-1"></i>
                                    Log Out
                                </button>
                            </div>

                            <div>

                                <div className="list-group list-group-flush">
                                    <NavLink className="list-group-item list-group-item-action" to={APP_ROUTES.DASHBOARD}>
                                        <i className="mr-2 fa fa-fw fa-dashboard"></i>Dashboard
                                    </NavLink>

                                    <NavLink className="list-group-item list-group-item-action" to={APP_ROUTES.PROFILE}>
                                        <i className="mr-2 fa fa-fw fa-user"></i>My Profile
                                    </NavLink>

                                    <NavLink className="list-group-item list-group-item-action" to={APP_ROUTES.NEW_EXPERIENCE}>
                                        <i className="mr-2 fa fa-fw fa-add"></i>New Booking
                                    </NavLink>

                                    <NavLink className="list-group-item list-group-item-action" to={APP_ROUTES.HISTORY}>
                                        <i className="mr-2 fa fa-fw fa-calendar"></i>Booking History
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* MAIN CONTENT */}
                    <div className="col-12 col-md-9">

                        {/* Replace user/ in links for navlinks to work properly */}
                        <Routes>
                            <Route path={APP_ROUTES.DASHBOARD.replace("user/", "")} element={<Dashboard />} />
                            
                            <Route path={APP_ROUTES.PROFILE.replace("user/", "")} element={<Profile />} />

                            <Route path={APP_ROUTES.HISTORY.replace("user/", "")} element={<History />} />
                            
                            <Route path={APP_ROUTES.NEW_EXPERIENCE.replace("user/", "") + "/*"} element={
                                <BookingDataProvider>
                                    <Experiences />
                                </BookingDataProvider>
                            } />
                            
                            {/* Other non-supported routes */}
                            <Route path="*" element={<NotFound />} />
                        </Routes>

                    </div>

                </div>

            </div>
        </section>
    )
}