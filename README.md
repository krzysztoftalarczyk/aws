 
 1. First of all we need to makes our Rest API i API Gateway. I created REST API called kolomolo and resources inside.
 I created main resources patch called /restapi and /restapi/{user_id}
 2. Then i created POST Method in /restapi with Lambda and GET Method in /restapi/{user_id} with Lambda too. 
 Important thing is to enable Use Lambda Proxy integration
3. Now we need to create DynamoDB Table. Name we use is ,,users" and the Partition Key will be "user_id" used as string.
Now in option Edit Capacity we can set WCU and RCU low, for example 2-5kb/s.
4. Now we are creating Lambda funcion Post.
I use name RestApiPost, WHILE CREATING THE MOST IMPORTANT THING IS TO MAKE NEW EXECUTION ROLE, i called it RestApiPostRole.
Then i make second lambda funcion RestApiGet with role called RestApiGetRole.
5. We need to make our code inside of lambda and deploy functions, but probably it won't work and we get error. 
Like we will see (or not) it's a problem with AWS Permissions.
6. We need to open IAM in AWS and go to role.
We need to find our roles and ad them fully acces for DynamoDB table.
7. Last we need to go back for API Gateway and connect lambda functions to our methods and deploy them.


8. Now we can use our methods.

 URL POST https://3240gww8kh.execute-api.eu-central-1.amazonaws.com/sandbox/restapi/
 URL GET https://3240gww8kh.execute-api.eu-central-1.amazonaws.com/sandbox/restapi/{userid}
 
9. To use Post we need to use curl for example and send request with body for example:
 
 curl -H "Content-Type: application/json" -X POST -d "{ \"name\": \"Christopher\", \"age\": \"21\" }" https://3240gww8kh.execute-api.eu-central-1.amazonaws.com/sandbox/restapi/
 Our data is now in DynamoDB table
 
 10. Then we use GET and we can use curl too but it isn't that much important as with the POST for example, and as the {user_id} we use uuid form last step.
 
 curl -X GET https://3240gww8kh.execute-api.eu-central-1.amazonaws.com/sandbox/restapi/ae1f3d17-e311-4477-9183-82db96033262
 
 We see data from previous step.
 
