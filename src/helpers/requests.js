function get(url){
    return sendRequest(url, {
        methos: 'GET',
        headers: {
            'content-type':'application/json'
        }
    })
}

function post(url, data){
    return sendRequest(url, {
        method: 'POST',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify(data)
    });
}

function sendRequest(url, options = {}){
    return fetch(url, options)
        .then(response => response.json())
}

export { get, post }