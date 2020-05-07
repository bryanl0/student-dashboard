import React, { useState, useEffect } from 'react'
import Heatmap from './Heatmap'
import Dropdown from './Dropdown'
import {render} from "react-dom";

function Discussion () {
  const [discussion, setDiscussion] = useState([]);
  const [timestamps, setTimestamps] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loaded, setLoaded] = useState(false);

  // add useEffect here for discussion
  useEffect(() => {
    fetch(`http://localhost:4001/getDiscussions/${selected}`)
        .then(res => res.json())
        .then(data => {
          setDiscussion(data);
          setLoaded(true);
        })
  });

  useEffect(() => {
    if (discussion.length > 0) {
      const discussionTimestamps = discussion
        .map(discussion => discussion.timestamp);
      console.log(discussionTimestamps)
      setTimestamps(discussionTimestamps)

    }
  }, [discussion]);

  return (
      <div>
        <Dropdown handleSelect={setSelected} />
        {loaded ? <Heatmap timestamps={timestamps} /> : <div>Loading ...</div>}
      </div>
  )
}

export default Discussion
