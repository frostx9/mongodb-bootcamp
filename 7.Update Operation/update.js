//Update

//updateOne()

db.user.updateOne({
  _id: "123456789"
}, {
  $set: {
    hobbies: "Playing Game",
    like: "Cooking"
  }
})



//updateMany()

db.user.updateOne({
  hobbie: "Sports"  // We can use any field to find specific document beside id
}, {
  $set: {
    isSporty: true  // We can also insert new data
  }
})

// Increament / Decreament Vlaue

db.user.updateOne({
  name: "Manuel"
}, {
  $inc: {
    age: 2
  },
  $set: {
    isSporty: false
  }
})

/**
 * $inc - Increment. Above the quarey. we said that find a document name with Manuel and increamnt his age by 2
 * 
 */


db.user.updateOne({
  name: "Manuel"
}, {
  $inc: {
    age: -2
  },
  $set: {
    isSporty: false
  }
})

/**
 * $inc - In here it also work as a drement
 */