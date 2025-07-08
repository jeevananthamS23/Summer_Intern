import React, { useState, useEffect } from "react";
import "./User.css";
import Table from "./Table";


const User = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (response.ok) {
          const dta = await response.json();
          setData(dta);
          console.log(dta);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <p style={{ textAlign: "center" }}>User Data</p>
      <div className="container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Table data={data} />
        )}
      </div>
    </div>
  );
};

export default User;
