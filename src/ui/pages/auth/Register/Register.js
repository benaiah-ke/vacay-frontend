import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { API_ENDPOINTS, getApiUrl } from '../../../../config/api';
import { APP_ROUTES, getRoute } from '../../../../config/routes';
import { UserContext } from '../../../../context/user';
import { post } from '../../../../helpers/requests';
import Loader from '../../../components/Loader';

export default function Register() {
    const {currentUser, setCurrentUser} = useContext(UserContext)

    const [loading, setLoading] = useState(false) // Whether user data is being sent at the moment

    const [passwordVisible, setPasswordVisible] = useState(false) // Make password visible

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: "",
        password: ""
    })

    // If a user is already logged in, redirect to the dashboard
    if(currentUser){
        navigate(APP_ROUTES.DASHBOARD)
    }

    /**
     * Sends the data to the backend for registration
     */
    function submitData(event){
        event.preventDefault()

        // Notify that loading is ongoing
        setLoading(true)

        post(getApiUrl(API_ENDPOINTS.REGISTER), userData)
            .then((response) => {
                setLoading(false) // Done

                if(response.success){
                    // Registered
                    // User is at data.user
                    setCurrentUser(response.data.user)

                    navigate(APP_ROUTES.DASHBOARD)
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Registration Failed',
                        text: 'Unable to create an account. Please try again',
                    })
                }
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)

                Swal.fire({
                    icon: 'error',
                    title: 'Registration Failed',
                    text: 'Something went wrong. Please try again',
                })
            })
    }


    // DOM EVENT HANDLERS
    function updateName(event){
        setUserData({ ...userData, name: event.target.value })
    }

    function updateEmail(event){
        setUserData({ ...userData, email: event.target.value })
    }

    function updatePhone(event){
        setUserData({ ...userData, phone: event.target.value })
    }

    function updatePassword(event){
        setUserData({ ...userData, password: event.target.value })
    }

    return (
    <section className="py-4 py-md-5">
        <div className="container">

            <div className="row">

                <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto">

                    <form onSubmit={submitData}>

                        <div className="border mx-auto has-loader">

                            {
                                loading ?
                                <Loader text="Signing up"/>
                                :
                                ''
                            }

                            <div className="px-4 pt-5 pb-3 top text-center">
                                <Link className="logo d-block mb-4" to={APP_ROUTES.HOME}>
                                    <img alt="Logo" className="logo" src="/logo.png" />
                                </Link>

                                <h4 className="mb-0">Create an account</h4>
                            </div>

                            <div className="p-4">

                                <div className="form-group mb-3">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-fw fa-user"></i>
                                            </span>
                                        </div>
                                        <input className="form-control" placeholder="Your Name" type="text" value={userData.name} onChange={updateName} required />
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-fw fa-phone"></i>
                                            </span>
                                        </div>
                                        <input className="form-control" placeholder="Phone Number" type="tel" value={userData.phone} onChange={updatePhone} required />
                                    </div>
                                </div>

                                <div className="form-group mb-3">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-fw fa-envelope"></i>
                                            </span>
                                        </div>
                                        <input className="form-control" placeholder="Email Address" type="email" value={userData.email} onChange={updateEmail} required />
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-fw fa-lock"></i>
                                            </span>
                                        </div>
                                        <input className="form-control rounded-0" placeholder="Password" type={passwordVisible ? "text" : "password"} value={userData.password} onChange={updatePassword} required />
                                        <div className="input-group-append" onClick={() => setPasswordVisible(!passwordVisible)}>
                                            <span className="input-group-text bg-white" style={{cursor: 'pointer'}}>
                                                <i className={passwordVisible ? "fa fa-fw fa-eye-slash":"fa fa-fw fa-eye"}></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <button className="btn btn-success btn-block shadow-none">Submit</button>
                                </div>

                                <div className="text-center">
                                    <span>Already Registered? <Link to={getRoute(APP_ROUTES.LOGIN)}>Log In</Link></span>
                                </div>

                            </div>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    </section>
    );
}
