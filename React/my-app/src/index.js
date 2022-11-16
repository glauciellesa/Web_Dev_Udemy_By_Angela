import { createRoot } from "react-dom/client"
import "./index.css"

const root = createRoot(document.getElementById("root"))

const style = {
  color: "orange",
  fontSize: "36px",
}

const greetings = () => {
  const currentTime = new Date().getHours()

  if (currentTime < 12 || currentTime == 24) {
    style.color = "red"
    return "Good Morning"
  } else if (currentTime > 12 && currentTime < 18) {
    style.color = "green"
    return "Good afternoon"
  } else {
    style.color = "blue"
    return "Good evening"
  }
}

root.render(
  <div>
    <h1 style={style} className="name">
      {greetings()}
    </h1>
  </div>,
)
