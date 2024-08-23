import Table from './components/Table';

const netIncomes = [
  { brand: 'McDonalds', income: 1291283 },
  { brand: 'Burger King', income: 1927361 },
  { brand: 'KFC', income: 1098463 }
];

function App() {
  
  const totalIncome = netIncomes.reduce((total, company) => total + company.income, 0);
  const averageIncome = netIncomes.length ? (totalIncome / netIncomes.length).toFixed(2) : 0;

  return (
    <div>
      <Table data={netIncomes} />
      <p>Average Net Income: ${averageIncome}</p>
    </div>
  );
}

export default App;


