import React, { useState, useEffect } from "react";

export const Cards = () => {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <section className="flex flex-wrap justify-center gap-8">
      {data.map((card) => (
        <Card key={card.id} data={card} />
      ))}
    </section>
  );
};

export const Card = ({ data }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col justify-between w-56 p-2 bg-slate-600">
      <p className="text-xl">{data.title}</p>
      {show && <p className="text-xs">{data.body}</p>}
      <button onClick={toggleShow}>toggle</button>
    </div>
  );
};

export const RandomCard = () => {
  const [randomData, setRandomData] = useState();
  const url = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        const randomIndex = Math.floor(Math.random() * jsonData.length);
        setRandomData(jsonData[randomIndex]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [url]);

  if (!randomData) {
    return <div>Loading...</div>;
  }

  return <Card data={randomData} />;
};
