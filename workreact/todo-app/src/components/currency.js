import React, { useState, useEffect } from "react";
import fetchCurrency from "./APIService";

import { Table, Card } from "react-bootstrap";

export default function Currency() {
  const [reply, setReply] = useState([]);

  useEffect(() => {
    fetchCurrency().then((response) => {
      console.log(response.data);
      let obj = response.data;
      setReply(obj);
    });
  }, []);

  return (




<div style={{ align: "center" }}>
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title>Currency Converter</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Microservice based Application
          </Card.Subtitle>
          <div style={{ align: "center" }}>
            <Table
              striped
              bordered
              hover
              variant="dark"
              style={{ align: "center" }}
            >
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>Quantity</th>
                  <th>Conversion Multiple</th>
                  <th>Total Currency in {reply.to}</th>
                  <th>Operating at Port</th> 
                </tr>
              </thead>


              <tbody>
                <tr key={reply.id}>
      <td>{reply.from}</td>
      <td>{reply.to}</td>
      <td>{reply.quantity}</td>
      <td>{reply.conversionMultiple}</td>
      <td>{reply.totalCalculatedAmount}</td>
      <td>{reply.environment}</td>
      
    </tr>
    </tbody>


            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
  );

}


function RowData(row) {
  return (
    <tr key={row.id}>
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>{row.email}</td>
      
    </tr>
  );
}

















// function RowData(row) {
//   return (
//     <tr key={row.id}>
//       <td>{row.from}</td>
//       <td>{row.to}</td>
//       <td>{row.quantity}</td>
//       <td>{row.conversionMultiple}</td>
//       <td>{row.environment}</td>
//       <td>{row.totalCalculatedAmount}</td>
//     </tr>
//   );
// }
