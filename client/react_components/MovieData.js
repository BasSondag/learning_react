var React = require('react')

module.exports = React.createClass({
  render: function(){
    if(this.props.movieData.Title === undefined){
      return <div />
    }
    var movie = this.props.movieData
    return (
      <div>
        <h1>{movie.Title} ({movie.Year}) -- IMDB Rating: {movie.imdbRating}</h1>
        <h2>Starring: {movie.Actors}</h2>
        <h3>Description: {movie.Plot}</h3>
      </div>
    )
  }
})