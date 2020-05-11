import React, {useEffect} from 'react'
import Welcome from './components/Welcome'
import Discussion from './components/Discussion'
import './App.css'

function App() {

    useEffect(() => {
        document.title = "Bryan's Student Dashboard"
    }, []);

    return (
        <div className='App'>
            <Welcome/>
            <Discussion/>
        </div>
    )
}

export default App
