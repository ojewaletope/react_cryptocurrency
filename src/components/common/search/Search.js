import React, {Component} from 'react';
import "./Search.css";
import {API_URL}          from "../../../config";
import {responseHandler}  from "../../../helper";
import Loading            from "../Loading";

class Search extends Component{
  state = {
    searchQuery: '',
    currencies: [],
    error: null,
    loading: false
  };
  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value})
    if (!this.state.searchQuery) {
      return ''
    }
    this.setState({loading: true});
    fetch(`${API_URL}/autocomplete?searchQuery=${this.state.searchQuery}`).then(responseHandler).then(data => {
     this.setState({loading: false, currencies: data})
    }).catch(err => {
      this.setState({
        error: err.errorMessage
      })
    })
  }
  render() {
    const {loading, currencies, error} = this.state
    return (
      <div className="Search">
        <span className="Search-icon"/>
          <input type="text" name="searchQuery" className="Search-input" placeholder="Currency name" onChange={(e) => this.handleInputChange(e)}/>
        {loading &&
        <div className="Search-loading">
          <Loading width="12px" height="12px"/>
        </div>
        }
      </div>
    )
  }
}
export default Search;