import React from 'react';
import './styles.css';
import { ROW_PER_PAGE } from '../../config';

function Table({ data }) {
  const filledData = [
    ...data,
    ...Array.from({ length: ROW_PER_PAGE - data.length }, () => ({})),
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>S.NO</th>
          <th>PERCENTAGE FUNDED</th>
          <th>AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        {filledData.length > 0 ? filledData.map((item, index) => (
          <tr key={index}>
            <td>{item["s.no"] !== undefined && item["s.no"] !== null ? item["s.no"] : ''}</td>
            <td className="percentage-funded">
              {item["percentage.funded"] ? `${item["percentage.funded"]}%` : ''}
            </td>
            <td>{item["amt.pledged"] ? `$${item["amt.pledged"]}` : ''}</td>
          </tr>
        )):
        <tr>
        <td>
          No data available
        </td>
      </tr>}
      </tbody>
    </table>
  );
}

export default Table;
