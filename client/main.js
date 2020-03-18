const axios = require("axios");

console.log('Avant le lancement de la requête')

function getFifaTeamsPromises () {
    axios({
        "method":"GET",
        "url":"https://montanaflynn-fifa-world-cup.p.rapidapi.com/teams",
        "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"montanaflynn-fifa-world-cup.p.rapidapi.com",
            "x-rapidapi-key":"c31087da0dmsha1530a723bea0a2p1dbfdfjsn18f43cedb6fd",
            "accepts":"json"
        }
    })
    .then((response)=>{
        console.log('Requête retournée sans erreur')
        var teams = response.data
        console.log(teams)
        useTeamsData(teams)
    })
    .catch((error)=>{
        console.log('Requête retournée avec erreur')
        console.log(error)
    })
}


function useTeamsData (teams) {
    var ul = createUL()
    for (var team of teams) {
        var text = team.id + ' ' + team.title
        var li = createLI(text)
        ul.appendChild(li)
    }
    document.querySelector('#results').appendChild(ul)
}

function createUL () {
    return document.createElement('ul')
}

function createLI (text) {
    var li = document.createElement('li')
    li.innerHTML = text
    return li
}

getFifaTeamsPromises()

console.log('Après le code de la requête')