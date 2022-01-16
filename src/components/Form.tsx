import React, { useState } from "react"
import "../styles/form.css"
import InputFields from "./input fields/InputFields"

function FormFields() {
  const [steps, setSteps] = useState("one")
  const [fields, setFields] = useState({
    name: "",
    number: "",
    email: "",
  })
  const [bankfields, setBankfields] = useState({
    bankname: "",
    accnumber: "",
    ifsc: "",
  })
  const handlechange = (e) => {
    console.log(e)
    setFields({ ...fields, [e.target.name]: e.target.value })
  }
  const handlebankchange = (e) => {
    console.log(e)
    setBankfields({ ...bankfields, [e.target.name]: e.target.value })
  }

  const hanldetwo = () => {
    if (fields.name !== "" && fields.email !== "" && fields.number !== "") {
      console.log(fields)
      setSteps("three")
    } else {
      console.log("Error")
    }
  }

  const hanldethree = () => {
    if (
      bankfields.bankname !== "" &&
      bankfields.accnumber !== "" &&
      bankfields.ifsc !== ""
    ) {
      console.log(fields)
      setSteps("done")
    } else {
      console.log("Error")
    }
  }
  return (
    <>
      <div id="demo" className="stepscontainer">
        <div
          style={{
            color: steps === "one" && "yellow",
          }}
          className="txtsel"
        >
          Select Subscription
        </div>
        <div
          style={{
            color: steps === "two" && "yellow",
          }}
          className="txtsel"
        >
          Personal Details
        </div>
        <div
          style={{
            color: steps === "three" && "yellow",
          }}
          className="txtsel"
        >
          Bank Details
        </div>
      </div>
      <div className="stepsdiv">
        {steps === "one" && (
          <>
            <div className="">
              <div id="one" className="one">
                One Year
              </div>
              <div id="two" className="two">
                {/* Two Year */}
              </div>
            </div>

            <div onClick={() => setSteps("two")} id="submitone" className="btn">
              Next Step
            </div>
          </>
        )}
        {steps === "two" && (
          <>
            <div className="">
              <InputFields
                name={"name"}
                pl={"name"}
                type="text"
                value={fields.name}
                handlechange={handlechange}
                // pl = {}
              />
              <InputFields
                name={"number"}
                pl={"number"}
                type="phone"
                value={fields.number}
                handlechange={handlechange}
              />
              <InputFields
                name={"email"}
                pl={"email"}
                type="mail"
                value={fields.email}
                handlechange={handlechange}
              />
            </div>
            <div onClick={() => setSteps("one")} id="backbtn" className="btn">
              Back
            </div>
            <div onClick={hanldetwo} id="usersubmitone" className="btn">
              Next Step
            </div>
          </>
        )}

        {steps === "three" && (
          <>
            <div className="">
              <InputFields
                name={"bankname"}
                pl={"bankname"}
                type="text"
                value={bankfields.bankname}
                handlechange={handlebankchange}
              />
              <InputFields
                name={"accnumber"}
                pl={"accnumber"}
                type="phone"
                value={bankfields.accnumber}
                handlechange={handlebankchange}
              />
              <InputFields
                name={"ifsc"}
                pl={"ifsc"}
                type="mail"
                value={bankfields.ifsc}
                handlechange={handlebankchange}
              />
            </div>
            <div onClick={() => setSteps("two")} id="backbtn" className="btn">
              Back
            </div>
            <div onClick={hanldethree} id="banksubmitone" className="btn">
              Submit
            </div>
          </>
        )}

        {steps === "done" && <>
        <h2>Form Subbmited</h2>
          {JSON.stringify(fields)}
          {JSON.stringify(bankfields)}
        <p onClick={() => setSteps('one')}>reset</p>
        </>}
      </div>
    </>
  )
}

export default FormFields
