"use client";
import React, { useEffect, useState } from "react";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import Modal from "../Components/Modal";
import { Fascinate } from "next/font/google";
interface Issue {
  id?: string;
  title: string;
  status: string;
  createdAt: string;
  description: string;
  // Add other properties if available in your issue data
}

const IssuesPage = () => {
  const [data, setData] = useState<Issue[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSingleData, setSingleData] = useState<Issue | null>(null);
  // console.log(isSingleData, ">>>>>>>>>>>>>>>>>>>>>>>>isSingleData")
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/todos");
        const redata: Issue[] = await res.json();
        // console.log(redata, ">>>>>>>>>>>>>redata");
        setData(redata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // let closeModal = () => {
  //   // console.log("closeModal ok")
  //   setIsModalOpen(false);
  // }

  return (
    <>
      <div className="flex justify-between items-center pb-5">
        <Button>All</Button>
        <Button>
          <Link href={"/issues/new"}>New issue</Link>
        </Button>
      </div>
      <div>
        <Table.Root>
          <Table.Body>
            {data.map((issue: Issue, index: number) => (
              <>
                < Table.Row key={index} className="cursor-pointer" >
                  <Table.RowHeaderCell
                    onClick={() => {
                      setSingleData({ issue, index });
                      setIsModalOpen(true);
                    }}
                  >
                    {issue.title}
                  </Table.RowHeaderCell>
                  <Table.Cell>{issue.status}</Table.Cell>
                  <Table.Cell>{issue.createdAt}</Table.Cell>
                  <Table.Cell>
                    <Button size="3" variant="soft">
                      Edit Task
                    </Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button color="crimson" variant="soft">
                      {" "}
                      Delete Task
                    </Button>
                  </Table.Cell>
                </Table.Row></>
            ))}
          </Table.Body>
        </Table.Root>
      </div >
      {
        isModalOpen && <Modal singleData={isSingleData} />
      }
      {/* <Modal issue={isSingleData} /> */}
    </>
  );
};

export default IssuesPage;
