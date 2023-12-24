
"use client"
import React, { useEffect } from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";




const IssuesPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/todos");
        const redata = await res.json();
        console.log(redata, ">>>>>>>>>>>>>redata");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <Button>
        <Link href={"/issues/new"}>New issue</Link>
      </Button>
    </div>
  );
};

export default IssuesPage;
