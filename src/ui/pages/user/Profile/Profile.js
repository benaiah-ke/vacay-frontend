import { useContext, useState } from "react"
import Swal from "sweetalert2"
import { API_ENDPOINTS, getApiUrl } from "../../../../config/api"
import { UserContext } from "../../../../context/user"
import { post } from "../../../../helpers/requests"
import Loader from "../../../components/Loader"

export default function Profile(){
    const {currentUser, setCurrentUser} = useContext(UserContext)

    const [updatedUser, setUpdatedUser] = useState(currentUser)

    const [passwordData, setPasswordData] = useState({
        current_password: "",
        new_password: "",
        confirm_password: "",
    })

    const [loading, setLoading] = useState(false) // Whether data is being sent to backend


    // Form actions
    function updateProfile(e){
        e.preventDefault()

        setLoading(true) // Set the loading state

        // send the updated user to the backend
        post(getApiUrl(API_ENDPOINTS.UPDATE_PROFILE), updatedUser)
            .then((response) => {
                setLoading(false) // Done sending data

                if(response.success){
                    // Profile updated successfully
                    // Update the current user
                    setCurrentUser(updatedUser)
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Update Failed',
                        text: 'Unable to update your profile. Please try again',
                    })
                }
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)

                Swal.fire({
                    icon: 'error',
                    title: 'Update Failed',
                    text: 'Something went wrong. Please try again',
                })
            })
    }

    function updatePassword(e){
        e.preventDefault()

        setLoading(true) // Set the loading state

        // send the updated password data to the backend
        post(getApiUrl(API_ENDPOINTS.UPDATE_PASSWORD), updatedUser)
            .then((response) => {
                setLoading(false) // Done sending data

                if(response.success){
                    // Password updated successfully
                    Swal.fire({
                        icon: 'error',
                        title: 'Password Updated',
                        text: 'Your password has been updated successfully',
                    })
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Update Failed',
                        text: 'Unable to update your password. Please try again',
                    })
                }
            })
            .catch((error) => {
                setLoading(false)
                console.log(error)

                Swal.fire({
                    icon: 'error',
                    title: 'Update Failed',
                    text: 'Something went wrong. Please try again',
                })
            })
    }

    // DOM event handlers
    function updateName(e){
        setUpdatedUser({...updatedUser, name: e.target.value})
    }

    function updateEmail(e){
        setUpdatedUser({...updatedUser, email: e.target.value})
    }

    function updatePhone(e){
        setUpdatedUser({...updatedUser, phone: e.target.value})
    }

    function updateCurrentPassword(e){
        setPasswordData({...passwordData, current_password: e.target.value})
    }

    function updateNewPassword(e){
        setPasswordData({...passwordData, new_password: e.target.value})
    }

    function updateConfirmPassword(e){
        setPasswordData({...passwordData, confirm_password: e.target.value})
    }

    return (
        <section>
            <div className="container">

                <div className="row">
                    <div className="col-md-10 col-lg-10 has-loader">
                        {
                            loading ?
                                <Loader text="Updating" />
                                :
                                ''
                        }

                        <h3>Your Profile</h3>

                        <form className="mb-4" onSubmit={updateProfile}>

                            <div className="form-group mb-4">
                                <div className="row">

                                    <div className="d-flex align-items-center col-12 col-md-6 col-lg-4">
                                        <label className="mb-0">Your Name</label>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-8">
                                        <input className="form-control" onChange={updateName} value={updatedUser.name} />
                                    </div>

                                </div>    
                            </div>

                            <div className="form-group mb-4">
                                <div className="row">

                                    <div className="d-flex align-items-center col-12 col-md-6 col-lg-4">
                                        <label className="mb-0">Phone Number</label>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-8">
                                        <input className="form-control" type="tel" onChange={updatePhone} value={updatedUser.phone} />
                                    </div>

                                </div>    
                            </div>

                            <div className="form-group mb-4">
                                <div className="row">

                                    <div className="d-flex align-items-center col-12 col-md-6 col-lg-4">
                                        <label className="mb-0">Email</label>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-8">
                                        <input className="form-control" type="email" onChange={updateEmail} value={updatedUser.email} />
                                    </div>

                                </div>    
                            </div>

                            <div className="text-right">
                                <button className="btn btn-primary">Save Changes</button>
                            </div>

                        </form>

                        <h3>Change Password</h3>

                        <form onSubmit={updatePassword}>

                            <div className="form-group mb-4">
                                <div className="row">

                                    <div className="d-flex align-items-center col-12 col-md-6 col-lg-4">
                                        <label className="mb-0">Current Password</label>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-8">
                                        <input className="form-control" onChange={updateCurrentPassword} type="password" value={passwordData.current_password} />
                                        <small>Provide current password to confirm it's you</small>
                                    </div>

                                </div>    
                            </div>

                            <div className="form-group mb-4">
                                <div className="row">

                                    <div className="d-flex align-items-center col-12 col-md-6 col-lg-4">
                                        <label className="mb-0">New Password</label>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-8">
                                        <input className="form-control" onChange={updateNewPassword} type="password" value={passwordData.new_password} />
                                        <small>The password you wish to start using</small>
                                    </div>

                                </div>    
                            </div>

                            <div className="form-group mb-4">
                                <div className="row">

                                    <div className="d-flex align-items-center col-12 col-md-6 col-lg-4">
                                        <label className="mb-0">Confirm New Password</label>
                                    </div>

                                    <div className="col-12 col-md-6 col-lg-8">
                                        <input className="form-control" onChange={updateConfirmPassword} type="password" value={passwordData.confirm_password} />
                                        {
                                            passwordData.confirm_password !== "" && passwordData.new_password !== passwordData.confirm_password ?
                                                <small className="text-danger">Passwords do not match</small>
                                                :
                                                <small>Type new password again</small>
                                        }
                                    </div>

                                </div>    
                            </div>

                            <div className="text-right">
                                <button className="btn btn-primary">Save Changes</button>
                            </div>

                        </form>

                    </div>
                </div>

            </div>
        </section>
    )
}