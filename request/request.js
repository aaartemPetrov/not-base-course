const url = 'https://jsonplaceholder.typicode.com/users';

//xml http request


function xhrSendRequest(method, url, body) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = 'json';

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        }

        xhr.onerror = () => {
           reject(xhr.response);
        }
        
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(body));
    });
}

xhrSendRequest('GET', url)
.then(response => console.log(response))
.catch(error => console.log(String(error)));

const body = { name: 'my name is', value: 'chicki-chicki SLIM SHADY'};

xhrSendRequest('POST', url, body);


//fetch
function fetchSendRequest(method, url, body) {

    const header = {
        "Content-Type" : "application/json"
    }

    return fetch(url, {
        method: method,
        body: JSON.stringify(body),
        headers: header
    });
}

fetchSendRequest('GET', url)
.then(response => console.log(response.json()))
.catch(error => console.log(String(error)));

fetchSendRequest('POST', url, body)
.then(response => console.log(response.json()))
.catch(error => console.log(String(error)));

