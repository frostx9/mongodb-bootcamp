
//mongod --help

//------------To Customize Db path------------
//mongod --dbpath C:\data  

//------------To Customize Log path------------
//mongod --logpath C:\data --logpath C:\log\log.txt 

// --fork (only for linux and mac (kind of))
//mongod --fork --logpath C:\data --logpath C:\log\log.txt   - To statrt Mongod Server as a child process


// Shudt Down Server
// First switch to Admin
/**
 * use admin
 *
 * db.shutdownServer()
 */

// Mongodb Config