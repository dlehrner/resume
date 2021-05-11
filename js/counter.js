// const visitor = document.getElementById('visitor');

const apiUrl = "https://resumefunctionapp.azurewebsites.net/api/HttpTrigger1?code=";
const appendUrl = "L3eZuVosq54FjIrGaSOGtILcKLnOgLjHuShFuL9zZcl/NHlTFClemA==";

fetch([apiUrl, appendUrl].join(''))
    .then(response => {
        return response.json();
    })
    .then (response => {
        console.log('Fetch succeeded to function.');
        console.log(response);
        count = response.VisitorCount;
        document.getElementById('visitorElem').innerHTML = 'You are visitor ' + count + '.';
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });