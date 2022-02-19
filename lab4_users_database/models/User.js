const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name'],
        trim: true,
        lowercase: true
    },
    username: {
        type: String,
        required: [true, 'Please enter the username'],
        trim: true,
        lowercase: true,
        minlength: 4
    },
    email: {
        type: String,
        index: true, //Optional if unique is defined
        unique: [true, "Duplicate Email Not allowed"],
        trim: true,
        uppercase: true,
        //Custom validation
        validate: function(value) {
          var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
          return emailRegex.test(value);
        }
      },
    address: {
        street: {
            type: String,
            required: [true, 'Please enter the street name'],
            trim: true
        },
        suite: {
          type: String,
          required: [true, 'Please enter the suite number'],
          trim: true
        },
        city: {
            type: String,
            requred: [true, 'Please enter the city name'],
            trim: true,
            validate: function(value) {
              var cityRegex = /^[a-zA-Z ]*$/;
              return cityRegex.test(value);
            }
        },
        zipcode: {
          type: String,
          required: [true, 'Please enter the zipcode'],
          trim: true,
          validate: function(value) {
            var zipRegex = /^[0-9]{5}(?:-[0-9]{4})?*$/;
            return zipRegex.test(value);
          }
        },
        geo: {
            lat: {
                type: String,
                required: true,
                trim: true
            },
            lng: {
                type: String,
                required: true,
                trim: true
            }
        }
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        validate: function(value) {
          var phRegex = /^[0-9]{1}-(?:-[0-9]{3}-?:-[0-9]{3}-?:-[0-9]{4})?*$/;
          return phRegex.test(value);
        }
    },
    website: {
        type: String,
        required: true,
        trim: true,
        validate: function(value) {
          var websiteRegex = /^[http|https?://]*$/;
          return websiteRegex.test(value);
        }
    },
    company: {
        name: {
            type: String,
            required: true,
            trim: true
        },
        catchPhrase: {
            type: String,
            required: true,
            trim: true
        },
        bs: {
            type: String,
            required: true,
            trim: true
        }
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;