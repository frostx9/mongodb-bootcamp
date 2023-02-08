/**
 * Ordered Element - Every element insert is standalone process,
 *                  if one is failed , whole operation will failed
 *                  but it didn't roll back. This is default Behaviour
 * 
 * only work for add manual id insert
 */

// To Overcome

de.insertMany([{}, {}], { ordered: true })  // For Roll back if any problem occured

// By Default orderd is true
// ordered : true - it will stop where duplicate id found and no data will be save after that
// ordered : false - It will not stop. data will be add after duplicate id found

// Write Concern
de.insertMany([], { writeConern: { w: 1, j: true, wtimeout: 1000 } })
/**
 * w - For to get Acknowledge
 * j - For Adding In Journale . Like To Do
 */



db.compnay.insertOne({ _id: 1, name: "Demo 1", type: "IT" })

// To Fix Ordered Issue
db.compnay.insertMany([{ _id: 2, name: "Demo 2", type: "Financial services" }, { _id: 1, name: "Demo 3", type: "Agriculture" }, { _id: 3, name: "Demo 4", type: "Chemical industries" }], { ordered: false })

//Acknowledge : false, Journale : false
db.compnay.insertOne({ _id: 4, name: "Demo 5", type: "Commerce" }, { writeConern: { w: 0, j: false } })

//Acknowledge : true, Journale : true
db.compnay.insertOne({ _id: 5, name: "Demo 6", type: "Education" }, { writeConern: { w: 1, j: true } })
