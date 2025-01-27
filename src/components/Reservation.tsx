"use client";

import { client } from "@/sanity/lib/client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// Zod schema for form validation
const reservationSchema = z.object({
  customerName: z.string().min(3, "Name must be at least 3 characters"),
  tableNo: z.string().min(1, "Table number is required"),
  noOfPersons: z.string().min(1, "Number of persons is required"),
  dateTime: z.string().min(1, "Date and time are required"),
  contactNumber: z
    .string()
    .min(10, "Contact number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  specialRequests: z.string().optional(),
});

const ReservationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof reservationSchema>>({
    resolver: zodResolver(reservationSchema),
  });

  const onSubmit = async (data: z.infer<typeof reservationSchema>) => {
    try {
      await client.create({
        _type: "reservation",
        customerName: data.customerName,
        tableNo: parseInt(data.tableNo),
        noOfPersons: parseInt(data.noOfPersons),
        dateTime: new Date(data.dateTime).toISOString(),
        contactNumber: data.contactNumber,
        email: data.email,
        specialRequests: data.specialRequests,
      });
      alert("Reservation successful!");
    } catch (error) {
      console.error("Error submitting reservation:", error);
      alert("Error submitting reservation.");
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto bg-white p-6 rounded-lg shadow-md my-5">
      <h2 className="text-2xl font-bold mb-4">Table Reservation</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-3"
      >
        <Label>Name</Label>
        <Input {...register("customerName")} placeholder="Customer Name" />
        {errors.customerName && (
          <p className="text-red-500">
            {typeof errors.customerName?.message === "string"
              ? errors.customerName.message
              : ""}
          </p>
        )}

        <Label>Table No</Label>
        <Input type="number" {...register("tableNo")} placeholder="Table No" />
        {errors.tableNo && (
          <p className="text-red-500">
            {typeof errors.tableNo?.message === "string"
              ? errors.tableNo.message
              : ""}
          </p>
        )}

        <Label>No of Persons</Label>
        <Input
          type="number"
          {...register("noOfPersons")}
          placeholder="No of Persons"
        />
        {errors.noOfPersons && (
          <p className="text-red-500">
            {typeof errors.noOfPersons?.message === "string"
              ? errors.noOfPersons.message
              : ""}
          </p>
        )}

        <Label>Date and Time</Label>
        <Input type="datetime-local" {...register("dateTime")} />
        {errors.dateTime && (
          <p className="text-red-500">
            {typeof errors.dateTime?.message === "string"
              ? errors.dateTime.message
              : ""}
          </p>
        )}

        <Label>Contact Number</Label>
        <Input
          type="tel"
          {...register("contactNumber")}
          placeholder="Contact Number"
        />
        {errors.contactNumber && (
          <p className="text-red-500">
            {typeof errors.contactNumber?.message === "string"
              ? errors.contactNumber.message
              : ""}
          </p>
        )}

        <Label>Email</Label>
        <Input
          type="email"
          {...register("email")}
          placeholder="Email Address"
        />
        {errors.email && (
          <p className="text-red-500">
            {typeof errors.email.message === "string"
              ? errors.email.message
              : ""}
          </p>
        )}

        <Label>Special Requests</Label>
        <Textarea
          {...register("specialRequests")}
          placeholder="Special Requests (Optional)"
        />

        <div className="flex justify-center items-center my-5">
          <Button type="submit">Reserve Table</Button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
