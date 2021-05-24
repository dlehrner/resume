window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const apiGateway = 'https://resumefunctionapp.azurewebsites.net/api/HttpTrigger1?code=L3eZuVosq54FjIrGaSOGtILcKLnOgLjHuShFuL9zZcl/NHlTFClemA=='; 

const getVisitCount = () => {
    let count = 0;
    fetch(apiGateway, {
        mode: 'cors',
    })
    .then(response => {
        return response.json()
    })
    .then(res => {
        //const count = res.Attributes.counter;
        document.getElementById('counter').innerText = count;
        document.getElementById('visitorElem').style.display = 'block';
    })
    return count;
}



