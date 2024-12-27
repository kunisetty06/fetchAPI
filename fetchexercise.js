// URL to fetch data from
const url = 'https://jsonplaceholder.typicode.com/posts/1';
https://dummyjson.com/image
// Fetch data from the URL
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

    //hello manideep