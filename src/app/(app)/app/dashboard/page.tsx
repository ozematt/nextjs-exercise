import ExpensesForm from "@/components/expenses-form";
import ExpensesList from "@/components/expenses-list";
import { prisma } from "@/lib/prisma";

const Page = async () => {
  //
  ////DATA
  const expenses = await prisma.expense.findMany();

  ////UI
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-white text-center">Dashboard</h1>
      <div className="w-full max-w-[600px] mx-auto">
        <ExpensesList expenses={expenses} />
        <ExpensesForm />
      </div>
    </div>
  );
};

export default Page;
