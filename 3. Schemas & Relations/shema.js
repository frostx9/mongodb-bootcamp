// To Drop Database
/**
 * 1. First Got to the database using use <databasename>
 * 2. Then hit command with db.dropDatabase()
 */

//Drop Collection
/**
 * 1. First Got to the database using use <databasename>
 * 2. Then hit command with db.<collection name>.drop()
 */

//Data Type
/**
 * 1. String / Text
 * 2. Boolean
 * 3. Number
 * 4. ObjectId
 * 5. ISODate - new Date()
 * 6. Timestamps - new Timestamps()
 */

//1. Status
db.stats() // This will show stattics Of Database

// NumberInt() - This will reduce data size.


//Validation
db.createCollection("posts", {
  validator: {
    $jsonSchema: {
      bsonType: 'object',  // Every document should be object
      required: ['title', 'text', 'creator', 'comments'],  // This all time requaired
      properties: {
        title: {
          bsonType: "string",
          description: "Must Be A String"
        },
        comment: {
          bsonType: "array",
          description: "Must Be A String",
          items: {
            bsonType: 'object',
            properties: {
              text: 'string'
            }
          }
        }
      }
    }
  }
})


//bsonType = "string", "array", "objectId", "object"


// Adminstarion Command for changing validation Action on previous document
db.runCommand({
  collMod: "posts",
  validator: {
    $jsonSchema: {
      bsonType: 'object',  // Every document should be object
      required: ['title', 'text', 'creator', 'comments'],  // This all time requaired
      properties: {
        title: {
          bsonType: "string",
          description: "Must Be A String"
        },
        comment: {
          bsonType: "array",
          description: "Must Be A String",
          items: {
            bsonType: 'object',
            properties: {
              text: 'string'
            }
          }
        }
      }
    }
  },
  validtionAction: "warn"
})
