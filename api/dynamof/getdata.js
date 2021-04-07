var AWS = require("aws-sdk");
AWS.config.update({
    accessKeyId: 'AKIAZZ6HNMF57SXFDQVH',
      secretAccessKey: '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',
      region: 'us-east-2',
});


const getData=(res)=>{

var docClient = new AWS.DynamoDB.DocumentClient();

var table = "heirchy";



var params = {
    TableName: table,
    };

    let arr=[]
   
    const heirchy=(pelement,itemArray)=>{
        
             
            itemArray.forEach(element => {
                
               if(element.URL.startsWith(pelement.URL) && (element.level===pelement.level+1)){
                   arr.push({name:element.name,level:element.level,URL:element.URL})
                   console.log(arr)
                   heirchy(element,itemArray)
               } 
            });

       
           
}
    

    docClient.scan(params, function(err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {

        var items=data.Items
        const parentArray=items.filter((item)=>{return item.level===1})
        const itemArray=items.filter((item)=>{return item.level!==1})
         
        parentArray.forEach(pelement=>{
            arr.push({name:pelement.name,level:pelement.level,URL:pelement.URL})
           heirchy(pelement,itemArray)
           
           
          })
          console.log(arr)
          res.json(arr)
       
        
       
    } 
    
});
        
        

}
module.exports=getData