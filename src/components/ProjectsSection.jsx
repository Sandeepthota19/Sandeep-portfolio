import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "IMDb Relational Database & REST API",
    description:
      "Designed and developed a scalable SQL database and RESTful APIs for efficient movie data storage and retrieval, reducing query time by 40%.",
    technologies: ["SQL", "REST API", "Python"],
  },
  {
    title:
      "Chatbot for University of Texas at Dallas – Masters in BA and AI Program",
    description:
      "Developed a chatbot to help students and prospects navigate and refer through all content of the official program website.",
    technologies: ["NLP", "Python", "LangChain", "OpenAI API"],
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project focuses on solving
          real-world problems with clean architecture and performance in mind.
        </p>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm border border-border"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Sandeepthota19"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
