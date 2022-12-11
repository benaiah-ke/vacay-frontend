const API = 'https://vacay-backend.up.railway.app/'

const API_ENDPOINTS = {
    // Auth
    LOGIN: API + "login",
    REGISTER: API + "signup",
    GET_CURRENT_USER: API + "me",

    // User
    UPDATE_PROFILE: API + "users/:id",
    UPDATE_PASSWORD: API + "users/:id",

    // Expeeriences
    GET_PACKAGES: API + "destinations",
    BOOK_PACKAGE: API + "reservations",

    GET_BOOKING_HISTORY: API + "user/booking-history",
    DELETE_BOOKING: API + "user/delete-booking/:id", // :id - id of booking to delete
}

/**
 * Replaces params in endpoints with their values and returns the final url
 * if the param does not exist, it's added as a query parameter
 * e.g localhost:3000/user/:id translates to localhost:3000/user/1 if 1 is passed as the id in params
 */
 function getApiUrl(endpoint, params = {}){
    let url = endpoint
    let queryParams = []

    for(const key in params){
        // If the url has the key as a param, replace it
        if(url.includes(`:${key}`)){
            url = url.replace(`:${key}`, params[key])
        }else{
            // Else add it as a query param
            queryParams.push(`${key}=${params[key]}`)
        }
    }

    // Add query params to url
    if(queryParams.length > 0){
        url += `?${queryParams.join('&')}`
    }

    return url
}

export { API_ENDPOINTS, getApiUrl }
