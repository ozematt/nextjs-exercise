"use client";

import { deleteExpense } from "@/actions/actions";
import { Expense } from "@prisma/client";

const ExpensesList = ({ expenses }: { expenses: Expense[] }) => {
  //
  //UI
  return (
    <ul className="h-[300px] bg-white rounded mt-4 shadow-md">
      {expenses.map((expense) => (
        <li key={expense.id} className="flex items-center px-4 py-2 border-b">
          <p>{expense.description}</p>
          <p className="ml-auto font-bold mr-[15px]">${expense.amount}</p>
          <button
            onClick={async () => {
              await deleteExpense(expense.id);
            }}
            className="text-[10px] h-[20px] w-[20px] bg-red-500 rounded text-white hover:bg-red-600"
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
