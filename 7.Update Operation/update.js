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


// $min , $max, $mul

db.user.updateOne({
  name: "Manuel"
}, {
  $min: {
    age: 35
  }
})

/**
 * Supose Manuel Age is 40. 
 * $min -  operator will work when set value is smaller than actual value
 * so Actual value is 40 and set value is 35, which is smaller than actaul value, so it will change 40 to 35
 * 
 * $max - do the same things , but opposite . Greater  Than actual value
 */

db.user.updateOne({
  name: "Manuel"
}, {
  $mul: {
    age: 1.1
  }
})

/**
 * $mul - Multipale By
 * age 40 * 1.1
 */

// Drop Fields
//$unset

db.user.updateMany({
  isSporty: true
}, {
  $unset: {
    phone: ""
  }
})

//Rename Fields
//$rename

db.user.updateMany({

}, {
  $rename: {
    age: "totalAge"
  }
})

//upsert()
db.user.updateOne({
  name: "Manuel"
}, {
  $set: {
    age: 45
  },
}, {
  upsert: true
})
/**
 * so bascially upsert do is - 
 * supose we want to update a Documet that name is Manual and set age to 45.
 * if there is no document by mistake in the database , upert:true -> this comand make a new doucment in the the database
 * by default is false
 */