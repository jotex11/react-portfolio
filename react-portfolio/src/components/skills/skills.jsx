import React from 'react';

function Skills() {
  // List of skills
  const skillsList = [
    'HTML5',
    'CSS3',
    'JavaScript',
    // Add more skills as needed
  ];

  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
