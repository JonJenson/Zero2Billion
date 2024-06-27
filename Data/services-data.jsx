

const wrapFirstLetters = (title) => {
    return title
        .split(' ')
        .map(word => {
            if (/^[A-Za-z]/.test(word)) {
                return `<span class='first-letter'>${word.charAt(0)}</span>${word.slice(1)}`;
            } else {
                return word;
            }
        })
        .join(' ');
};

export const ServicesData = [
    {
        title: wrapFirstLetters("IP SUPPORT"),
        points: [
            "Industry Forced IP Support.",
            "Startup & Tech Savvy IP Team.",
            "Expert Guidance.",
        ],
    },
    {
        title: wrapFirstLetters("INSTITUTIONAL INDUSTRIAL COLLABORATION"),
        points: [
            "Strategic Partnership & Research Collaboration.",
            "Workforce Development & Technology Transfer.",
            "Joint Initiatives & Innovation Hubs.",
            "More ...",
        ],
    },
    {
        title: wrapFirstLetters("Bose Series: Launch Your Startup Journey"),
        points: [
            "Industry Insights.",
            "Real-World Exposure.",
            "Idea to Market.",
            "Actionable Learning.",
            "Skill Development.",
        ],
    },
    {
        title: wrapFirstLetters("Igniting Young Minds"),
        points: [
            "Meet industry leaders across various fields.",
            "Participate in interactive workshops.",
            "Develop an entrepreneurial mindset.",
            "Build skills for the world ahead.",
        ],
    },
    {
        title: wrapFirstLetters("Innovation Entrepreneurship & Venture Management"),
        points: [
            "Creative Culture.",
            "Strategic Ventures.",
            "Collaborative Partnerships.",
        ],
    },
    {
        title: wrapFirstLetters("Institution Innovation Ecosystem"),
        points: [
            "Student Launchpad.",
            "Faculty Entrepreneurship.",
            "CoE Development.",
            "Industry Linkages.",
        ],
    },
    {
        title: wrapFirstLetters("Startup Growth Investment Capital (GIC)"),
        points: [
            "Stages: Early / Growth / Revenue.",
            "Terms: Collateral-Free, No Interest.",
            "Success Fee: 10%.",
            "Repayment: 12-24 Months.",
        ],
    },
];