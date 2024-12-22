import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table'; // Import your Table component

describe('Table Component', () => {
  const mockData = [
    { "s.no": 1, percentageFunded: "100%", amountPledged: "$10,000" },
    { "s.no": 2, percentageFunded: "200%", amountPledged: "$20,000" },
    { "s.no": 3, percentageFunded: "50%", amountPledged: "$5,000" },
  ];

  const tableHeaders = ['S.No', 'Percentage Funded', 'Amount Pledged'];

  test('renders the table with headers', () => {
    render(<Table data={mockData} headers={tableHeaders} />);
    
    tableHeaders.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  test('renders the table data correctly', () => {
    render(<Table data={mockData} headers={tableHeaders} />);
    
    mockData.forEach((item) => {
      expect(screen.getByText(String(item['s.no']))).toBeInTheDocument();
      expect(screen.getByText(item.percentageFunded)).toBeInTheDocument();
      expect(screen.getByText(item.amountPledged)).toBeInTheDocument();
    });
  });

  test('renders empty state when no data is provided', () => {
    render(<Table data={[]} headers={tableHeaders} />);
    expect(screen.getByText('No data available')).toBeInTheDocument();
  });

});
