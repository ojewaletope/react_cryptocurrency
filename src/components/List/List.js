import React, { Component } from "react";
import {responseHandler}    from "../../helper";
import {API_URL}            from "../../config";
import Table                from '../table/Table'
import Loading              from "../common/Loading";
import Pagination           from "../pagination/Pagination";

class List extends Component {
  state = {
    loading: false,
    currencies: [],
    error: null,
    totalPages: 0,
    page: 1
  };
  fetchCurrencies() {
    this.setState({ loading: true });
    const {page} = this.state;
    fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
      .then(responseHandler).then(data => {
      const {currencies, totalPages} = data;
      this.setState({
        currencies,
        totalPages,
        loading: false,
      })
    }).catch(err => {
      this.setState({
        error: err.errorMessage,
        loading: false
      })
    })
  }
  componentDidMount() {
    this.fetchCurrencies()
  }
  handlePercentChange(percent) {
    if (percent < 0) {
      return <span className="percent-fallen">{percent}% &darr;</span>
    } else if (percent > 0) {
      return <span className="percent-raised">{percent}% &uarr;</span>
    } else {
      return <span>{percent}%</span>
    };
  }
  handlePaginationClick = (direction) => {
    let nextPage = this.state.page;
    // increment nextpage if diewction = next otherwise decrease
    nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;
    this.setState({page: nextPage}, () => {
      this.fetchCurrencies()
    })
  }
  render() {
    const { loading, currencies, error, page, totalPages } = this.state;
    if (loading) {
      return <div className="loading-container">
        <Loading/>
      </div>;
    }
    if (error) {
      return <div className="error">{error}</div>
    }
    return (
      <div >
        <Table currencies={currencies} handlePercentChange={this.handlePercentChange}/>
        <Pagination page={page} totalPages={totalPages} handlePaginationClick={this.handlePaginationClick}/>
      </div>
    );
  }
}

export default List;
