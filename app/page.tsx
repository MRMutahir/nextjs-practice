"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null); // State to store fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/routes/route"
        ); // Fetch data from the API
        console.log(response);
        
        if (response.ok) {
          const result = await response.json(); // Parse the JSON response
          setData(result); // Update the component state with the fetched data
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke the function to fetch data when the component mounts
  },);

  return (
    <div>
      SALAM
      {/* {data ? (
        <div>Data: {JSON.stringify(data)}</div>
      ) : (
        <div>Loading...</div>
      )} */}
    </div>
  );
}
