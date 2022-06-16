'use strict';
const request = require('request');
let subscriptionKey = '0bb01efd546945f2b6c477d0d9015f3b';
let endpoint = 'https://gbadamson.cognitiveservices.azure.com/';
var uriBase = endpoint + 'vision/v3.1/analyze';
const imageUrl =
'https://nairametrics.com/wp-content/uploads/2019/07/Buhari1.jpg';
// Request parameters.
const params = {
'visualFeatures': 'Categories,Description,Color,Tags,Brands,Faces,Adult,ImageType',
'details': '',
'language': 'en'
};
const options = {
uri: uriBase,
qs: params,
body: '{"url": ' + '"' + imageUrl + '"}',
headers: {
'Content-Type': 'application/json',
'Ocp-Apim-Subscription-Key' : subscriptionKey
}
};
request.post(options, (error, response, body) => {
if (error) {
console.log('Error: ', error);
return;
}
let jsonResponse = JSON.stringify(JSON.parse(body), null, ' ');
console.log('JSON Response\n');
console.log(jsonResponse);
});