const { default: axios } = require("axios");

const getProducts = axios.get('https://dummyjson.com/products').then(Response=>{
    console.log(Response.data.products);
}).catch(err=>{
    console.log(err);
});


