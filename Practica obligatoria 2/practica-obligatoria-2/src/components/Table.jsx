function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Brand</th>
          <th>Net Income</th>
        </tr>
      </thead>
      <tbody>
        {data.map((company, index) => (
          <tr key={index}>
            <td>{company.brand}</td>
            <td>${company.income.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;



