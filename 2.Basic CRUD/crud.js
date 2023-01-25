// 1. To Change Monogdb Port
// mongod--port 27108

// To Change other data or other Collection ... we use 'use salaryG'

// JSON(JavaScript Object Notation)
// BSON(Binary JSON)

// MongoDB use BSON data type to store in database

// 1.Custom ID
db.flight.insrtOne({ _id: "TXL-01", "name": "FROST" })

// 2.Find All Data
db.products.find()

// 3. Delete One 
db.flight.deleteOne({ "name": "FROST" })

// 4. Update One
db.flight.updateOne({
  _id: "4546546545616"
}, {
  $set: {
    "name": "FROSTX9"
  }
})

// 5. Update Many
db.flight.updateMany({},
  {
    $set: {
      "name": "FROSTX9"
    }
  })

db.flight.update({ _id: "TXL-01" }, { delayed: true })  //It also work as updateMany
// but it will overwrite all value with 'delayed:true'

// 6.Delete Many
db.products.deleteMany({ marker: "toDelete" })

// 7.Insert Many
db.products.insrtMany([{}, {}])

// 8. Find With Greater Than
db.products.find({ distanc: { $gt: 500 } })
// in mongoose is -  $gte

// 9.Repalce One
db.flightData.replaceOne({ _id }, {
  "name": "FROSTX9"
})
//It repalce with everytinhg with "name": "FROSTX9"

/**
 * in find() didnt give back all data, but retrun a cursor. whics is a type of meta data
 * to access all data -
 */
db.passengers.find().toArray()

db.passengers.find().forEach((item) => { printjson(item) })

//10 Projection. in mongoose is select
db.passengers.find({}, { name: 1, _id: 0 }).toArray()
// 1 - include
// 0 - exclude

//11. Embaded Document .  Object
db.flightData.updateMany({}, { $set: { status: { descriptiom: "on-time", lastUpdate: "1-hour ago" } } })

//. Array
db.flightData.updateOne({ name: "Albert" }, { $set: { hobby: ["Painting", "Driving"] } })

//12 Access Structrued Data

db.flightData.findOne({ name: "Albert" }).hobby // It will Give Embadded Array data whih array name is hobby

db.flightData.find({ hobby: "Albert" }) // in here 