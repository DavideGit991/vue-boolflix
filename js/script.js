// Milestone 1:
// Creare un layout base con una searchbar (una input e un button) in cui possiamo scrivere completamente o parzialmente il nome di un film. Possiamo, cliccando il  bottone, cercare sull’API tutti i film che contengono ciò che ha scritto l’utente.
// Vogliamo dopo la risposta dell’API visualizzare a schermo i seguenti valori per ogni film trovato:
// Titolo
// Titolo Originale
// Lingua
// Voto
const api_key= 'da8ab8e676fdc112f397d51f49a3af17'
const apiOverwiev = 'https://developers.themoviedb.org/3/getting-started/introduction'
// const apiConfig = 'https://api.themoviedb.org/3/configuration?api_key=da8ab8e676fdc112f397d51f49a3af17'
const apiSearchMovie = 'https://api.themoviedb.org/3/search/movie?'
const apiSearchSerieTv = 'https://api.themoviedb.org/3/search/tv?'

var app = new Vue({
  el:"#app",
  data:{

    arrayFilms:[],
    araySerieTv:[],
    nomeRicercato:""

  },

  methods:
  {

    // ricerca in Db di film attraverso nomeRicercato
    ricerca: function()
    {
      axios
      .get(apiSearchMovie,
        {
        params:{
          query:this.nomeRicercato,
          api_key:'da8ab8e676fdc112f397d51f49a3af17'
        }
        })
      .then((risposta) =>{

        this.arrayFilms = risposta.data.results;
        console.log("Films:", this.arrayFilms);
      });

      // ricerca in Db della serie tv attraverso nomeRicercato
      axios
      .get(apiSearchSerieTv,
        {
        params:{
          query:this.nomeRicercato,
          api_key:'da8ab8e676fdc112f397d51f49a3af17'
        }
        })
      .then((risposta) =>{
        this.araySerieTv = risposta.data.results;
        console.log("SerieTV:",this.araySerieTv);
      })
      this.nomeRicercato = "";

    }


  }





});
