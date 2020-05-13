import React, {useState, useEffect} from 'react'

function Welcome() {
    const [self, setSelf] = useState('attendee');

    // add useEffect here for self
    useEffect(() => {
        fetch('https://bryans-student-dashboard.netlify.app/.netlify/functions/hello')
            .then(res => {
                res.json()
                console.log(res)
            })
            .then(data => setSelf(data.name))
    }, []);

    return (
        <h1>Welcome to {self}'s Canvas discussion dashboard demo!</h1>
    )
}

export default Welcome
