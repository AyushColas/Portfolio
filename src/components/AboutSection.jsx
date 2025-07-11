import { Briefcase, Code, User } from "lucide-react";


export const AboutSection =() => {
    return( 
    <section id ="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        Aspiring Software Engineer
                    </h3>
                    <p className="text-muted-foreground">
                        I’m a Computer Science undergraduate with experience in full-stack and data-driven projects using
                         React, Django, Kafka, and PySpark. I focus on building clean, efficient, and scalable solutions.
                    </p>    
                    <p lassName="text-muted-foreground">
                        I bring strong communication, teamwork, and a fast learning mindset to every project. I'm eager to 
                        grow as a developer and contribute to meaningful work. I’m fluent in English and Hindi, with basic 
                        proficiency in German.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="fancy-button">
                            Get in Touch
                        </a>
                        <a href="src/Resume/Ayush SE.pdf"
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                        >
                            See My Resume
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols gap-6">
                    {/* Code Card – Technical Skills */}
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Code className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-lg font-semibold mb-1">Tech Stack</h4>
                            <p className="text-muted-foreground">
                            Experienced with React, Django, PySpark, Kafka, Docker, PostgreSQL, MongoDB, and GitHub Actions.
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* User Card – About You*/}
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <User className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-lg font-semibold mb-1">Team & Communication</h4>
                            <p className="text-muted-foreground">
                            Strong communication and collaboration skills. Fluent in English and Hindi, with basic German. Served as class representative.
                            </p>
                        </div>
                        </div>
                    </div>

                    {/* Briefcase Card – Projects*/}
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Briefcase className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-left">
                            <h4 className="text-lg font-semibold mb-1">Projects</h4>
                            <p className="text-muted-foreground">
                            Built a real-time analytics pipeline, job portal, and ETL system using modern tech. Always exploring scalable, practical solutions.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>

            </div>
        </div>
    </section>
    );
}
