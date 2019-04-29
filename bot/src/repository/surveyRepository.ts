import * as AWS from 'aws-sdk';
import * as uuid from 'node-uuid';
import logger from "../@aiteq/messenger-bot/logger";
const docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2019-04-29'});

const sampleSurvey = {
  id: 1,
  defaultLanguage: "English",
  questions: [
    {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "What language do you prefer?",
        "quick_replies": [{
          "content_type": "text",
          "title": "Pidgin",
          "payload": JSON.stringify({data: {language: "Pidgin", "answer": "Pidgin"}})
        }, {
          "content_type": "text",
          "title": "English",
          "payload": JSON.stringify({data: {language: "English", "answer": "English"}})
        }]
      },
      "Pidgin": {
        "text": "What language do you prefer?",
        "quick_replies": [{
          "content_type": "text",
          "title": "Pidgin",
          "payload": JSON.stringify({data: {language: "Pidgin", "answer": "Pidgin"}})
        }, {
          "content_type": "text",
          "title": "English",
          "payload": JSON.stringify({data: {language: "English", "answer": "English"}})
        }]
      }
    }
  }, {
    "type": "say",
    "param": {
      "English": "I am so glad you are here!",
      "Pidgin": "I dey happy sey you dey here"
    }
  }, {
    "type": "say",
    "param": {
      "English": "I have just a few questions for you",
      "Pidgin": "I bin wan ask you small questions"
    }
  }, {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "Your answers will help us better understand how people think about Malaria in Nigeria.",
        "quick_replies": [{
          "content_type": "text",
          "title": "Let Go!",
          "payload": JSON.stringify({data: {"answer": "Let Go!"}})
        }]
      },
      "Pidgin": {
        "text": "Your answer go helep us sabi how pepu dey tink about malaria",
        "quick_replies": [{
          "content_type": "text",
          "title": "Let Go!",
          "payload": JSON.stringify({data: {"answer": "Let Go!"}})
        }]
      }

    }
  }, {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "Have you heard of malaria?",
        "quick_replies": [{
          "content_type": "text",
          "title": "YES",
          "payload": JSON.stringify({data: {"answer": "YES"}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {break: true, "answer": "NO"}})
        }]
      },
      "Pidgin": {
        "text": "Shey you sabi wetin malaria be?",
        "quick_replies": [{
          "content_type": "text",
          "title": "YES",
          "payload": JSON.stringify({data: {"answer": "YES"}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {break: true, "answer": "NO"}})
        }]
      }

    }
  }, {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "Do you know how you get Malaria?",
        "quick_replies": [{
          "content_type": "text",
          "title": "Mosquitos",
          "payload": JSON.stringify({data: {"answer": "Mosquitos"}})
        }, {
          "content_type": "text",
          "title": "From sick people",
          "payload": JSON.stringify({data: {break: true, "answer": "From sick people"}})
        }, {
          "content_type": "text",
          "title": "Dirty hands",
          "payload": JSON.stringify({data: {break: true, "answer": "Dirty hands"}})
        }, {
          "content_type": "text",
          "title": "Other",
          "payload": JSON.stringify({data: {break: true, "answer": "Other"}})
        }]
      },
      "Pidgin": {
        "text": "Do you know how you get Malaria?",
        "quick_replies": [{
          "content_type": "text",
          "title": "Mosquitos",
          "payload": JSON.stringify({data: {"answer": "Mosquitos"}})
        }, {
          "content_type": "text",
          "title": "From sick people",
          "payload": JSON.stringify({data: {break: true}})
        }, {
          "content_type": "text",
          "title": "Dirty hands",
          "payload": JSON.stringify({data: {break: true}})
        }, {
          "content_type": "text",
          "title": "Other",
          "payload": JSON.stringify({data: {break: true}})
        }]
      }

    }
  }, {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "In the past months, have you used mosquito repellent?",
        "quick_replies": [{
          "content_type": "text",
          "title": "YES",
          "payload": JSON.stringify({data: {"answer": "YES"}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {"answer": "NO"}})
        }]
      },
      "Pidgin": {
        "text": "In the past months, have you used mosquito repellent?",
        "quick_replies": [{
          "content_type": "text",
          "title": "YES",
          "payload": JSON.stringify({data: {"answer": "YES"}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {"answer": "NO"}})
        }]
      }
    }
  }, {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "In the past months, have you taken any other actions to protect yourself from mosquitoes?",
        "quick_replies": [{
          "content_type": "text",
          "title": "YES",
          "payload": JSON.stringify({data: {"answer": "YES"}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {"answer": "NO"}})
        }]
      },
      "Pidgin": {
        "text": "In the past months, have you taken any other actions to protect yourself from mosquitoes?",
        "quick_replies": [{
          "content_type": "text",
          "title": "YES",
          "payload": JSON.stringify({data: {"answer": "YES"}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {"answer": "NO"}})
        }]
      }
    }
  }, {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "How likely are you to urge your friends to protect themselves from mosquitoes?",
        "quick_replies": [{
          "content_type": "text",
          "title": "Very Likely",
          "payload": JSON.stringify({data: {"answer": "Very Likely"}})
        }, {
          "content_type": "text",
          "title": "Somewhat Likely",
          "payload": JSON.stringify({data: {"answer": "Somewhat Likely"}})
        }, {
          "content_type": "text",
          "title": "Not likely",
          "payload": JSON.stringify({data: {"answer": "Not likely"}})
        }]
      },
      "Pidgin": {
        "text": "How likely are you to urge your friends to protect themselves from mosquitoes?",
        "quick_replies": [{
          "content_type": "text",
          "title": "Very Likely",
          "payload": JSON.stringify({data: {"answer": "Very Likely"}})
        }, {
          "content_type": "text",
          "title": "Somewhat Likely",
          "payload": JSON.stringify({data: {"answer": "Somewhat Likely"}})
        }, {
          "content_type": "text",
          "title": "Not likely",
          "payload": JSON.stringify({data: {"answer": "Not likely"}})
        }]
      }
    }
  }, {
    "type": "say",
    "param": {
      "English": "Now, we want to see who people in different parts of Nigeria are responding to malaria",
      "Pidgin": ""
    }
  }, {
    "type": "askWithMessage",
    "param": {
      "English": {
        "text": "Do you mind sharing your location with us?",
        "quick_replies": [{
          "content_type": "location",
          "title": "YES",
          "payload": JSON.stringify({data: {"answer": "YES"}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {"answer": "NO"}})
        }]
      },
      "Pidgin": {
        "text": "Do you mind sharing your location with us?",
        "quick_replies": [{
          "content_type": "location",
          "title": "YES",
          "payload": JSON.stringify({data: {"answer": "YES"}})
        }, {
          "content_type": "text",
          "title": "NO",
          "payload": JSON.stringify({data: {"answer": "NO"}})
        }]
      }
    }
  }]
};

