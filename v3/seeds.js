var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [{
    name: "Thunder Bluff",
    image: "https://source.unsplash.com/F-GDivo7oOM",
    description: "Home of the Taurens"
  },
  {
    name: "Storm Peak Mountains",
    image: "https://source.unsplash.com/c_-ty6IBcCI",
    description: "Watch the thunder"
  },
  {
    name: "Eastern Plague Lands",
    image: "https://source.unsplash.com/4KrQq8Z6Y5c",
    description: "A spooky place.."
  }
]

function seedDB() {
  //remove all campgrounds
  Campground.remove({}, function(err) {
    if (err) {
      console.log(err);
    }
    console.log("Removed Campgrounds");
    //add a few campgounds
    data.forEach(function(seed) {
      Campground.create(seed, function(err, data) {
        if (err) {
          console.log(err);
        } else {
          console.log("added a campground");
          // create comment
          Comment.create({
            text: "This place is great but I wish there was internet",
            author: "Lohrunaak"
          }, function(err, comment) {
            if (err) {
              console.log(err);
            } else {
              Campground.comments.push(comment);
              Campground.save();
              console.log("Created new comment");
            }
          });
        }
      });
    });
  });

  //add a few comments
}

module.exports = seedDB;
