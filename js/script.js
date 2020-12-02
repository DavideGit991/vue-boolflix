// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
// Titolo
// Titolo Originale
// Lingua
// Voto

var apiMovie = 'https://api.themoviedb.org/3/discover/movie?api_key=da8ab8e676fdc112f397d51f49a3af17'
var apiSerieTv = 'https://api.themoviedb.org/3/discover/tv?api_key=da8ab8e676fdc112f397d51f49a3af17'
var app = new Vue({
  el:"#app",
  data:{
    films:[],
    serieTv:[],
    nomeRicercato:""
  },

  mounted:function () {

    // chiamata api per restituzione array films
    axios
    .get(apiMovie)
    .then((risposta) =>{
      this.films = risposta.data.results
      // console.log(risposta.data.results);
      console.log("films:",this.films);
    })

    // chiamata api per restituzione array serieTv
    axios
    .get(apiSerieTv)
    .then((risposta) =>{
      this.serieTv = risposta.data.results
      // console.log(risposta.data.results);
      console.log("serieTv:",this.serieTv);
    })
  },


});
