"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addExpense(formData: FormData) {
  await prisma.expense.create({
    data: {
      description: formData.get("description") as string,
      amount: Number(formData.get("amount")),
    },
  });
  revalidatePath("/dashboard");
}

export async function deleteExpense(id: number) {
  await prisma.expense.delete({
    where: { id: id },
  });
  revalidatePath("/dashboard");
}

export async function editExpense(formData: FormData, id: number) {
  await prisma.expense.update({
    where: { id: id },
    data: {
      description: formData.get("description") as string,
      amount: Number(formData.get("amount")),
    },
  });
  revalidatePath("/dashboard");
}
