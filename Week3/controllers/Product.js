const AWS = require('aws-sdk')
const {v4:uuidv4} = require('uuid')
const productService = require('../services/product')

AWS.config.update({
    region: "us-east-1",
    accessKeyId: " ",
    secretAccessKey: " ",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});

let docClient = new AWS.DynamoDB.DocumentClient();
var table = "product";

exports.add = async (req,res) => {
    const response = await productService.add(req.body);  
    res.send(response);
}


exports.getAll = async (req,res) => {
    const response = await productService.getAll();
    res.send(response); 
}

exports.getSingle = async (req,res) => {
    const response = await productService.getSingle(req.params); 
    res.send(response);
}

exports.update = async (req,res) => {
    const response = await productService.update(req.body);
    res.send(response);
}

exports.delete = async (req,res) => {
    const response = await productService.delete(req.params);
    res.send(response); 
}
exports.getDiscount = async (req,res) => {
    const response = await productService.getDiscount(req.params);
    res.send(response); 
}
