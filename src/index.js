import ReactDom from "react-dom/client";
import MainApp from "./App";
import React from "react";


const root = ReactDom.createRoot(document.getElementById('root'))


root.render(<MainApp/>)


/* Store.subscribe вызывается каждый раз когда меняется state */
