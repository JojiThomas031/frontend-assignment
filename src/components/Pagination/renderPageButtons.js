import React from 'react';
import { MAX_PAGE_BUTTON } from '../../config';

export const renderPageButtons = ({ currentPage, totalPages, onPageChange }) => {
  const pageButtons = [];

  if (totalPages <= MAX_PAGE_BUTTON) {
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button
          onClick={() => onPageChange(i)}
          className={`pagination-button ${currentPage === i ? 'pagination-button-active' : ''}`}
        >
          {i}
        </button>
      );
    }
  } else {
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      pageButtons.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className="pagination-button"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pageButtons.push(<span className="pagination-dots">...</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`pagination-button ${currentPage === i ? 'pagination-button-active' : ''}`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageButtons.push(<span className="pagination-end-dots">...</span>);
      }
      pageButtons.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className="pagination-button"
        >
          {totalPages}
        </button>
      );
    }
  }

  return pageButtons;
};
