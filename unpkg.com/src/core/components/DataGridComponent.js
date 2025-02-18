// DataGridComponent.js
import React from 'react';

const DataGridComponent = ({ data }) => {
  return (
    <div>
      <h2>Data Grid</h2>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
              <td>{row.column3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataGridComponent;