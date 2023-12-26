"use client";
import { Button, Callout, Text, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import React, { useState } from "react";
import { title } from "process";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { createTaskSchema } from "@/app/valitationSchema";
import { z } from "zod";
import ErrorMessage from "@/app/Components/ErrorMessage";
import Spinner from "@/app/Components/Spinner";


type IssueForm = z.infer<typeof createTaskSchema>;


const NewIssue = () => {
  const router = useRouter();

  

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createTaskSchema),
  });
  const [errorS, seterrorS] = useState<string | null>(null);
   // const [isSubmiting, setisSubmiting] = useState<string | null>(null);
  const [isSubmiting, setisSubmiting] = useState<boolean>(false);
  // console.log(register("title"), "register>>>>>>>>>");
  console.log(errorS, "errorS");

  return (
    <div>
      {errorS && (
        <Callout.Root color="red" className="mb-5">
          <Callout.Text>{errorS}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="max-w-xl space-y-3"
        onSubmit={handleSubmit(async (data) => {
          try {
            setisSubmiting(true);
            await axios.post(`/api/todos/`, data);
            router.push("/issues");
          } catch (error) {
            setisSubmiting(false);
            seterrorS(
              "Sorry, something went wrong. Please try again, or refresh the page."
            );
          }
        })}
      >
        <TextField.Root>
          <TextField.Input
            placeholder="Search the docs…"
            {...register("title")}
          />
          {/* {errors.title && (
            <Text color="red" as="p">
              {errors.title.message}
            </Text>
          )} */}
          <ErrorMessage>{errors.title?.message}</ErrorMessage>
        </TextField.Root>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        {/* {errors.description && (
          <Text color="red" as="p">
            {errors.description.message}
          </Text>
        )} */}
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmiting}>
          Submit New Issue {isSubmiting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default NewIssue;
