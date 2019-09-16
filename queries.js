/* Add all the required libraries*/
const util = require('util');

var fs = require('fs'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect(config.db.uri, options);

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
    Listing.findOne({ 'name': 'Library West' }, function (err, place) {
        if (err) return handleError(err);
        console.log(place);
    });
  
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
    Listing.findOneAndRemove({ 'code': 'CABL' }, function (err, place) {
        if (err) return handleError(err);
        console.log(place);
    });
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
    Listing.findOneAndUpdate({ 'name': 'Phelps Laboratory' }, {
        $set: { address: '1953 Museum Rd, Gainesville, FL 32603' } }, { new: true }, function (err, place) {
        if (err) return handleError(err);
        console.log(place);
    });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
    Listing.find({ __v: 0 }, function (err, place) {
        if (err) return handleError(err);
        console.log(place);
    });

};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
