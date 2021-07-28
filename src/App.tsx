import { useState } from "react";
import Modal from "react-modal";

import { Dashboard } from "./Components/Dashboard";
import { Header } from "./Components/Header";
import { NewTransactionModal } from "./Components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement("#root"); //questão de acessibilidade para dar o "foco" no mdal

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState<boolean>(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
