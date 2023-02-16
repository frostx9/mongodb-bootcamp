//Operator

// Find All
db.users.find()

//Find One
db.users.findOne()

// Comparison Operator
db.movies.find({ runtimes: { $eq: 60 } })

/**
 * $eq :  Equal To
 * $ne : Not Equal To
 * $lt : Lower Than
 * $lte : Lower Than Equalt To
 * $gte : Greate Than Equal To
 */

// For Emabded Document

//For Object
db.movies.find({ "ratings.average": { $gte: 6 } })

//For Array
db.movies.find({ generes: "Drama" })  // Array Includes Drama

db.movies.find({ generes: ["Drama"] })  // Array only have Darama


// $in
db.movies.find({ runtimes: { $in: [30, 60] } }) // Documents give only have runtime 30 and 60

//$nin
db.movies.find({ runtimes: { $nin: [45, 35] } }) // Documents not give only have runtime 45 and 35


//Logical Operators

//$or
db.movies.find({ $or: [{ runtimes: { $nin: [45, 35] } }, { "ratings.average": { $gte: 6 } }] })

//$nor - Nither Or
db.movies.find({ $nor: [{ runtimes: { $nin: [45, 35] } }, { "ratings.average": { $gte: 6 } }] })

//$and
db.movies.find({ $and: [{ runtimes: { $nin: [45, 35] } }, { "ratings.average": { $gte: 6 } }] })

