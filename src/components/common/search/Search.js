import React, {Component} from 'react';
import "./Search.css";
import {API_URL}          from "../../../config";
import {responseHandler}  from "../../../helper";
import Loading            from "../Loading";

class Search extends Component{
  state = {
    searchQuery: '',
    searchResults: [],
    error: null,
    loading: false
  };
  handleInputChange(e) {
  const searchQuery = e.target.value;
    if (!searchQuery) {
      return ''
    }
    this.setState({loading: true});
    fetch(`${API_URL}/autocomplete?searchQuery=${searchQuery}`).then(responseHandler).then(data => {
     this.setState({loading: false, searchResults: data})
    }).catch(err => {
      this.setState({
        error: err.errorMessage,
        loading: false
      })
    })
  }
  renderSearchResults() {
    const { searchResults, searchQuery, loading } = this.state;

    if (!searchQuery) {
      return '';
    }

    if (searchResults.length > 0) {
      return (
        <div className="Search-result-container">
          {searchResults.map(result =>
            <div
              key={result.id}
              className="Search-result"
            >
              {result.name} ({result.symbol})
            </div>
          )}
        </div>
      )
    }

    // Send no result, only if loading is set to false
    // To avoid showing no result, when actually there are ones
    if (!loading) {
      return (
        <div className="Search-result-container">
          <div className="Search-no-result">
            No results found.
          </div>
        </div>
      )
    }
  }
  render() {
    const {loading} = this.state;
    return (
      <div className="Search">
        <div>
          <span className="Search-icon"/>
          <input type="text" className="Search-input" placeholder="Currency name" onChange={(e) => this.handleInputChange(e)}/>
          {loading &&
          <div className="Search-loading">
            <Loading width="12px" height="12px"/>
          </div>
          }
        </div>
        {this.renderSearchResults()}
      </div>
    )
  }
}
export default Search;