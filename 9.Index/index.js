db.products.find({ seller: "Max" })
/**
 * In this Query if mongo do collection scan (COLLSCAN). That means monogodb got the products collection and scan every documents to
 * find which seller is Max
 * 
 * This is a default approach
 */


db.users.explain().find()
// It Give the analazise data how mongodb execuate

db.users.explain("executionStats").find()

db.contacts.createIndex({ "dob.age": 1 })
// To Create Index based on age , whics is embaded in dob obejct in assending order

/**
 * Restriction of Index - if we want to query based on all documents then , index is
 * no helpful. It actually slow the execuation time
 * 
 * But if want to fraction of data set form data base the we will use index
 */