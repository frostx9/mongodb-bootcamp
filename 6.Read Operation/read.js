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

//$not
db.movies.find({ runtimes: { $not: { $eq: 60 } } })
// It says runtime is not equal to 60

//$ne - Not Eaual To
db.movies.find({ runtimes: { $ne: 60 } })


//Element Operator

//$exsist
db.user.find({ age: { $exists: true, $gt: 60 } })
// It says that find all document that have age field exsist and age value is greatr than 60

db.user.find({ age: { $exists: true, $ne: null } })
// age field exsists , age is not null

//$type
db.user.find({ age: { $type: "number" } })
// It says that find all documents that age have number


//Evaluation Operator

//$regex

//$expr - Exprassion
db.sales.find({ $expr: { $gt: ['$value', '$target'] } })
//It says that find all documents where value is greater than target
// This is how we write expreassions in mongo query

//$cond - Condition
//$subtract - Subtract

await Sales.find({ $expr: { $gt: [{ $cond: { if: { $gte: ["$sales", 280] }, then: { $subtract: ["volume", 50] }, else: "$volume" } }, "target"] } })
/**
 * it says that find all document that
 *
 * first condtion - all volume must be above 280 (if: { $gte: ["$volume", 280] }), and then target must be less than 230 ( $subtract: ["volume", 30]) => 280 - 50 = 30
 *
 * second condtion - if condtion is not much above then retune other document (else: "$volume")
 */

// Querying Arrauys

// For Embaded Document
/**
 * name:[{
 *  first: "Amit"
 *  last : "Sen"
 * },{
 *  first: "Suman"
 *  last : "Deb"
 * }]
 * 
 */

await user.findOne({ "name.first": "Amit" }).exec()


// $size
// Find User Who have 3 hobies... Hobbies array content 3 value
db.user.find({ hobbies: { $size: 3 } })   // --> Find user , which hobbies array exact size is 3

//$all
// When dont care about order
db.movies.find({ genre: { $all: ["thriller", "action"] } })

//$elemMatch
// Find user which title is sports but frequncy is 2

db.user.find({ hobbies: { $elemMatch: { title: "Sports", frequncy: { $gte: 3 } } } })

// Skip and Limit


