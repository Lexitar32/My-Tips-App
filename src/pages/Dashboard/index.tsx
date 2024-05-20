import {
  getExpenseTransactions,
  getIncomeTransactions,
  useBudget,
} from "@contexts/BudgetContext";
import { BalanceCard } from "@components/BalanceCard";
import { Button } from "@components/ui/Button";
import { TransactionModal } from "@components/common/Modal/TransactionModal";
import { useModalContext } from "@contexts/ModalContext";
import { TransactionsTable } from "@components/TransactionsTable";
import { useFetchTransactions } from "@services/transactions/useFetchTransactions";
import { useDeleteTransaction } from "@services/transactions/useDeleteTransaction";

const DashboardPage = () => {
  const { state } = useBudget();
  const { openModal, setOpenModal } = useModalContext();
  const { isLoading, isError } = useFetchTransactions();
  const { mutate: deleteTransaction } = useDeleteTransaction();
  const incomes = getIncomeTransactions(state.transactions);
  const expenses = getExpenseTransactions(state.transactions);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  const handleDeleteTransaction = (transactionId: string) => {
    deleteTransaction(transactionId);
  };

  if (isLoading) return <div>Fetching...</div>;
  if (isError) return <div>Error loading transactions.</div>;

  return (
    <div className="font-mont">
      <div className="flex justify-between">
        <BalanceCard title={"Wallet Balance"} amount={state.walletBalance} />
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
      </div>

      <div className="mt-10 mb-5">
        <div className="sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-base font-semibold leading-6 text-gray-900">
              All Transactions
            </h1>
            <p className="mt-2 text-sm text-gray-700">
              A list of all the transactions for this month including their
              description, type, and date created.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-full">
        <TransactionsTable
          tableTitle="Income"
          tableData={incomes}
          handleDeleteTransaction={handleDeleteTransaction}
        />
      </div>
      <div className="max-w-full">
        <TransactionsTable
          tableTitle="Expenses"
          tableData={expenses}
          handleDeleteTransaction={handleDeleteTransaction}
        />
      </div>

      <TransactionModal />
    </div>
  );
};

export default DashboardPage;
