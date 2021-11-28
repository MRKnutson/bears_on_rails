import React from "react"
import Bear from "./Bear";

const Bears = (props) => {
  const { multiple_bears, deleteBear, updateBear } = props
  return (
    <div>
      <h3>Alaskan Bear Species:</h3>
      {multiple_bears.map((single_bear) => (
        <Bear key = {single_bear.id} bear_facts={single_bear} updateBear = {updateBear} deleteBear = {deleteBear}/>
      ))}
    </div>
  );
};

export default Bears;

