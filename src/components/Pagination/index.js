import React from 'react';
import { renderPageButtons } from './renderPageButtons';
import './styles.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="pagination-container">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination-navigation"
      >
        Previous
      </button>
      <div className="pagination-buttons">
        {renderPageButtons({ currentPage, totalPages, onPageChange })}
      </div>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination-navigation"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
