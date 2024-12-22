import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '../index';

describe('Pagination Component', () => {
  const defaultProps = {
    currentPage: 1,
    totalPages: 10,
    onPageChange: jest.fn(),
  };

  test('renders pagination buttons correctly', () => {
    render(<Pagination {...defaultProps} />);
    
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    
    for (let i = 1; i <= 5; i++) {
      expect(screen.getByText(String(i))).toBeInTheDocument();
    }
  });

  test('disables "Previous" button on the first page', () => {
    render(<Pagination {...defaultProps} />);
    expect(screen.getByText('Previous')).toBeDisabled();
  });

  test('disables "Next" button on the last page', () => {
    render(<Pagination {...defaultProps} currentPage={10} />);
    expect(screen.getByText('Next')).toBeDisabled();
  });


  test('navigates to the next page when "Next" button is clicked', () => {
    render(<Pagination {...defaultProps} />);
    const nextButton = screen.getByText('Next');

    fireEvent.click(nextButton);

    expect(defaultProps.onPageChange).toHaveBeenCalledWith(2);
  });

  test('navigates to the previous page when "Previous" button is clicked', () => {
    render(<Pagination {...defaultProps} currentPage={2} />);
    const previousButton = screen.getByText('Previous');

    fireEvent.click(previousButton);

    expect(defaultProps.onPageChange).toHaveBeenCalledWith(1);
  });
});
