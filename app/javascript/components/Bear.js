import React, {useState} from "react"
import UpdateBearForm from "./UpdateBearForm";

const Bear =(props)=> {
  const { bear_facts, deleteBear, updateBear } = props;
  const [updateFormState, setUpdateFormState] = useState(false);

  const toggleForm = () => {
    setUpdateFormState(!updateFormState)
  };

  return(
    <div>
      <h4>Species: {bear_facts.species}</h4>
      <p>Environment: {bear_facts.environment}</p>
      <button onClick = {()=>deleteBear(bear_facts.id)}>Delete Bear</button>
      <br />
      <button onClick = {()=>toggleForm()}>{updateFormState ? "Cancel Update" : "Update Bear Form"}</button>
      {updateFormState && <UpdateBearForm id = {bear_facts.id} species = {bear_facts.species} environment = {bear_facts.environment} updateBear ={updateBear}/>}
      <hr />
    </div>
  )
};

export default Bear;