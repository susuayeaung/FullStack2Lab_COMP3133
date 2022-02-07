const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  address: {
      building: {
          type: String,
          //required: [true, 'Please enter the building number'],
          required: false,
          trim: true
      },
      street: {
          type: String,
          //required: [true, 'Please enter the street name'],
          required: false,
          trim: true
      },
      zipcode: {
          type: String,
          //required: [true, 'Please enter the zipcode'],
          required: false,
          trim: true
      }
  },
  city: {
      type: String,
      //requred: [true, 'Please enter the city name'],
      required: false,
      trim: true
  },
  cuisine: {
    type: String,
    required: false,
    trim:true
  },
  name: {
      type: String,
      //required: [true, 'Please enter the restaurant name'],
      required: false,
      trim: true,
      lowercase: true
  },
  restaurant_id: {
      type: String,
      //required: [true, 'Please enter the restaurant id'],
      required: false,
      trim: true
  }
});

/*
//Declare Virtual Fields
EmployeeSchema.virtual('fullname')
  .get(function(){
    return `${this.firstname} ${this.lastname}`
  })
  .set(function(value){
    console.log(value)
  })


//Custom Schema Methods
//1. Instance Method Declaration
EmployeeSchema.methods.getFullName = function(){
  return `${this.firstname} ${this.lastname}`
}

EmployeeSchema.methods.getFormattedSalary = function(){
  return `${this.salary}`
}

//2. Static method declararion
EmployeeSchema.static("getEmployeeByFirstName", function(name){
  return this.find({firstname: value})
})

//Writing Query Helpers
EmployeeSchema.query.byLastName = function(value){
  return this.where({lastname: value})
}

EmployeeSchema.query.byFirstName = function(value){
  return this.where({firstname: value})
}

EmployeeSchema.query.byFirstName = function(value, salary){
  return this.where({firstname: value})
              .where('salary').gte(salary)
}

EmployeeSchema.pre('save', (next) => {
  console.log("Before Save")
  let now = Date.now()
   
  this.updatedat = now
  // Set a value for createdAt only if it is null
  if (!this.created) {
    this.created = now
  }
  
  // Call the next function in the pre-save chain
  next()
});

EmployeeSchema.pre('findOneAndUpdate', (next) => {
  console.log("Before findOneAndUpdate")
  let now = Date.now()
  this.updatedat = now
  console.log(this.updatedat)
  next()
});


EmployeeSchema.post('init', (doc) => {
  console.log('%s has been initialized from the db', doc._id);
});

EmployeeSchema.post('validate', (doc) => {
  console.log('%s has been validated (but not saved yet)', doc._id);
});

EmployeeSchema.post('save', (doc) => {
  console.log('%s has been saved', doc._id);
});

EmployeeSchema.post('remove', (doc) => {
  console.log('%s has been removed', doc._id);
});
*/

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);
module.exports = Restaurant;