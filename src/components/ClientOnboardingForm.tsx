"use client";

import { TSignUpSchema, signUpSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export const ClientOnboardingForm = () => {
    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: TSignUpSchema) => {
    // TODO: submit to server
    // ...
    await new Promise((resolve) => setTimeout(resolve, 1000));

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-2">
      <input
        {...register("fullName")}
        type="text"
        placeholder="Full name"
        className="px-4 py-2 rounded"
      />
      {errors.fullName && (
        <p className="text-red-500">{`${errors.fullName.message}`}</p>
      )}

      <input
        {...register("email")}
        type="email"
        placeholder="Email"
        className="px-4 py-2 rounded"
      />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}

      <input
        {...register("companyName")}
        type="text"
        placeholder="Company name"
        className="px-4 py-2 rounded"
      />
      {errors.companyName && (
        <p className="text-red-500">{`${errors.companyName.message}`}</p>
      )}

      <div>
        <label className="block mb-1">Services interested in</label>
        <div className="flex flex-col gap-1">
          <label>
            <input
              type="checkbox"
              value="UI/UX"
              {...register("services")}
              className="mr-2"
            />
            UI/UX
          </label>
          <label>
            <input
              type="checkbox"
              value="Branding"
              {...register("services")}
              className="mr-2"
            />
            Branding
          </label>
          <label>
            <input
              type="checkbox"
              value="Web Dev"
              {...register("services")}
              className="mr-2"
            />
            Web Dev
          </label>
          <label>
            <input
              type="checkbox"
              value="Mobile App"
              {...register("services")}
              className="mr-2"
            />
            Mobile App
          </label>
        </div>
        {errors.services && (
          <p className="text-red-500">{`${errors.services.message}`}</p>
        )}
      </div>

      <input
        {...register("budget", { valueAsNumber: true })}
        type="number"
        placeholder="Budget (USD)"
        className="px-4 py-2 rounded"
      />
      {errors.budget && (
        <p className="text-red-500">{`${errors.budget.message}`}</p>
      )}

      <input
        {...register("projectStartDate", {
          valueAsDate: true,
        })}
        type="date"
        placeholder="Project start date"
        className="px-4 py-2 rounded"
      />
      {errors.projectStartDate && (
        <p className="text-red-500">{`${errors.projectStartDate.message}`}</p>
      )}

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          {...register("acceptTerms")}
          className="mr-2"
        />
        Accept terms
      </label>
      {errors.acceptTerms && (
        <p className="text-red-500">{`${errors.acceptTerms.message}`}</p>
      )}

      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-blue-500 disabled:bg-gray-500 py-2 rounded"
      >
        Submit
      </button>
    </form>
  )
}
