const axios = require('axios');

axios.get('https://api.gameofthronesquotes.xyz/v1/random')
  .then(function(resp){
    console.log(resp.data.character.slug);
  })
  .catch(function(err){
    console.log(err);
  })
