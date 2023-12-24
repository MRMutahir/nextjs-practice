
"use client"
import React, { useEffect, useState } from "react";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";




// Import statements...

const IssuesPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/todos");
        const redata = await res.json();
        console.log(redata, ">>>>>>>>>>>>>redata");
        setData(redata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex  justify-around items-center"><Button>
        <Link href={"/issues/new"}>New issue</Link>
      </Button></div>
      <Button>All</Button>
      <div>


        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>createdAt</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map((issue, index) => (
              <Table.Row key={index}>
                <Table.RowHeaderCell>{issue.title}</Table.RowHeaderCell>
                <Table.Cell>{issue.status}</Table.Cell>
                <Table.Cell>{issue.createdAt}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div></>
  );
};

export default IssuesPage;
