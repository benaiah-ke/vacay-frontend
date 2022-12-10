function get(url){
    return sendRequest(url)
}

function post(url, data){
    return sendRequest(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });
}

function sendRequest(url, options = {}){
    return fetch(url, options)
        .then(response => response.json())
}

export { get, post }