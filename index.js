const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  // Make the Axios request when the route is accessed
  axios.get('https://dummyjson.com/products')
    .then(response => {
    //   console.log(response.data.products); // Log the products to the console
      res.send(response.data.products); // Send the products as the response
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('An error occurred while fetching products');
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
