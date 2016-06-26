var axios = require('axios');

var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo(username) {
  return axios.get('https://api.github.com/users/' + username + param)
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
      console.log(info);
    });
  }
};

module.exports = helpers;