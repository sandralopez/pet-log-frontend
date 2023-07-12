function Table({ rows, columns }) {
  return (
    <table className="border-collapse table-auto w-full text-sm mt-20">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="border-b font-medium p-4 pl-8 pt-0 pb-3 text-gray-500 text-left">{column}</th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white dark:bg-slate-800">
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="border-b p-4 pl-8 text-gray-800">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export { Table };
