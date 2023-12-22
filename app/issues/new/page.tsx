"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import React from "react";
import { title } from "process";
import axios from "axios";
import { useRouter } from "next/navigation";
interface IssueForm {
  title: String;
  description: String;
}

const NewIssue = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  // console.log(register("title"), "register>>>>>>>>>");

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        try {
          await axios.post(`/api/todos/`, data);
          router.push("/issues");
        } catch (error) {
          console.log(error);
        }
      })}
    >
      <TextField.Root>
        <TextField.Input
          placeholder="Search the docs…"
          {...register("title")}
        />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />

      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssue;
