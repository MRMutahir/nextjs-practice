"use client";

// IssuesPage.tsx
import React, { useEffect, useState } from "react";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import Modal from "../Components/Modal";

interface Issue {
  id: string;
  title: string;
  status: string;
  createdAt: string;
  description: string;
}

const IssuesPage = () => {
  const [data, setData] = useState<Issue[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [issingleData, setSingleData] = useState<Issue | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/todos");
        const redata: Issue[] = await res.json();
        setData(redata);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const closeModalFoo = () => {
    setIsModalOpen(false);
  };

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
              <Table.Row key={index} className="cursor-pointer">
                <Table.RowHeaderCell
                  onClick={() => {
                    setIsModalOpen(true);
                    setSingleData(issue);
                  }}
                >
                  {issue.title}
                </Table.RowHeaderCell>
                <Table.Cell>{issue.status}</Table.Cell>
                <Table.Cell>{issue.createdAt}</Table.Cell>
                {/* <Table.Cell>
                  <Button color="cyan" variant="soft">
                    Edit issue
                  </Button>
                </Table.Cell>
                <Table.Cell>
                  <Button color="crimson" variant="soft">
                    Delete issue
                  </Button>
                </Table.Cell> */}
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
      {isModalOpen && (
        <Modal singledata={issingleData} closeModalFoo={closeModalFoo} />
      )}
    </>
  );
};

export default IssuesPage;
