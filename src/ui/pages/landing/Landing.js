import { Link } from 'react-router-dom'
import { APP_ROUTES } from '../../../config/routes'
import './Landing.css'

export default function Landing() {
  return (
    <>
    
        <section class="hero py-5">
            <div class="container">

                <div class="row">

                    <div class="col-sm-6 col-lg-6 d-flex align-items-center">
                        <div>
                            <h5 class="hero-subtitle mb-3">
                                Save time and money with our
                            </h5>
                            <h4 class="hero-title mb-4">
                                <strong class="text-primary">complete</strong> travel packages
                            </h4>

                            <p class="lead">
                                We have partnered with travel agencies and service providers to offer you
                                fully packaged travel deals at the best market prices
                            </p>

                            <div>
                                <Link to={APP_ROUTES.NEW_EXPERIENCE} class="btn btn-primary btn-lg">Explore Our Packages</Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-6">
                        <img src="img/undraw_travelers.svg" class="hero-img" alt="Travellers" />
                    </div>

                </div>

            </div>
        </section>

        <section class="py-5 bg-white">
            <div class="container">
                <h2 class="text-center mb-4">Included in each package</h2>

                <div class="row">

                    <div class="col-sm-6 col-lg-4">
                        <div class="text-center">

                            <img src="img/accomodation.png" alt="" class="img-icon" />

                            <h4 class="mb-3">Accomodation</h4>

                            <p class="lead mt-0 mb-4 text-left">
                                We will reserve a hotel room for you in a luxurious hotel
                                for as long as the duration of your stay or vacation 
                            </p>

                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-4">
                        <div class="text-center">

                            <img src="img/activities.png" alt="" class="img-icon" />

                            <h4 class="mb-3">Fun Activities</h4>

                            <p class="lead mt-0 mb-4 text-left">
                                We will ensure that depending on where you are going,
                                you'll have lots of fun activities to choose from during your stay
                            </p>

                        </div>
                    </div>

                    <div class="col-sm-6 col-lg-4">
                        <div class="text-center">

                            <img src="img/meals.png" alt="Meals" class="img-icon" />

                            <h4 class="mb-3">Meals</h4>

                            <p class="lead mt-0 mb-4 text-left">
                                We will ensure that you have a variety of meals to choose from
                                for your daily breakfast, lunch and dinner
                            </p>

                        </div>
                    </div>

                </div>

                <div class="text-center">
                    <Link to={APP_ROUTES.NEW_EXPERIENCE} class="btn btn-lg btn-primary">Explore Packages</Link>
                </div>

            </div>
        </section>


        <section class="bg-dark py-5">
            <div class="container">

            <div class="row">
                <div class="col-lg-8 mx-auto text-center">

                    <p class="lead text-white">
                        Our services are pocket friendly and awesome.
                        Create an account if you have none and start
                        travelling in style with zero hassle today
                    </p>

                    <div>
                        <Link to={APP_ROUTES.DASHBOARD} class="btn btn-info btn-lg">Get Started</Link>
                    </div>

                </div>
            </div>

            </div>
        </section>

    
    </>
  )
}