import { useContext } from "react"
import { Link } from "react-router-dom"
import { APP_ROUTES } from "../../../../config/routes"
import { UserContext } from "../../../../context/user"

export default function Profile(){
    const {currentUser, setCurrentUser} = useContext(UserContext)

    return (
        <section>
            <div className="container">

                <p>
                    Your Profile
                </p>

            </div>
        </section>
    )
}