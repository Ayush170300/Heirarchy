const express=require("express")
const router=express.Router()

var AWS = require("aws-sdk");



router.get('/',(req,res)=>{

    AWS.config.update({
        accessKeyId: 'AKIAZZ6HNMF53C32TQGJ',
          secretAccessKey: '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',
          region: 'us-east-2',
    });
    
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
    
    
    
})

module.exports=router