import * as React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@components/ui/Input";
import { Button } from "@components/ui/Button";
import ErrorMessage from "@components/ui/ErrorMessage";
import { signUpSchema, FormData } from "@interfaces/schema";

export const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  });

  // Create or edit transaction submit function
  const onSubmit: SubmitHandler<FormData> = async (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          {...register("email")}
          placeholder="Enter Email Address"
          label="Email"
          formField={true}
          type="text"
          className="text-sm"
          error={errors.email ? errors.email.message : undefined}
        />

        <Input
          {...register("password")}
          placeholder="Enter Password"
          label="Password"
          formField={true}
          type="password"
          className="text-sm"
          error={errors.password ? errors.password.message : undefined}
        />
      </div>

      <div className="flex justify-end mt-5">
        <Button
          title={"Login"}
          withIcon={false}
          variant="contained"
          size="medium"
          isSubmitting={isSubmitting}
          className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        />
      </div>

      {Boolean(errors.root?.message?.trim()) && (
        <ErrorMessage message={errors.root?.message as string} />
      )}
    </form>
  );
};
