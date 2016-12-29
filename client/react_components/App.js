var React = require('react'),
    MovieSearch = require('./MovieSearch'),
    MovieData = require('./MovieData'),
    axios = require('axios')

// module.exports = React.createClass({
//   getInitialState: function(){
//     return {
//       movieData: {}
//     }
//   },
//   getMovieData: function(searchTerm){
//     axios.get("http://www.omdbapi.com/?t="+searchTerm+"&y=&plot=short&r=json")
//     .then(function(movieData){
//       this.setState({
//         movieData: movieData.data
//       })
//     }.bind(this))
//     .catch(function(err){
//       console.log("Error: ", err)
//     })
//   },
//   render: function(){
//     return (
//       <div>
//         <MovieSearch getMovieData={this.getMovieData}/>
//         <MovieData movieData={this.state.movieData}/>
//       </div>
//     )
//   }
// })

module.exports = React.createClass({
  getInitialState: function(){
    return {
      headline: "I am a component!",
      paragraph: "What an excellent component I am."
    }
  },
  componentDidMount: function(){
    setTimeout(function(){
      this.setState({
          headline: "Am I a component?",
          paragraph: "What makes an excellent component?"
        })
    }.bind(this), 20000);
  },
  render: function(){
    return (
      <div>
        <h1>{this.state.headline}</h1>
        <p>{this.state.paragraph}</p>
      </div>
    )
  }
});