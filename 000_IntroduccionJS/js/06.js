//https://jsonplaceholder.typicode.com/

//Fetch API con promises

const url = 'https://jsonplaceholder.typicode.com/comments';
const url2 = 'https://jsonplaceholder.typicode.com/posts';
const url3 = 'https://jsonplaceholder.typicode.com/photos';

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    }
    )
    .catch(error => console.log(error));



const consultarAPI = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
}
consultarAPI()

const consultarAPI2 = async() => {
    try {
        const inicio = performance.now()
        
        const [response, response2, response3] = await Promise.all([fetch(url),fetch(url2),fetch(url3)])
       
        const [data, data2, data3] = await Promise.all([response.json(), response2.json(), response3.json()])
        console.log(data)
        console.log(data2)
        console.log(data3)

        
        const fin = performance.now()
        
    } catch (error) {
    console.log(error.message)
        
    }
}


consultarAPI2()
