const API = 'localhost:3000/'

const API_ENDPOINTS = {
    // Auth
    LOGIN: API + "login",
    REGISTER: API + "register",

    // User
    UPDATE_PROFILE: API + "user/update-profile",
    UPDATE_PASSWORD: API + "user/update-password",
}

/**
 * Replaces params in endpoints with their values and returns the final url
 * e.g localhost:3000/user/:id translates to localhost:3000/user/1 if 1 is passed as the id in params
 */
 function getApiUrl(endpoint, params = {}){
    let url = endpoint

    for(const key in params){
        url = url.replace(`:${key}`, params[key])
    }

    return url
}

export { API_ENDPOINTS, getApiUrl }
