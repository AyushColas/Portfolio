import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "Python", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "SQL", category: "language" },
  { name: "C++", category: "language" },

  { name: "React.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "Bootstrap", category: "frontend" },
  { name: "HTML/CSS", category: "frontend" },

  { name: "Django", category: "backend" },
  { name: "Django REST Framework", category: "backend" },
  { name: "JWT Authentication", category: "backend" },

  { name: "PostgreSQL", category: "database" },
  { name: "MongoDB", category: "database" },

  { name: "Apache Kafka", category: "bigdata" },
  { name: "PySpark", category: "bigdata" },
  { name: "Apache Airflow", category: "bigdata" },

  { name: "Docker", category: "devops" },
  { name: "GitHub Actions", category: "devops" },
  { name: "CI/CD", category: "devops" },

  { name: "Git", category: "tools" },
  { name: "GitHub", category: "tools" },
  { name: "Postman", category: "tools" },
  { name: "VS Code", category: "tools" }
];

const categories = [
  "language",
  "frontend",
  "backend",
  "database",
  "bigdata",
  "devops",
  "tools"
];

// Extension labels for skills
const extensionMap = {
  Python: ".py",
  JavaScript: ".js",
  SQL: ".sql",
  "C++": ".cpp",
  "React.js": ".jsx",
  "Tailwind CSS": ".css",
  Bootstrap: ".css",
  "HTML/CSS": ".html",
  Django: ".py",
  "Django REST Framework": ".py",
  "JWT Authentication": ".jwt",
  PostgreSQL: ".psql",
  MongoDB: ".mongo",
  "Apache Kafka": ".kafka",
  PySpark: ".spark",
  "Apache Airflow": ".airflow",
  Docker: ".docker",
  "GitHub Actions": ".yml",
  "CI/CD": ".yaml",
  Git: ".git",
  GitHub: ".git",
  Postman: ".json",
  "VS Code": ".vscode"
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("language");

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg flex justify-between items-center">
                  {skill.name}
                  <span className="text-xs px-2 py-0.5 bg-primary text-white rounded">
                    {extensionMap[skill.name] || ".ext"}
                  </span>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
