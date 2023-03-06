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
