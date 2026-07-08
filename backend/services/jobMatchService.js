const skillsDatabase = [
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "Angular",
  "AngularJS",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "SQL",
  "Spring Boot",
  "Docker",
  "AWS",
  "Git",
  "REST API",
  "HTML",
  "CSS"
];

const matchResumeWithJD = (resumeSkills, jobDescription) => {

  const jdSkills = skillsDatabase.filter(skill =>
    jobDescription.toLowerCase().includes(skill.toLowerCase())
  );

  const matchedSkills = resumeSkills.filter(skill =>
    jdSkills.includes(skill)
  );

  const missingSkills = jdSkills.filter(skill =>
    !resumeSkills.includes(skill)
  );

  const matchScore = jdSkills.length
    ? Math.round((matchedSkills.length / jdSkills.length) * 100)
    : 0;

  const recommendations = missingSkills.map(
    skill => `Consider learning or highlighting ${skill}`
  );

  return {
    matchScore,
    matchedSkills,
    missingSkills,
    recommendations,
  };
};

module.exports = matchResumeWithJD;