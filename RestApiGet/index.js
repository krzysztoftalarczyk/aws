const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();


var params;

async function getItem(){
  try {
    const data = await docClient.get(params).promise()
    return data
  } catch (err) {
    return err
  }
}

exports.handler = async (event) => {
  
  var name, age
  const { user_id } = event.pathParameters;
  
  params = {
    TableName: 'users',
    Key: {
      user_id: user_id ,
    }
  };

  try {
    const data = await getItem()
    return { body: JSON.stringify(data) }
  } catch (err) {
    return { error: err }
  }
};
