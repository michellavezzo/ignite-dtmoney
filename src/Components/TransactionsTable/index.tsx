import { useEffect, useState } from "react";
import { Container } from "./styles";
import { api } from "../../services/api";

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transactions) => (
            <tr key={transactions.id}>
              <td>{transactions.title}</td>
              <td className={transactions.type}>{transactions.amount}</td>
              <td>{transactions.category}</td>
              <td>{transactions.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