const sampleSurveyPromise: Promise<any> = new Promise(resolve => {
  setTimeout(() => resolve(sampleSurvey), 10)
});

export const surveyRepository = {
  getSurvey: () => {
    return sampleSurveyPromise
  },
  initSurveyFromUser: () => {

  },
  saveAnswerFromUser: ({profile, question, answer, surveyId, profileId}) => {

    const params = {
      TableName: 'answers',
      Item: {
        id: uuid.v1(), profile, question, answer, surveyId, profileId
      }
    };


    docClient.put(params, function(err, data) {
      if (err) {
        logger.error("[AWS_DOC_CLIENT] Error: ", err);
      } else {
        logger.info("[AWS_DOC_CLIENT] Success: ", data);
      }
    });
  },

  getAnswersFromUser: ({profileId}) => {
    const params = {
      ExpressionAttributeValues: {
        ':p': profileId
      },
      KeyConditionExpression: 'profileId = :p',
      TableName: 'answers'
    };
    return new Promise((resolve, reject) => {
      docClient.query(params, function(err, data) {
        if (err) {
          logger.error("[AWS_DOC_CLIENT] Error: ", err);
          reject(err)
        } else {
          logger.info("[AWS_DOC_CLIENT] Success: ", data);
          resolve(data)
        }
      });
    })
  },
  saveAnswersFromUser: () => {

  }
};