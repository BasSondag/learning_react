var React = require('react')

module.exports = React.createClass({
  getInitialState: function(){
    return {
      searchTerm: ""
    }
  },
  handleSearchTermChange: function(e){
    this.setState({
      searchTerm: e.target.value
    })
  },
  // sendSearchQuery will call the
  sendSearchQuery: function(e){
    e.preventDefault()
    this.props.getMovieData(this.state.searchTerm)
    this.setState({
      searchTerm: ''
    })
  },
  render: function(){
    return (
      <div>
        <form onSubmit={this.sendSearchQuery}>
          Search movie: <input type="text" value={this.state.searchTerm} onChange={this.handleSearchTermChange}/>
        <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
})