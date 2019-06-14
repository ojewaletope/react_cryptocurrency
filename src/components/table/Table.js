import React from 'react';
import './Table.css';
import PropTypes from 'prop-types'
const Table = ({currencies, handlePercentChange}) => {
  return (
    <div className="Table-container">
      <table className="Table">
        <thead className="Table-head">
        <tr>
          <th>Cryptocurrency</th>
          <th>Price</th>
          <th>Market Cap</th>
          <th>24hr Change</th>
        </tr>
        </thead>
        <tbody className="Table-body">
        {currencies.map((currency) => (
          <tr key={currency.id}>
            <td>
              <span className="Table-rank">{currency.rank}</span>
              {currency.name}
            </td>
            <td>
              <span className="Table-dollar">$</span>
              {currency.price}
            </td>
            <td>
              <span className="Table-dollar">$</span>
              {currency.marketCap}
            </td>
            <td>
              {handlePercentChange(currency.percentChange24h)}
            </td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
};
Table.propTypes = {
  currencies: PropTypes.array.isRequired,
  handlePercentChange: PropTypes.func.isRequired
};
export default Table;