import React from 'react'
import Table from 'react-bootstrap/Table';
import Link from 'next/link';

const page = () => {
  return (
    <div style={{margin:'24px'}}>
        <h2>API stands for Application Programming Interface</h2>
        <h4>Types of api calls refer to HTTP methods used to perform operations</h4>
        <Link href='/get'>
        <li>GET</li>
        </Link>
        <Link href='/post'>
        <li>POST</li>
        </Link>
        <Link href='/put'>
        <li>PUT</li>
        </Link>
        <Link href='/patch'>
        <li>PATCH</li>
        </Link>
        <Link href='/delete'>
        <li>DELETE</li>
        </Link>

        <h4>Methods used to make api call</h4>
        <li>Axios : (third-party library)</li>
        <li>FETCH : JS Inbuild method</li>

        <h4>Difference btw Axios and Fetch</h4>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>AXIOS</th>
          <th>FETCH</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Requires installation</td>
          <td>Built-in (no install needed)</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Cleaner and more readable</td>
          <td>Needs manual handling for JSON</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Auto converts response to JSON</td>
          <td>You must call .json() manually</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Handles HTTP errors better (status-based)</td>
          <td>You must check response status yourself</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default page