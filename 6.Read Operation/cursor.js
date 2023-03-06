// Cursor

// next()

const dataCursor = db.movies.find()
dataCursor.next()

/**
 * It give all data from index 0 to 1,2,4,5 ..... whne next() is called
 */

// printjson() .. it from monog driver. It gives all data. Monog by default find() give first 20 data
dataCursor.forEach(doc => { printjson(doc) })

//hasNext()

db.movies.find().hasNext()

/**
 * true - when have document
 * false - when dont have any documenty
 */

// sort()
/**
 * 1  --> Assendin  [Top to Low]
 * -1 --> Descnding [Low to Top]
 */

// First data will be sort by avg (Descindig order) the it sorrted documents will be sort by rubndtime(Assending Order)
db.movies.find().sort({ avg: -1, runtime: 1 })


//Skip and Limit - Pagination
/**
 * Skip = Skip from begining 10 docuemnts
 * limit = Give me only 10 documents
 */
db.movies.find().sort({ avg: -1, runtime: 1 }).skip(10).limit(10)

// Order = sort -> skip -> limit

//Projection / Select in monoose
// Only data we need

/**
 * 1 = Include
 * 0 = Exclude
 */

db.movies.find({}, { name: 1, runtime: 1, rating: 1 })

// $slice
// It retuns only number of  document which user will be set
db.movies.find({ "rating.avg": { $gt: 9 } }, { genre: { $slice: 2 } }) //in here monog give all docments those rating avg is greater than 9
// and also in projction part it gives genre array with only first 2 document

/**
 * write pattern
 * $slice : 2 --> only 2 docments
 * $slice : [1, 2] --> Skip first 1 st one and then next 2 documents
 */