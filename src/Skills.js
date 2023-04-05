import React from "react";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next",
    "Tailwind",
    "Jira",
    "Git",
    "Redux",
    "Jest",
  ];

  return (
    <section name="skills" className="my-8">
      <h2 className="my-4 text-2xl font-bold leading-tight text-gray-900">
        Skills
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-white shadow-lg rounded-lg px-4 py-2 text-center text-gray-700 font-bold"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
