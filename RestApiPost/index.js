var uuid = require('uuid');

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

var params;

async function createItem(){
  try {
    await docClient.put(params).promise();
  } catch (err) {
    return err;
  }
}

exports.handler = async (event) => {
  
  var name, age;
  const user_id = uuid.v4();
  
  if(event.name && event.age) {
    name = event.name;   
    age = event.age;
  } else return { error: 'no name & age provided in POST' };

  params = {
    TableName : 'users',
    Item: {
      user_id: user_id,
      name: name,
      age: age
    }
  };

  try {
    await createItem();
    
    let responseBody = {
        user_id: user_id,
    };
    
    let responseCode = 200;
    let response = {
      statusCode: responseCode,
      body: JSON.stringify(responseBody)
    };
    console.log("response: " + JSON.stringify(response))
    return response;
    
  } catch (err) {
    return { error: err };
  }
};