new Vue({
  el: '#app',
  data: {
    results: [],
    message: 'Naruto'
  },
  methods:{
    Api: function () {
      if(this.message == null || this.message ==''){alert('пустрые строки')}
      this.$http.get("http://www.omdbapi.com/?apikey=d5677312&s="+this.message)
        .then(function (response) {
          console.log(response)
          this.results = response.data.Search;
          console.log(this.results)
      } ) 
    } 
  }, 
});