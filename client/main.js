const axios = require("axios");

axios({
    "method":"GET",
    "url":"https://montanaflynn-fifa-world-cup.p.rapidapi.com/teams",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"montanaflynn-fifa-world-cup.p.rapidapi.com",
    "x-rapidapi-key":"948ca828c0mshe8fd4cb616ef4afp1372fbjsnd5c9fcc4115c",
    "accepts":"json"
    }
    })
    .then((response)=>{
      console.log(response)
      var teams =response.data
      var html=''
      for (team of teams){
          html+=team.id + ' '+team.title+ '<br />'
      }
      document.querySelector('#result').innerHTML=html
    })
    .catch((error)=>{
      console.log('Requete retourné avec erreur')
      console.log(error)
    })
    console.log('Apres le code de la requete')