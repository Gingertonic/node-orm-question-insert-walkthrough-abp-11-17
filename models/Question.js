const db = require("../config/db")

class Question{
  static CreateTable() {
    return new Promise(function(resolve){
      const sql = `CREATE TABLE questions (
        id INTEGER PRIMARY KEY,
        content TEXT
      )`

      db.run(sql, function(){
        resolve("questions table created")
      })
    })
  }

  constructor(content){
    this.content = content
  }

  static insert(instance) {
    var self = instance;
    return new Promise(function(resolve) {
      db.run(this, function(){
        self.id = this.id
        resolve (self)
       }
      })
    })
  }

}

module.exports = Question;
