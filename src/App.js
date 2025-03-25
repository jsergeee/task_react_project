import React, { useState } from "react";
import "./app.css";
import axios from "axios";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="header">Мое первое приложение</h1>{" "}
      {/* Заголовок вынесен за пределы контейнера */}
      <div className="container_wrapper">
        <div className="counter">{count}</div> {/* Счетчик */}
        <button className="counter-button" onClick={() => setCount(count + 1)}>
          Click!
        </button>
      </div>
    </>
  );
}

export default Counter;
