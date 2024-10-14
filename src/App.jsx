import { useState } from "react";
import Button2 from "./components/Button/Button2";

function App() {
const [initionalState, setInitialState] =  useState(0)

console.log('render App')


    return <>
        {/* <Button2 title='кнопка1'/>
     <Button2 title='кнопка2' isDanger m/>
     <Button2 title='кнопка3' isPrimary l/> */}

        <Button2 title="+" onClick={() => setInitialState((prevState) => prevState + 1)}/>
        <h1>{initionalState}</h1>
        <Button2 title="-" onClick={() => setInitialState((prevState) => prevState - 1)}/>

    </>


}

export default App