import React, {useState, useEffect} from 'react'

function Welcome() {
    const [self, setSelf] = useState('attendee');

    // add useEffect here for self
    useEffect(() => {
        fetch('http://localhost:4001/getSelf')
            .then(res => res.json())
            .then(data => setSelf(data.name))
    }, []);

    return (
        <h1>Welcome to {self}'s Canvas discussion dashboard!</h1>
    )
}

export default Welcome
