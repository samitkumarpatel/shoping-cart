var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/shoping-cart";

MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});




const db = {
    create : () => {
        MongoClient.connect(url, { useUnifiedTopology: true },function(err, db) {
            if (err) throw err;
            var dbo = db.db("mydb");
            dbo.createCollection("customers", function(err, res) {
              if (err) throw err;
              console.log("Collection created!");
              db.close();
            });
          });
    }
}

module.exports = db; 