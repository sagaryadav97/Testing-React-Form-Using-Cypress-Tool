import React from "react"
import "../../styles/Inputs.scss"

function InputFields({ pl, name, type, value, handlechange }) {
  return (
    <>
      <div className="inp">
        <input
          id={pl}
          placeholder={pl}
          type={type}
          name={name}
          value={value}
          onChange={handlechange}
        />
      </div>
    </>
  )
}

export default InputFields
