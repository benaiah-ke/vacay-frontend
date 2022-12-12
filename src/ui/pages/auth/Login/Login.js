import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { API_ENDPOINTS, getApiUrl } from '../../../../config/api';
import { APP_ROUTES, getRoute } from '../../../../config/routes';
import { UserContext } from '../../../../context/user';
import { post } from '../../../../helpers/requests';
import Loader from '../../../components/Loader';

export default function Login() {
    const {currentUser, setCurrentUser} = useContext(UserContext)

    const [loading, setLoading] = useState(false) // Whether credentials are being sent at the moment

    const [passwordVisible, setPasswordVisible] = useState(false) // Make password visible

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    // If a user is already logged in, redirect to the dashboard
    if(currentUser){
        navigate(APP_ROUTES.DASHBOARD)
    }

    /**
     * Sends the credentials to the backend for authentication
     */
    function authenticate(event){
        event.preventDefault()

        // Notify that loading is ongoing
        setLoading(true)

        post(getApiUrl(API_ENDPOINTS.LOGIN), credentials)
            .then((response) => {
                setLoading(false) // Done

                if(!response.error){
                    // Authenticated
                    // User is at data.user
                    setCurrentUser(response)

                    navigate(APP_ROUTES.DASHBOARD)
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Login Failed',
                        text: response.error,
                    })
                }
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)

                Swal.fire({
                    icon: 'error',
                    title: 'Login Failed',
                    text: 'Something went wrong. Please try again',
                })
            })
    }


    // DOM EVENT HANDLERS
    function updateEmail(event){
        setCredentials({ ...credentials, email: event.target.value })
    }

    function updatePassword(event){
        setCredentials({ ...credentials, password: event.target.value })
    }

    return (
    <section className="py-4 py-md-5">
        <div className="container">

            <div className="row">

                <div className="col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto">

                    <form onSubmit={authenticate}>

                        <div className="border mx-auto has-loader">

                            {
                                loading ?
                                <Loader text="Authenticating"/>
                                :
                                ''
                            }

                            <div className="px-4 pt-5 pb-3 top text-center">
                                <Link className="logo d-block mb-4" to={APP_ROUTES.HOME}>
                                    <img alt="Logo" className="logo" src="/logo.png" />
                                </Link>

                                <h4 className="mb-0">Log in to your account</h4>
                            </div>

                            <div className="p-4">

                                <div className="form-group mb-3">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-fw fa-envelope"></i>
                                            </span>
                                        </div>
                                        <input className="form-control" name="email" placeholder="Email Address" type="email" value={credentials.email} onChange={updateEmail} required />
                                    </div>
                                </div>

                                <div className="form-group mb-4">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text">
                                                <i className="fa fa-fw fa-lock"></i>
                                            </span>
                                        </div>
                                        <input className="form-control rounded-0" placeholder="Password" name="password" type={passwordVisible ? "text" : "password"} value={credentials.password} onChange={updatePassword} required />
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
                                    <span>Not Registered? <Link to={getRoute(APP_ROUTES.REGISTER)}>Create Account</Link></span>
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
