import { ArrowRight, ArrowRightIcon, ExternalLink, GitBranch, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Real-Time Analytics Pipeline",
    description:
      "Crafted a data pipeline that processes and transforms over 10,000+ user events/hour in real-time to enable low-latency behavioral analytics for web platforms",
    Image: "projects/1.jpg",
    tags: ["Apache Kafka", "PySpark", "Postgre SQL", "Apache Airflow", "Docker"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 2,
    title: "Full-Stack Job Portal",
    description:
      "Created and launched a scalable platform supporting 100+ concurrent users, where job seekers and recruiters interact securely through dedicated interfaces",
    Image: "projects/2.jpg",
    tags: ["Django REST Framework", "JWT", "React.js", "Docker", "Github Actions"],
    githubUrl: "#",
    demoUrl: "#",
  },
  {
    id: 3,
    title: "ETL Pipeline with PySpark",
    description:
      "Streamlined the ETL of raw CSV datasets (up to 1M rows) into a clean PostgreSQL warehouse for analytics dashboards and reporting.",
    Image: "projects/3.jpg",
    tags: ["PySpark DataFrames", "Postgre SQL", "Docker"],
    githubUrl: "#",
    demoUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully crafted with attention to detail,
          performance, and user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.Image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 grid grid-rows-[auto_1fr_auto] h-full gap-y-2">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-1.5 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground hover:bg-primary/45 duration-300 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                </div>
                <div className="pt-4 mt-4 flex space-x-3 border-t border-border">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
          href="https://github.com/AyushColas"
          target="_blank"
          className="fancy-button w-fit flex item-center mx-auto gap-2">
            Check my Github <ArrowRight size={16} className="mt-1"/>
          </a>
        </div>
      </div>
    </section>
  );
};
