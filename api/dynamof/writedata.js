var AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: 'AKIAZZ6HNMF57SXFDQVH',
      secretAccessKey: '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',
      region: 'us-east-2',
});

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "heirchy";

const writedata=(item)=>{

var params = {
    TableName:table,
    Item:item
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
}

module.exports=writedata