import React from "react";
import Link from "next/link";
const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Issue Tracker</h1>
      <p className="mb-4">
        This is a simple issue tracking application where you can post your
        issues and keep track of them.
      </p>
      <Link
        href="/issues"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 cursor-pointer"
      >
        Go to Issues
      </Link>
    </div>
  );
};

export default Home;
