import { DateIcon } from "@assets/icons/DateIcon";
import { MoneyIcon } from "@assets/icons/MoneyIcon";
import { TextIcon } from "@assets/icons/TextIcon";
import { transactions } from "@constants/transactions";
import { ITransactions } from "@interfaces/budget";

export const TransactionsTable: React.FC = () => {
  return (
    <div className="mt-3 border rounded-lg border-bodydark1">
      <div className="flow-root">
        <div>
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-bodydark1">
              <thead>
                <tr className="divide-x divide-bodydark1">
                  <th
                    scope="col"
                    className="w-full px-3 py-3 text-sm font-semibold text-left text-gray-900"
                  >
                    <div className="flex">
                      <TextIcon className="w-4 h-4" />
                      <span className="pl-1">Description</span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="w-full px-3 py-3 text-sm font-semibold text-left text-gray-900"
                  >
                    <div className="flex">
                      <DateIcon className="w-4 h-4" />
                      <span className="pl-1">Date</span>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="w-full px-3 py-3 text-sm font-semibold text-left text-gray-900 "
                  >
                    <div className="flex">
                      <MoneyIcon className="w-4 h-4" />
                      <span className="pl-1">Amount</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-bodydark1">
                {transactions.map((transaction: ITransactions) => (
                  <tr
                    key={transaction.id}
                    className="divide-x divide-bodydark1"
                  >
                    <td className="py-4 pl-4 pr-3 text-sm font-medium text-gray-900 whitespace-nowrap">
                      {transaction.description}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {transaction.transactionDate}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap">
                      {transaction.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
