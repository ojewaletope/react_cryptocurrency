import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css'

const Pagination = ({page, totalPages, handlePaginationClick}) => {
  return (
    <div className="Pagination">
      <button className="Pagination-button" onClick={() => handlePaginationClick('prev')} disabled={page <= 1}>
        &larr;
      </button>
      <span className="Pagination-info">{page} of {totalPages}</span>
      <button className="Pagination-button" onClick={() => handlePaginationClick('next')} disabled={page >= totalPages}>
        &rarr;
      </button>
    </div>
  )
};
Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePaginationClick: PropTypes.func.isRequired
}
export default Pagination;