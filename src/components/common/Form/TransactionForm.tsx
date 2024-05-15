import * as React from "react";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@components/ui/Input";
import { Button } from "@components/ui/Button";
import { Select } from "@components/ui/Input/Select";
import { selectOptions } from "@constants/formOptions";
import ErrorMessage from "@components/ui/ErrorMessage";
import { transactionSchema, FormData } from "@interfaces/schema";
import { useBudget } from "@contexts/BudgetContext";
import { useModalContext } from "@contexts/ModalContext";

export const TransactionForm: React.FC = () => {
  const { state, dispatch } = useBudget();
  const { setOpenModal } = useModalContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(transactionSchema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const transactionDate = moment().format("LL");
    const id = uuidv4();
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });

    dispatch({
      type: "ADD_TRANSACTION",
      payload: { ...data, id, transactionDate },
    });
    setOpenModal(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          {...register("description")}
          placeholder="Add description"
          label="Description"
          formField={true}
          type="text"
          className="text-sm"
          error={errors.description ? errors.description.message : undefined}
        />
        <Input
          {...register("amount", { valueAsNumber: true })}
          placeholder="Add amount"
          label="Amount"
          formField={true}
          type="number"
          className="text-sm"
          error={errors.amount ? errors.amount.message : undefined}
        />
        <Select
          {...register("type")}
          placeholder="Select transaction type"
          label="Transaction type"
          formField={true}
          options={selectOptions}
          className="text-sm"
          error={errors.type ? errors.type.message : undefined}
        />
      </div>

      <div className="flex justify-end mt-5">
        <Button
          title={"Add transaction"}
          withIcon={false}
          variant="contained"
          size="medium"
          isSubmitting={isSubmitting}
          className="disabled:cursor-not-allowed"
        />
      </div>

      {Boolean(errors.root?.message?.trim()) && (
        <ErrorMessage
          className="mt-1.5"
          message={errors.root?.message as string}
        />
      )}
    </form>
  );
};
