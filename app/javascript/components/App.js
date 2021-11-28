import React, { useState, useEffect } from "react"
import Bears from "./Bears";
import axios from "axios";
import NewBearForm from "./NewBearForm";
import bears from "../../assets/images/bears.jpeg"

const App = (props) => {
  const [bearsArray, setBearsArray] = useState([]);
  const [showNewForm, setShowNewForm] = useState(false);

  const toggleForm = () => {
    setShowNewForm(!showNewForm)
  };

  useEffect(()=>{
    getBears();
  },[]);

  const getBears = async() =>{
    let response = await axios.get("/bears");
    setBearsArray(response.data)
  };

  const displayNewBear = (newBear) => {
    setBearsArray([newBear,...bearsArray]);
  };

  const updateBear = (changedBear)=>{
    let updatedBears=bearsArray.map((single_bear) => (single_bear.id === changedBear.id ? changedBear : single_bear));
    setBearsArray(updatedBears)
  };

  const deleteBear = async (id) => {
    // Delete from DB
    let response = await axios.delete(`/bears/${id}`);
    let filteredBears = bearsArray.filter((single_bear)=> single_bear.id !== id);
    setBearsArray(filteredBears);
  };


  return(
    <div>
      <h1>Check out the cool bears!</h1>
      <img src={bears} width = "500" alt="Bears" />
      <Bears multiple_bears={bearsArray} updateBear = {updateBear} deleteBear = {deleteBear}/>
      <button onClick = {()=>toggleForm()}>{showNewForm ? "Cancel" : "Add a Bear"}</button>
      {showNewForm && <NewBearForm newestBear = {displayNewBear}/>}
    </div>
  )
};

export default App; 