var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param);
}

function getRepos(username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}

function getTotalStars(repos) {
  return repos.data.reduce(function(prev, current) {
    return prev + current.stargazers_count;
  }, 0); //Valor inicial del acumulador = 0. Y devuelve un acumulador que va sumando nro de stars
}

function getPlayersData(player) {
  return getRepos(player.login) //Primero se llama a los repos
    .then(getTotalStars) //Cuando termina el request, a la respuesta se le pasa la funcion getTotalStars
    .then(function (totalStars) { //Luego de pasar la funcion getTotalStars, a lo que devuelve le paso esta funcion que construye el objeto
      return {
        followers: player.followers,
        totalStars : totalStars
      }
    })
}

function calculateScores(players) {
  return [
    players[0].followers * 3 * players[0].totalStars,
    players[1].followers * 3 * players[1].totalStars,
  ]
}

var helpers = {
  getPlayersInfo: function (players) {
    /*Lo que hace esto es lo siguiente: players.map(fn) corre por cada elemento 
    de players la funcion fn, y devuelve un arreglo de resultados de la funcion info (1 x cada 
    elemento del array -> todas son promises).
    Luego axios.all() espera que se resuelvan todas las promises, y finamente ejecuta el callback
    en .then
    */
    return axios.all(players.map(function (username) {
      return getUserInfo(username);
    })).then(function (info) {
      return info.map(function(element){
        return element.data;
      });
    }).catch(function (err) {
      console.warn('Error in get player info ', err);
    });
  },
  battle: function(players) {
    var playerOneData = getPlayersData(players[0]); //Se llama primero la funcion getPlayersData con el jug 1
    var playeTwoData = getPlayersData(players[1]); //Idem arriba

    return axios.all([playerOneData, playeTwoData]) //Cuando se resolvieron ambas promises (por que se lo paso por parametro) -> para cada una se ejecuta el calculateScores. Todo esto devuelve una promise
      .then(calculateScores)
      .catch( function (err) {
        console.warn('Error in players info ', err)
      })
  }
};

module.exports = helpers;