import React, { Component }                   from "react";
import "./Detail.css";
import { API_URL }                            from "../../config";
import {handlePercentChange, responseHandler} from "../../helper";
import Loading                                from "../common/Loading";

class Detail extends Component {
  state = {
    currency: "",
    error: null,
    loading: false
  };
  componentDidMount() {
    this.setState({ loading: true });
    const currencyId = this.props.match.params.id;
    fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
      .then(responseHandler)
      .then(data => {
        this.setState({
          loading: false,
          currency: data
        });
      })
      .catch(err => {
        this.setState({
          error: err.errorMessage,
          loading: false
        });
      });
  }
  render() {
    const { loading, currency, error } = this.state;
    if (loading) {
      return (
        <div className="loading-container">
          <Loading />
        </div>
      );
    }
    if (error) {
      return <div className="error">{error}</div>;
    }
    return (
      <div className="Detail">
        <h1 className="Detail-heading">
          {currency.name} {currency.symbol}
        </h1>
        <div className="Detail-container">
          <div className="Detail-item">
            Price <span className="Detail-value">$ {currency.price}</span>
          </div>
          <div className="Detail-item">
            Rank <span className="Detail-value">{currency.rank}</span>
          </div>
          <div className="Detail-item">
            24hr Change <span className="Detail-value">{handlePercentChange(currency.percentChange24h)}</span>
          </div>
          <div className="Detail-item">
            <span className="Detail-title">Market Cap</span>
            <span className="Detail-dollar">$ {currency.marketCap}</span>
          </div>
          <div className="Detail-item">
            <span className="Detail-title">24H Volume</span>
            <span className="Detail-dollar">$ {currency.volume24h}</span>
          </div>
          <div className="Detail-item">
            <span className="Detail-title">Total Supply</span>
            {currency.totalSupply}
          </div>
        </div>
      </div>
    );
  }
}
export default Detail;
