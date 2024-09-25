import {useState} from 'react'
import Header from "./components/ui/Header.jsx";
import Resumes from "./components/Resumes.jsx";

function App() {

    return (
        <div className={'overflow-hidden'}>
            <Header/>
            <Resumes/>
        </div>
    )
}

export default App
