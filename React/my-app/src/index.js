import React from "react"
import { createRoot } from "react-dom/client"

import "./index.css"

const root = createRoot(document.getElementById("root"))
const fName = "Glaucielle"
const lName = "Sa"
/* const date = new Date()
let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear() 
ou
let currentDate = new Date().toJSON().slice(0, 10)
*/
let currentDate = new Date().toLocaleDateString()

root.render(
  <div>
    <h1 className="name">
      Hello, {fName} {lName}.
    </h1>
    <p>
      {/* Today is {day}-{month}-{year} */}
      Today is {currentDate}
    </p>
  </div>,
)
