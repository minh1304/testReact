import React, {useEffect,useState} from 'react'
const lessons = [
    {
        id: 1,
        name: 'React JS là gì? tại sao nên học?'
    },
    {
        id: 2,
        name: 'SPA/MPA là gì?'
    },
    {
        id: 3,
        name: 'Arrow function'
    }
]

function Content() {
    const [lessonID, setLessonID] = useState(1)
    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonID === lesson.id?
                                'red' : 
                                '#333',
                            cursor: 'pointer'

                        }}
                        onClick= {()=>setLessonID(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )

}
export default Content