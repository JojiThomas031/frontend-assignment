import React from 'react';
import Table from '../Table';
import Pagination from '../Pagination';
import usePagination from '../../hooks/usePagination';
import useFetch from '../../hooks/useFetch';
import { API_URL,ITEM_COUNT } from '../../config';
import './styles.css';

function Application() {
  const { data: items, loading, error } = useFetch(API_URL);

  const {
    currentPage,
    totalPages,
    displayedItems,
    handlePageChange,
  } = usePagination(items, ITEM_COUNT);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <h1>Kickstarter Funds</h1>
      <Table data={displayedItems} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Application;
