import React, { useState, useEffect } from "react";
import fetchCurrency from "./APIService";
import axios from "axios";
import { Table, Card } from "react-bootstrap";


function Default_for_todo() {
 
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [quantity, setQuantity] = useState('');
  const [reply, setReply] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
 
  const handleSubmit = () => {
    setLoading(true);
    setIsError(false);
    // const data = {
    //   from: from,
    //   to: to
    // }
    axios.get(`http://localhost:8100/currency-conversion-feign/from/${from}/to/${to}/quantity/${quantity}`).then(res => {
    console.log(res.data)  
    setReply(res.data);
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      setIsError(true);
    });
  }
 
  return (
    <div className="container p-3">
      
      <div style={{ maxWidth: 350 }}>
        <div classNames="form-group">
          <label htmlFor="name">From</label>
          <input
            type="text"
            className="form-control"
            id="from"
            placeholder="Enter first currency"
            value={from}
            onChange={e => setFrom(e.target.value)} />
        </div>
        <div classNames="form-group">
          <label htmlFor="to" className="mt-2">To</label>
          <input
            type="text"
            className="form-control"
            id="to"
            placeholder="Enter second currency"
            value={to}
            onChange={e => setTo(e.target.value)} />
        </div>
        <div classNames="form-group">
          <label htmlFor="name">Quantity</label>
          <input
            type="number"
            className="form-control"
            id="from"
            placeholder="Enter Quantity"
            value={quantity}
            onChange={e => setQuantity(e.target.value)} />
        </div>
        {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
        <button
          type="submit"
          className="btn btn-primary mt-3"
          onClick={handleSubmit}
          disabled={loading}
        >{loading ? 'Loading...' : 'Submit'}</button>
        </div>


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








          
      </div>
   
  );
}
 
export default Default_for_todo;




/* 

function currency(){}


*/



// function RowData(row) {
//   return (
//     <tr key={row.id}>
//       <td>{row.from}</td>
//       <td>{row.to}</td>
//       {/* <td>{row.quantity}</td> */}
//       <td>{row.conversionMultiple}</td>
//       <td>{row.environment}</td>
//       {/* <td>{row.totalCalculatedAmount}</td> */}
//     </tr>
//   );
// }


































// function Default_for_todo() {
 
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [isError, setIsError] = useState(false);
//   const [data, setData] = useState(null);
 
//   const handleSubmit = () => {
//     setLoading(true);
//     setIsError(false);
//     const data = {
//       name: name,
//       email: email
//     }
//     axios.post('http://localhost:8082/clients', data).then(res => {
//       setData(res.data);
//       setName('');
//       setEmail('');
//       setLoading(false);
//     }).catch(err => {
//       setLoading(false);
//       setIsError(true);
//     });
//   }
 
//   return (
//     <div className="container p-3">
//       <h5 className="d-inline-block mb-3">POST request using axios with React Hooks - <a href="https://www.cluemediator.com" target="_blank" rel="noopener noreferrer">Clue Mediator</a></h5>
//       <div style={{ maxWidth: 350 }}>
//         <div classNames="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             className="form-control"
//             id="name"
//             placeholder="Enter name"
//             value={name}
//             onChange={e => setName(e.target.value)} />
//         </div>
//         <div classNames="form-group">
//           <label htmlFor="email" className="mt-2">Email</label>
//           <input
//             type="text"
//             className="form-control"
//             id="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={e => setEmail(e.target.value)} />
//         </div>
//         {isError && <small className="mt-3 d-inline-block text-danger">Something went wrong. Please try again later.</small>}
//         <button
//           type="submit"
//           className="btn btn-primary mt-3"
//           onClick={handleSubmit}
//           disabled={loading}
//         >{loading ? 'Loading...' : 'Submit'}</button>
//         {data && <div className="mt-3">
//           <strong>Output:</strong><br />
//           <pre>{JSON.stringify(data, null, 2)}</pre>
//         </div>
//         }
//       </div>
//     </div>
//   );
// }
 
// export default Default_for_todo;





