import React from 'react';

function Skills() {
  // List of skills
  const skillsList = [
    'HTML',
    'CSS',
    'JavaScript',
    'UX Design',
    'Troubleshooting',
    'Problem-Solving',
    'RESTful APIs',
    'Version Control/Git',
    'Web Technologies: React JS, Jquery, Bootstrap',
    'Attention to Detail',
    'Team Collaboration'
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
