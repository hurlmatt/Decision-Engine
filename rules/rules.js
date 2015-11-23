/**
 * Created by sweagraff on 6/2/15.
 */

 /////////////////////////// Business Rule  ///////////////////////////
 //
 // testSurvey business rule
 //
 function testSurvey() {
   if (dataContext.service == null) {
     throw("Request error, service is missing from request");
   }
   var returnObject = {};
   returnObject.surveyName = "test";
   return returnObject;
 }


 /////////////////////////// Business Rule  ///////////////////////////
 //
 // testCommunications business rule
 //
 function testCommunications(){
   if (dataContext.userName == null) {
     throw("Request error, userName is missing from request");

   }
   if (dataContext.preferenceRequest == null) {
     throw("Request error, preferenceRequest is missing from request");
   }
   var returnObject = {};
   returnObject.decisionAction = dataContext.preferenceRequest;
   returnObject.nextAction     = Java.to(["startChat", "startVoiceCallback"],"java.lang.String[]");
   returnObject.skill          = "SandBox";
   returnObject.maxNumberFailures  = 1;
   returnObject.maxNumberSuccesses = 1
   returnObject.displayText        = "248-620-2355";
   communicationsObject = {}
   communicationsObject.decision = returnObject;
   return communicationsObject;
 }
 function sayHello(){
   var name = dataContext.name;
   var message = "Hello, " + name;
   var returnObject = {};
   returnObject.message = message;
   return returnObject;
 }
