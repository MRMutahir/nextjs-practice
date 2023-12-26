"use client";
import React, { useEffect, useState } from "react";
import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import Modal from "../Components/Modal";

// Import statements...

const IssuesPage = () => {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [issingleData, setSingleData] = useState([]);

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
  // const showModal = () => {
  //   setIsModalOpen((prevState) => !prevState);
  //   const singledata = data.map((ele, index) => {
  //     return ele.description;
  //   });
  //   console.log(singledata, ">>>>>>>>>singledata");
  // };

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
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Issue</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>createdAt</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map((issue, index) => (
              <Table.Row key={index} className="cursor-pointer">
                <Table.RowHeaderCell
                  onClick={() => {
                    setIsModalOpen((prevState) => !prevState); // Toggling the state
                    // console.log(index,"index>>>")
                    // console.log(issue, "index>>>");
                    setSingleData(issue);

                    // const singledata = data.map((ele, index) => {
                    //   return ele.description;
                    // });
                    // console.log(singledata, ">>>>>>>>>singledata");
                  }}
                >
                  {issue.title}
                </Table.RowHeaderCell>

                <Table.Cell>{issue.status}</Table.Cell>
                <Table.Cell>{issue.createdAt}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </div>
      {isModalOpen && <Modal issue={issingleData} />}
    </>
  );
};

export default IssuesPage;
