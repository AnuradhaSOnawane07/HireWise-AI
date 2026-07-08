const calculateATSScore = (resume) => {

    let score = 0;

    const breakdown = {
        contact: 0,
        skills: 0,
        education: 0,
        projects: 0,
        experience: 0,
        formatting: 0
    };

    // Contact Information (15)
    if (resume.name) breakdown.contact += 5;
    if (resume.email) breakdown.contact += 5;
    if (resume.phone) breakdown.contact += 5;

    score += breakdown.contact;

    // Skills (30)
    breakdown.skills = Math.min(resume.skills.length * 3, 30);
    score += breakdown.skills;

    // Education (15)
    if (resume.education.length > 0) {
        breakdown.education = 15;
        score += 15;
    }

    // Projects (20)
    if (resume.projects.length > 0) {
        breakdown.projects = 20;
        score += 20;
    }

    // Experience (10)
    if (resume.experience.length > 0) {
        breakdown.experience = 10;
        score += 10;
    }

    // Formatting (10)
    if (resume.extractedText.length > 500) {
        breakdown.formatting = 10;
        score += 10;
    }

    return {
        total: score,
        breakdown
    };

};

module.exports = calculateATSScore;