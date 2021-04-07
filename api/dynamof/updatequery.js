const AWS = require('aws-sdk');
const writedata=require("./writedata")
const deletequery=require("./deletequery")
AWS.config.update({
  accessKeyId: 'AKIAZZ6HNMF53C32TQGJ',
    secretAccessKey: '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',
    region: 'us-east-2',
});
const updatequery=(from,to,name)=>{
  var docClient = new AWS.DynamoDB.DocumentClient();

const params={
  TableName: 'heirchy',
  ExpressionAttributeValues:{
      ":v1":from+"/"+name
    
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
       var str
       var len
       Items.forEach((e)=>{
           str=to+"/"+name+e.URL.split(name)[1]
              len = str.split("/").length

              deletequery(e.URL)
              writedata({URL:str,name:e.name,level:len})

       
        
       })
       
        } 
    
});

}
updatequery()

module.exports=updatequery