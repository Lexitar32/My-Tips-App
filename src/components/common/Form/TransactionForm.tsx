import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@components/ui/Input";
import { Button } from "@components/ui/Button";
import { Select } from "@components/ui/Input/Select";
import { selectOptions } from "@constants/selectOptions";
import ErrorMessage from "@components/ui/ErrorMessage";

// Define Zod schema for form data validation
const schema = z.object({
  description: z.string().min(1),
  type: z.enum(["Income", "Expenses"]),
  amount: z.string().min(1),
});

// Define types for form data
type FormData = z.infer<typeof schema>;

export const TransactionForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          {...register("description")}
          placeholder="Add description"
          label="Description"
          className="p-2 border border-black rounded"
          formField={true}
          error={errors.description ? errors.description.message : undefined}
        />
        <Input
          {...register("amount")}
          placeholder="Add amount"
          label="Amount"
          formField={true}
          type="string"
          error={errors.amount ? errors.amount.message : undefined}
        />
        <Select
          {...register("type")}
          placeholder="Select transaction type"
          label="Transaction type"
          formField={true}
          options={selectOptions}
          error={errors.type ? errors.type.message : undefined}
        />
      </div>

      <div className="flex justify-end mt-5">
        <Button
          title={"Add transaction"}
          withIcon={false}
          variant="contained"
          size="medium"
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
