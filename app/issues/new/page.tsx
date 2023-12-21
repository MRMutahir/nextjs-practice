"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm } from "react-hook-form";
import React from "react";
import { title } from "process";
interface IssueForm {
  title: String;
  description: String;
}

const NewIssue = () => {
  const { register } = useForm<IssueForm>();
  console.log(register("title"), "register>>>>>>>>>");

  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root>
        <TextField.Input placeholder="Search the docs…" />
      </TextField.Root>
      <SimpleMDE placeholder="Reply to comment…" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssue;
