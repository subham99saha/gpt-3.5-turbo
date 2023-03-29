const axios = require('axios');
require('dotenv').config()

let service = {
  chat: (payload, callback) => {
    let data = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "user",
          "content": payload.text
        }
      ],
      "temperature": 0.7
    });
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.openai.com/v1/chat/completions',
      headers: { 
        'Authorization': 'Bearer ' + process.env.API_KEY, 
        'Content-Type': 'application/json'
      },
      data : data
    };

    axios.request(config)
    .then((response) => {
      callback(response.data);
    })
    .catch((error) => {
      callback(error);
    });

  }
}

module.exports = service;