const APP_ROUTES = {
    HOME: "/",
    
    // Auth
    LOGIN: "/login",
    REGISTER: "/register",

    // User
    DASHBOARD: "/user/dashboard",
    PROFILE: "/user/profile",
    EXPERIENCES: "/user/experiences",
    NEW_EXPERIENCE: "/user/new-experience",

}

/**
 * Replaces params in routes with their values and returns the final route
 */
function getRoute(route, params = {}){
    let url = route

    for(const key in params){
        url = url.replace(`:${key}`, params[key])
    }

    return url
}

export { APP_ROUTES, getRoute }
