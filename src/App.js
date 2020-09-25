import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import TableRow from "./components/TableRow";


function App() {
  const [employee, setEmployee] = useState([]);
  const [inputValue, updateInput] = useState("");

  useEffect(() => {
    axios.get("http://dummy.restapiexample.com/api/v1/employees")
      .then(data => {
        console.log(data.data.data);
        setEmployee(data.data.data);
      })

  }, []);

  const onClick = () => {
    let e = [...employee]
    e.sort((a, b) => b.id - a.id)
    setEmployee(e)
  }

  const FilterInput = () => {

    let filteredUsers = [...employees]
    inputValue === ""
      ? filteredUsers
      : filteredUsers.filter(
        ({ name: { first } }) =>
          first.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0
      );

    setEmployee(filteredUsers);
  }


  return (
    <div className>
      <form> 
        <input type="text" name="name"></input>
        <input type="submit" value="Submit" onClick={FilterInput}></input>
      </form>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">ID <button onClick={onClick}>sort</button></th>
            <th scope="col">Name</th>
            <th scope="col">Salary</th>
            <th scope="col">Age</th>
          </tr>
        </thead>
        <tbody>
          {employee.map(e => {
            return <TableRow
              id={e.id}
              name={e.employee_name}
              salary={e.employee_salary}
              age={e.employee_age}
            />
            // use components to pass the information, the components will be how the HTML is designed, we are just using this area to pass information. 

          })}
        </tbody>
      </table>


    </div>
  );
}

export default App;
