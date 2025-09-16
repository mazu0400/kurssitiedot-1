import React from "react";
const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Header = ({ course }) => {
  return <h2>{course}</h2>;
};

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((p) => (
        <Part key={p.id} part={p.name} exercises={p.exercises} />
      ))}
    </div>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p>
      <strong>Total of {total} exercises</strong>
    </p>
  );
};

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default Course;
