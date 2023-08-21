function Table({ rows, columns }) {
  return (
    <table className="border-collapse table-auto w-full text-sm mt-10">
      <thead>
        <tr>
          {columns.map((column, colIndex) => (
            <th key={colIndex} className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-gray-500 text-left">{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white">
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex} className="border-b p-4 pl-8 text-gray-800">{column.accessor(row)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { Table };
