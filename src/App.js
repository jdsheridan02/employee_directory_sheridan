import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';


function App() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => { 
    Axios.get("http://dummy.restapiexample.com/api/v1/employees")
    .then(data=>{
      console.log(data.data.data);
      setEmployee(data.data.data);
    })

  }, []);


  return (
    <div className>
      {employee.map(e => {
        return <div> {e.employee_name} </div>
        // use components to pass the information, the components will be how the HTML is designed, we are just using this area to pass information. 

      })}
    </div>
  );
}

export default App;
