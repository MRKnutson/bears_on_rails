import axios from "axios";
import React, { useState} from "react";

const NewBearForm = (props) => {
  const { newestBear } = props
  const [speciesState, setSpeciesState] = useState("")
  const [environmentState, setEnvironmentState] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBear = {species: speciesState, environment: environmentState};
    let response = await axios.post("/bears", newBear);
    newestBear(response.data)
  };

  return(
    <div>
      <h3>New Bear:</h3>
      <form onSubmit = {handleSubmit}>
        <p>Species:</p>
        <input value = {speciesState} onChange = {(e)=>setSpeciesState(e.target.value)} />
        <p>Environment:</p>
        <input  value = {environmentState} onChange = {(e)=>setEnvironmentState(e.target.value)}/>
        <br />
        <button>Add Bear</button>
      </form>
    </div>
  )
};

export default NewBearForm;