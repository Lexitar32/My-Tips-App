import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@components/ui/Input";
import { Button } from "@components/ui/Button";

// Define Zod schema for form data validation
const schema = z.object({
  description: z.string().min(1),
  type: z.enum(["Income", "Expenses"]),
  amount: z.number().positive(),
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
    console.log(data); // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          {...register("description")}
          placeholder="Add description"
          label="Description"
          error={errors.description ? errors.description.message : undefined}
        />
        <Input
          {...register("description")}
          placeholder="Add description"
          label="Description"
          error={errors.description ? errors.description.message : undefined}
        />
        <Input
          {...register("description")}
          placeholder="Add description"
          label="Description"
          error={errors.description ? errors.description.message : undefined}
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
    </form>
  );
};
