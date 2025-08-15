"use client";

import { TSignUpSchema, signUpSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import "../styling/ClientOnboard.css";

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
    await new Promise((resolve) => setTimeout(resolve, 1000));
    reset();
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-title">Client Onboarding</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <input {...register("fullName")} type="text" placeholder="Full name" />
        {errors.fullName && <p className="error-text">{errors.fullName.message}</p>}

        <input {...register("email")} type="email" placeholder="Email" />
        {errors.email && <p className="error-text">{errors.email.message}</p>}

        <input {...register("companyName")} type="text" placeholder="Company name" />
        {errors.companyName && <p className="error-text">{errors.companyName.message}</p>}

        <label className="section-label">Services interested in</label>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" value="UI/UX" {...register("services")} /> UI/UX
          </label>
          <label>
            <input type="checkbox" value="Branding" {...register("services")} /> Branding
          </label>
          <label>
            <input type="checkbox" value="Web Dev" {...register("services")} /> Web Dev
          </label>
          <label>
            <input type="checkbox" value="Mobile App" {...register("services")} /> Mobile App
          </label>
        </div>
        {errors.services && <p className="error-text">{errors.services.message}</p>}

        <input
          {...register("budget", { valueAsNumber: true })}
          type="number"
          placeholder="Budget (USD)"
        />
        {errors.budget && <p className="error-text">{errors.budget.message}</p>}

        <input
          {...register("projectStartDate", { valueAsDate: true })}
          type="date"
          placeholder="Project start date"
        />
        {errors.projectStartDate && (
          <p className="error-text">{errors.projectStartDate.message}</p>
        )}

        <label className="checkbox-label">
          <input type="checkbox" {...register("acceptTerms")} /> Accept terms
        </label>
        {errors.acceptTerms && <p className="error-text">{errors.acceptTerms.message}</p>}

        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
