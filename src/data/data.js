import biuImg from '../assets/biu.png';

export const skills = [
  { name: 'React / Next.js', level: '95%' },
  { name: 'Node.js / Express', level: '85%' },
  { name: 'TypeScript', level: '90%' },
  { name: 'Tailwind CSS', level: '98%' },
  { name: 'PostgreSQL / MongoDB', level: '82%' },
  { name: 'Docker / AWS', level: '75%' },
];

export const projects = [
  {
    title: "BIU Online Course",
    desc: "A real-time data visualization platform with interactive analytics and dark mode optimization.",
    tech: ["ReactJS","Tailwind"],
    category: "frontend",
    link: "https://project-online-course.vercel.app/",
    image: biuImg
  },
  {
    title: "Quantum API Gateway",
    desc: "High-performance microservices gateway handling over 10k requests per second with custom caching.",
    tech: ["Node.js", "Redis", "Docker"],
    category: "backend",
    link: "#"
  },
  {
    title: "Heangx Shop E-commerce",
    desc: "Full-stack marketplace with Stripe integration, headless CMS, and lightning-fast search.",
    tech: ["Next.js", "Stripe", "Prisma"],
    category: "fullstack",
    link: "#"
  }
];

export const about = {
  name: "Soth Lyheang",
  title: "Senior Software Engineer",
  bio: "Passionate about creating innovative solutions and delivering high-quality software. With over 5 years of experience, I specialize in full-stack development, UI/UX design, and scalable architectures.",
  location: "Phnom Penh, Cambodia",
  email: "sothlyheang9@example.com",
  phone: "+855 93 296 171",
  linkedin: "https://www.linkedin.com/in/soth-l-674090284/",
  github: "https://github.com/sothlyheang"
};

export const experience = [
  {
    company: "Tech Innovations Inc.",
    position: "Senior Software Engineering",
    duration: "2020 - Present",
    description: "Led development of scalable web applications, mentored junior developers, and implemented CI/CD pipelines.",
    technologies: ["React", "Node.js", "AWS", "Docker"]
  },
  {
    company: "StartupXYZ",
    position: "Full Stack Developer",
    duration: "2018 - 2020",
    description: "Built and maintained e-commerce platforms, integrated payment systems, and optimized database performance.",
    technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind"]
  },
  {
    company: "Freelance",
    position: "Web Developer",
    duration: "2017 - 2018",
    description: "Developed custom websites and web applications for various clients, focusing on responsive design and performance.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"]
  }
];

export const education = [
  {
    institution: "Beltei International University",
    degree: "Bachelor of Information Technology and Science (SE)",
    duration: "2025 - 2027",
    description: "Graduated with honors, focused on software engineering and data structures."
  }
];
