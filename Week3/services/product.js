const AWS = require('aws-sdk')
const {v4:uuidv4} = require('uuid')

AWS.config.update({
    region: "us-east-1",
    accessKeyId: " ",
    secretAccessKey: " ",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});

let docClient = new AWS.DynamoDB.DocumentClient();
var table = "product";

exports.add = async (params)=>{
    if(params.isDiscount==="true"){
        params.isDiscount=true
    }
    else if(params.isDiscount==="false"){
        params.isDiscount=false
    }
    const item={
        TableName: table,
        Item:{
            productID:uuidv4(),
            stock: params.stock,
            productName:params.productName,
            isDiscount:params.isDiscount,
            category:{
                categoryId:Math.random(),
                categoryName:params.categoryName,
            }
        }
    }
        
    try {
        await docClient.put(item).promise();
        return {
            status: true,
            message: 'Product is added'
        }
    } catch (err) {
        return {
            status: false,
            message: err,
        }
    }
}

exports.getSingle = async (params) => { 
    var item = {
        TableName: table,
        Key:{
            productId : params.productID
        }
    };
    try {
        const data = await docClient.get(item).promise();
        return {
            status: true,
            data: data
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}
exports.getDiscount=async(params)=>{
    try{
        const item={
            TableName:table,
            Key:{},
            FilterExpression:"isDiscount = :isDiscount",
            ExpressionAttributeValues:{
                ":isDiscount":false,
            },
        }
        const data=await docClient.scan(item).promise()
        console.log(data)
        return {
            data: data,
        }
    }catch(err){
        console.log(err)
    }
    }

exports.delete=async(params)=>{
    var deletedID=params.productID
    var item={
      TableName: table,
      Key:{
        productID: deletedID,
      },
      ConditionExpression:"isDiscount= :isDiscount",
      ExpressionAttributeValues:{
          ":isDiscount":false,
      },

    }
    try{
        await docClient.delete(item).promise()
        return{
            status:true,
            message:"Product is deleted",
        }
    }catch(err){
        return{
            status:false,
            message:"You can not delete product that has discount"
            
        }
        
        
    }
}



exports.getAll = async () => {
    const  item = {
        TableName:table
    };
    //scan:fetch all items
    try {
        const data = await docClient.scan(item).promise();
        return {
            status: true,
            data: data
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}

exports.update = async (params) => {
    var updatedID=params.productID
    var item = {
        TableName:table,
        Key:{
            productId: updatedID,
        },
    UpdateExpression: "set stock = :stock",
    ExpressionAttributeValues:{
        ":stock":params.stock,
    },
    ReturnValues:"UPDATED_NEW"
   };
    try {
        const data = await docClient.update(item).promise();
        return {
            status: true,
            data: data,
            message: 'Product is updated'
        }
    } catch (err) {
        return {
            status: false,
            message: err
        }
    }
}

