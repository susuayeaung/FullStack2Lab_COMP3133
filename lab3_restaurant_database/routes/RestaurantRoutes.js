const express = require('express');
const restaurantModel = require('../models/Restaurant');
const app = express();

//4. return ALL restaurant details
//http://localhost:3000/restaurants
app.get('/restaurants', async (req, res) => {
  const restaurants = await restaurantModel.find({});  
  try {
    console.log(restaurants[0].name)
    res.status(200).send(restaurants);
  } catch (err) {
    res.status(500).send(err);
  }
});


// 5. return ALL restaurant details by cuisine
//http://localhost:3000/restaurants/cuisine/Japanese
app.get('/restaurants/cuisine/:name', async (req, res) => {
  const name = req.params.name
   restaurants = await restaurantModel.find({cuisine : name});
  console.log(restaurants)  
  try {
    if(restaurants.length != 0){
      res.send(restaurants);
    }else{
      res.send(JSON.stringify({status:false, message: "No data found"}))
    }
  } catch (err) {
    res.status(500).send(err);
  }
});


// 6. sortBy ASC/DESC
//http://localhost:3000/restaurants?sortBy=ASC  
app.get('/restaurants', async (req, res) => {
    try {
        if(sortBy == "ASC"){
          var mysort = {restaurant_id: 1}
        }else{
          var mysort = {restaurant_id: -1}
        }

       restaurants = restaurantModel.find({})
                          .sort({'restaurant_id': mysort})
                          .select('cuisine name city restaurant_id')
                          .exec((err, data) => {
                            if (err){
                                res.send(JSON.stringify({status:false, message: "No data found"}));
                            }else{
                                res.send(data);
                            }
                          });
      
      } catch (err) {
        res.status(500).send(err);
      }
  });


// 7. return restaurants details where all cuisines are equal to Delicatessen and the city is not equal to Brooklyn
//http://localhost:3000/restaurants/Delicatessen
app.get('/restaurants/Delicatessen', async (req, res) => {  
  try {
     restaurants = restaurantModel.
                        find({cuisine : 'Delicatessen'}, {city: {$not: "Brooklyn"}})
                        .sort({'name':1})
                        .select('cuisine name city')
                        .exec((err, data) => {
                          if (err){
                              res.send(JSON.stringify({status:false, message: "No data found"}));
                          }else{
                              res.send(data);
                          }
                        });
    } catch (err) {
      res.status(500).send(err);
    }
});

module.exports = app

//Create the database record
restaurantModel.create(
  [{
    "address": {
    "building": "1008",
    "street": "Morris Park Ave",
    "zipcode": "10462"
   },
   "city": "Bronx",
   "cuisine": "Bakery",
   "name": "Morris Park Bake Shop",
   "restaurant_id": "30075445"
  },
  {
    "address": {
    "street": "Thai Son Street",
    "zipcode": null
   },
   "city": "Manhattan",
   "cuisine": "Vietnamese",
   "name": "Pho Me Long Time",
   "restaurant_id": "30075455"
  },
  {
    "address": {
    "building": "253",
    "street": "East 167 Street",
    "zipcode": null
   },
   "city": "Bronx",
   "cuisine": "Chicken",
   "name": "Mom's Fried Chicken",
   "restaurant_id": "40382900"
  },
  {
    "address": {
    "building": "120",
    "street": "East 56 Street",
    "zipcode": "19800"
   },
   "city": "Mahattan",
   "cuisine": "Italian",
   "name": "Montebello Restaurant",
   "restaurant_id": "40397082"
  },
  {
    "address": {
    "building": "195",
    "street": "Soprano Street",
    "zipcode": "17500"
   },
   "city": "Staten Island",
   "cuisine": "Hamburgers",
   "name": "Joeys Burgers",
   "restaurant_id": "40397555"
  },
  {
    "address": {
    "building": "200",
    "street": "Queens Boulevard",
    "zipcode": "19700"
   },
   "city": "Queens",
   "cuisine": "American",
   "name": "Brunos on the Boulevard",
   "restaurant_id": "40397678"
  },
  {
    "address": {
    "building": "555",
    "street": "Sushi Street",
    "zipcode": "17700"
   },
   "city": "Brooklyn",
   "cuisine": "Japanese",
   "name": "Iron Chef House",
   "restaurant_id": "40397699"
  },
  {
    "address": {
    "building": "555",
    "street": "Fontana Street",
    "zipcode": null
   },
   "city": "Brooklyn",
   "cuisine": "Japanese",
   "name": "Wasabi Sushi",
   "restaurant_id": "40398000"
  },
  {
    "address": {
    "building": "900",
    "street": "Goodfellas Street",
    "zipcode": "17788"
   },
   "city": "Brooklyn",
   "cuisine": "Delicatessen",
   "name": "Sal's Deli",
   "restaurant_id": "40898000"
  },
  {
    "address": {
    "building": "909",
    "street": "44 Gangster Way",
    "zipcode": "17988"
   },
   "city": "Queens",
   "cuisine": "Delicatessen",
   "name": "Big Tony's Sandwich Buffet",
   "restaurant_id": "40898554"
  },
  {
    "address": {
    "building": "1201",
    "street": "121 Canolli Way",
    "zipcode": "17989"
   },
   "city": "Queens",
   "cuisine": "Delicatessen",
   "name": "The Godfather Panini Express",
   "restaurant_id": "40898554"
  }]
  )