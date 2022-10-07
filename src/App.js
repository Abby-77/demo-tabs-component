import "./styles.css";
import { useState } from "react";

function Child({ curTitle, parentToChild, title }) {
  return (
    <button
      className={title === curTitle ? "buttonOff" : ""}
      onClick={(e) => parentToChild(title)}
    >
      Section title {title}
    </button>
  );
}

export default function App() {
  const [data, setData] = useState("1");

  const parentToChild = (num) => {
    setData(num);
  };

  return (
    <div className="tabs">
      <Child curTitle={data} parentToChild={parentToChild} title="1" />
      <Child curTitle={data} parentToChild={parentToChild} title="2" />
      <Child curTitle={data} parentToChild={parentToChild} title="3" />
      <div className="view">Content of section {data}</div>
    </div>
  );
}
