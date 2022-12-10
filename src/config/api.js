const API = 'localhost:3000/'

const API_ENDPOINTS = {
    // Auth
    LOGIN: API + "login",
    REGISTER: API + "register",

    // User
    UPDATE_PROFILE: API + "user/update-profile",
    UPDATE_PASSWORD: API + "user/update-password",

    // Expeeriences
    GET_PACKAGES: API + "packages",
    BOOK_PACKAGE: API + "book-package"
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
