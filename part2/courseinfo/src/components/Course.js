import React from 'react'


const Header = ({ course }) => <h2>{course.name}</h2>
const Part = ({ part }) => <p>{part.name} {part.exercises}</p>
const Content = ({ parts }) => {
    const contents = () => 
        parts.map(part =>
            <Part 
                key={part.id}
                part={part}
            />
    )


    return(
        <div>
            {contents()}
        </div>
        
    )
    
}

const Total = ({ parts }) => {
    const total = () => 
        parts.reduce((sum, part) => {
            return(
            sum + part.exercises
        )
        }, 0)

    return(
        <p><strong>total of {total()} exercises</strong></p>
    )
}

const Course = ({ courses }) => {
    const allcourses =() => courses.map(course => {
        return(
            <div key={course.id}>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
        )
    })

    return(
        <>
        {allcourses()}
        </>
    )
    
}

export default Course