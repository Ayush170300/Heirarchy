const AWS = require('aws-sdk');
AWS.config.update({
    accessKeyId: 'AKIAZZ6HNMF53C32TQGJ',
      secretAccessKey: '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',
      region: 'us-east-2',
});
const deletequery=(url)=>{
  var docClient = new AWS.DynamoDB.DocumentClient();

const params={
  TableName: 'heirchy',
  ExpressionAttributeValues:{
      ":v1":url
    
  },  
      ExpressionAttributeNames:{
        "#url":"URL"
  },
  FilterExpression:"contains(#url,:v1)",

  ProjectExpression:"URL",
  
}


docClient.scan(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } 
    else {

        console.log(data)

       const Items=data.Items
       Items.forEach((e)=>{
        var params1 = {
            TableName:"heirchy",
            Key:{URL:e.URL}
            
        };
        
        console.log("Attempting a conditional delete...");
        docClient.delete(params1, function(err1, data1) {
            if (err1) {
                console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
            } else {
                console.log("DeleteItem succeeded:", JSON.stringify(data1));
            }
        });
       })
       
        } 
    
});
}

module.exports=deletequery