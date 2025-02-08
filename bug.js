```javascript
// Incorrect usage of $inc operator in MongoDB update
db.collection('myCollection').updateOne( { "_id": ObjectId("6534653465346") }, { $inc: { "counter": "1" } } );
```