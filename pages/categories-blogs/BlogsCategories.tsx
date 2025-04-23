import React from 'react'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

function BlogsCategories() {
  // Sample MIS data
  const data = [
    { Name: 'John Doe', Age: 28, Department: 'HR' },
    { Name: 'Jane Smith', Age: 34, Department: 'IT' },
    { Name: 'Sam Wilson', Age: 40, Department: 'Finance' },
  ];

  // Download handler
  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'MIS Report');

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const fileName = `MIS_Report_${timestamp}.xlsx`;

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, fileName);
  };
  return (
    <div>
    <div style={{ padding: '20px' }}>
      <h2>MIS Report</h2>

      {/* Table UI border="1" */}
      <table  cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.Name}</td>
              <td>{row.Age}</td>
              <td>{row.Department}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Download Button */}
      <button onClick={handleDownload} style={{ marginTop: '20px' }}>
        Download Excel
      </button>
    </div>
    </div>
  )
}

export default BlogsCategories
