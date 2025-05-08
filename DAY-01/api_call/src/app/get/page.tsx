"use client";

import React, { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";

const page = () => {
  const [data, setData] = useState({});
  const [dataAxios, setDataAxios] = useState({});
  const [buttonFetch, setButtonFetch] = useState(false);

  async function getDataFetch() {
    const url = "https://jsonplaceholder.typicode.com/todos/10";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log("No response from server");
      }
      const json = await response.json();
      setData(json);
    } catch (e) {
      console.log(e, "error");
    }
  }

  async function getDataAxios() {
    const url = "https://jsonplaceholder.typicode.com/todos/10";
    try {
      const response = await axios.get(url);
      if (!response) {
        console.log("No response from server");
      }
      setDataAxios(response.data);
    } catch (e) {
      console.log(e, "error");
    }
  }

  const handleClick = () => {
    setButtonFetch(true);
    getDataFetch();
    getDataAxios();
  };

  return (
    <div>
      <h4>GET</h4>
      <div style={{ margin: "2rem" }}>
        <Button variant="primary" onClick={handleClick}>
          Using Fetch :
        </Button>
      </div>
      {buttonFetch && (
        <>
          <h3>Code :</h3>
          <pre>
            <code>{`async function getData() {
  const url = 'https://jsonplaceholder.typicode.com/todos/10';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log('No response from server');
    }
    const json = await response.json();
    setData(json);
  } catch (e) {
    console.log(e, 'error');
  }
}`}</code>
          </pre>

          <h6>Output</h6>
          <p>{data.userId}</p>
          <p>{data.id}</p>
          <p>{data.title}</p>
        </>
      )}
      <div style={{ margin: "2rem" }}>
        <Button variant="primary" onClick={handleClick}>
          Using Axios :
        </Button>
      </div>
      {buttonFetch && (
        <>
          <h3>Code :</h3>
          <pre>
            <code>
              {`
    async function getDataAxios() {
    const url = "https://jsonplaceholder.typicode.com/todos/10";
    try {
      const response = await axios.get(url);
      if (!response) {
        console.log("No response from server");
      }
      setData(response.data);
    } catch (e) {
      console.log(e, "error");
    }
  }
              `}
            </code>
          </pre>

          <h6>Output</h6>
          <p>{dataAxios.userId}</p>
          <p>{dataAxios.id}</p>
          <p>{dataAxios.title}</p>
        </>
      )}
    </div>
  );
};

export default page;
