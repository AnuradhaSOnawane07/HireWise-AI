const extractResumeData = (text) => {

    // Email
    const email =
        text.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/)?.[0] || "";

    // Phone
    const phone =
        text.match(/\+?\d[\d\s-]{8,15}/)?.[0].trim() || "";

    // Name (First non-empty line)
    const lines = text
        .split("\n")
        .map(line => line.trim())
        .filter(line => line.length > 0);

    const name = lines[0] || "";

    // Skills
    const skillsList = [
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
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "C",
  "C++",
  "Django",
  ".NET",
  "ASP.NET",
  "Mongoose",
  "JWT",
  "GitHub"
];

    const skills = skillsList.filter(skill =>
        text.toLowerCase().includes(skill.toLowerCase())
    );

    // Education
    const education = [];

    if (text.includes("Education"))
        education.push("Education Section Found");

    // Projects
    const projects = [];

    if (text.includes("Projects"))
        projects.push("Projects Section Found");

    // Experience
    const experience = [];

    if (text.includes("Internships"))
        experience.push("Bosch Internship");

    return {
        name,
        email,
        phone,
        skills,
        education,
        projects,
        experience
    };
};

module.exports = extractResumeData;