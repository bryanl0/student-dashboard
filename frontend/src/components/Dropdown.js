import React, {useState} from 'react'

function Dropdown(props) {
    const [courses, setCourses] = useState([]);

    fetch("http://localhost:4001/getCourses")
        .then(res => res.json())
        .then(data => {
            let allCourses = [];
            for (let i = 0; i < data.length; i++) {
                if (!("access_restricted_by_date" in data[i])) {
                    allCourses.push(data[i]);
                }
            }
            setCourses(allCourses);
        });

    function handleChange(event) {
        props.handleSelect(event.target.value);
    }

    let makeOption = (course) => {
        return <option key={course.id} value={course.id}>{course.name}</option>
    };
    return (
        <select defaultValue={null} onChange={handleChange}>
            {courses.map(makeOption)}
        </select>
    )
}

export default Dropdown