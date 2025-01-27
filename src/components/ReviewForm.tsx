"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { client } from "@/sanity/lib/client";

// Define Zod schema for validation
const reviewSchema = z.object({
  foodName: z.string().min(2, "Food name must be at least 2 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  review: z.string().min(10, "Review must be at least 10 characters"),
  rating: z.coerce.number().min(1).max(5, "Rating must be between 1 and 5"),
});

type ReviewFormValues = z.infer<typeof reviewSchema>;

export default function ReviewForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),
  });

  const onSubmit = async (data: ReviewFormValues) => {
    try {
      await client.create({
        _type: "review",
        foodName: data.foodName,
        name: data.name,
        email: data.email,
        review: data.review,
        rating: data.rating,
      });
      alert("Review submitted successfully!");
      reset();
    } catch (error) {
      console.error("Failed to submit review", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md my-5">
      <h2 className="text-xl font-semibold mb-4">Submit a Review</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input {...register("foodName")} placeholder="Food Name" />
          {errors.foodName && (
            <p className="text-red-500">{errors.foodName.message}</p>
          )}
        </div>
        <div>
          <Input {...register("name")} placeholder="Your Name" />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <Input {...register("email")} placeholder="Your Email" />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Textarea {...register("review")} placeholder="Your Review" />
          {errors.review && (
            <p className="text-red-500">{errors.review.message}</p>
          )}
        </div>
        <div>
          <Input
            type="number"
            {...register("rating")}
            placeholder="Rating (1-5)"
          />
          {errors.rating && (
            <p className="text-red-500">{errors.rating.message}</p>
          )}
        </div>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </Button>
      </form>
    </div>
  );
}
