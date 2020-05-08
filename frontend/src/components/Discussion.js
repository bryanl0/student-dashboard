import React, {useState, useEffect} from 'react'
import Heatmap from './Heatmap'
import Dropdown from './Dropdown'

function Discussion() {
    const [discussion, setDiscussion] = useState([]);
    const [timestamps, setTimestamps] = useState([]);
    const [selected, setSelected] = useState(null);
    const [loaded, setLoaded] = useState(false);

    // add useEffect here for discussion
    useEffect(() => {
        setLoaded(false);
        setTimestamps([]);
        fetch(`http://localhost:4001/getDiscussions/${selected}`)
            .then(res => res.json())
            .then(data => {
                setDiscussion(data);
                setLoaded(true);
            })
    }, [selected]);

    useEffect(() => {
        if (discussion.length > 0) {
            const discussionTimestamps = discussion
                .map(discussion => discussion.timestamp);
            setTimestamps(discussionTimestamps)

        }
    }, [discussion]);

    return (
        <div>
            <div>
                <label>Choose a course: </label>
                <Dropdown handleSelect={setSelected} handleLoaded={setLoaded}/>
            </div>
            <div>
                {timestamps.length === 0 && loaded ? <text>No discussion found in selected course</text> : <text/>}
                {loaded ? <Heatmap timestamps={timestamps}/> : <div>Loading ...</div>}
            </div>
        </div>
    )
}

export default Discussion
