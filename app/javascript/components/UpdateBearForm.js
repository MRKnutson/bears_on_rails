import axios from "axios";
import React, { useState} from "react";

const UpdateBearForm = (props) => {
  const { id, species, environment, updateBear } = props
  const [speciesState, setSpeciesState] = useState(species)
  const [environmentState, setEnvironmentState] = useState(environment)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedBear = {species: speciesState, environment: environmentState};
    let response = await axios.put(`/bears/${id}`, updatedBear);
    updateBear(response.data)
  };

  return(
    <div>
      <h4>Update Bear:</h4>
      <form onSubmit = {handleSubmit}>
        <p>Species:</p>
        <input value = {speciesState} onChange = {(e)=>setSpeciesState(e.target.value)} />
        <p>Environment:</p>
        <input  value = {environmentState} onChange = {(e)=>setEnvironmentState(e.target.value)}/>
        <br />
        <button>Change Bear</button>
      </form>
    </div>
  )
};

export default UpdateBearForm;