import * as React from "react";
import { useBudget } from "@contexts/BudgetContext";
import { BalanceCard } from "@components/BalanceCard";
import { Button } from "@components/ui/Button";
import { TransactionModal } from "@components/common/Modal/TransactionModal";
import { useModalContext } from "@contexts/ModalContext";

const DashboardPage = () => {
  const { state } = useBudget();
  const { openModal, setOpenModal } = useModalContext();

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  console.log(state);

  return (
    <div>
      <div className="flex justify-between">
        <BalanceCard title={"Total Balance"} amount={state.walletBalance} />
        <BalanceCard title={"Income"} amount={state.incomeBalance} />
        <BalanceCard title={"Expenses"} amount={state.expensesBalance} />
      </div>
      <div className="mt-5">
        <Button
          title={"New transaction"}
          withIcon={true}
          variant="outlined"
          size="large"
          onClick={handleModal}
        />

        <TransactionModal />
      </div>
    </div>
  );
};

export default DashboardPage;
