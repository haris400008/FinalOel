import './App.css';
import React, {useEffect} from "react"
import Axios  from 'axios';

function App() {

  const [employeeName,setEmployeeName]= React.useState("");
  const [designation,setDesignation]=React.useState("");
  const [age,setAge]=React.useState(0);
  const [salary,setSalary]=React.useState(0);
  const [contact,setContact]=React.useState(0);
  const [employeeList,setEmployeeList]=React.useState([]);
  const [newEmployeeName,setNewEmployeeName]= React.useState("");
  
  useEffect(()=>{
    Axios.get("http://localhost:3001/read").then(response =>{
      setEmployeeList(response.data);
    })
  })

  const addTolist=()=>{
    Axios.post('http://localhost:3001/insert',{employeeName:employeeName, designation:designation, age:age, salary:salary, contact:contact})
  }

  // const updateFood=(id)=>{
  //   Axios.put("http://localhost:3001/update",{id:id,newFoodName:newFoodName})
  // }

  // const deleteFood=(id)=>{
  //   Axios.delete(`http://localhost:3001/delete/${id}`)
  // }
  return (
      <div className='App'>
        <h1>Employee Management</h1>
        <label>Employee Name:</label>
        <input type="text" onChange={(event)=>{
          setEmployeeName(event.target.value);
        }} /><br></br><br></br>
        <label>Designation:</label>
        <input type="text" onChange={(event)=>{
          setDesignation(event.target.value);
        }} /><br></br><br></br>
        <label>Age:</label>
        <input type="number" onChange={(event)=>{
          setAge(event.target.value);
        }}  /><br></br><br></br>
        <label>Salary:</label>
        <input type="text" onChange={(event)=>{
          setSalary(event.target.value);
        }}  /><br></br><br></br>
        <label>Contact:</label>
        <input type="text" onChange={(event)=>{
          setContact(event.target.value);
        }}  /><br></br><br></br>
        <button onClick={addTolist}>Submit</button>
        <hr/>
        {
          employeeList.map((val, key)=>{
            return <div key={key}> 
              <h2>Employee Name: {val.employeeName}</h2>
              <h2>Designation: {val.designation}</h2>
              <h2>Age: {val.age}</h2>
              <h2>Salary: {val.salary}</h2>
              <h2>Contact: {val.contact}</h2>
              <hr></hr>
              {/* <input type="text" placeholder='new Employee..'  onChange={(event)=>{
          setNewEmployeeName(event.target.value);
        }} /> */}
              {/* <button onClick={()=>updateFood(val._id)}>Update</button>
              <button onClick={()=>deleteFood(val._id)}>Delete</button> */}
            </div>
          })
        }
        </div>
    );
}

export default App;
