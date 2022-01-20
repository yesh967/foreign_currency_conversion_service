import React, { useState, useEffect } from "react";
import fetchCurrency from "./APIService";

import { Table, Card } from "react-bootstrap";

export default function Home() {
  const [reply, setReply] = useState([]);

  useEffect(() => {
    fetchCurrency().then((response) => {
      console.log(response.data);
      let obj = response.data;
      setReply([obj]);
    });
  }, []);

  return (
    <div style={{ align: "center" }}>
      <Card style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Title>Employee Task Manager</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Restapi service
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
                   <th>id</th>
                  <th>name</th> 
                  <th>Contacts</th>
                </tr>
              </thead>
              <tbody>{reply.map((cr) => RowData(cr))}</tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

function RowData(row) {
  return (
    <div>
      console.log(row.data);
<tr key={row.id}>
<td>{row.id}</td>
      <td>{row.name}</td>
      {/* <td>{row.email}</td> */}
    {/* //   <td>{row.conversionMultiple}</td>
    //   <td>{row.environment}</td><tr key={row.id}>
    //   <td>{row.name}</td>
    //   <td>{row.totalCalculatedAmount}</td> 
    // </tr> */}
    </tr>
    </div>
       
  );
}
