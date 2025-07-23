import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate SDE & ML Enthusiast
            </h3>

            <p className="text-muted-foreground">
              Having Masters in Business Analytics and a Bachelor's in Computer Science, I have a unique blend of technical and analytical skills. My journey in web development began with a fascination for creating interactive and user-friendly applications. Over the years, I've honed my skills in various technologies, including React, Node.js, and Python.
            </p>

            <p className="text-muted-foreground">
              Open to work and collaborate on exciting projects that challenge my skills and allow me to grow as a developer. Whether it's building scalable web applications or diving into machine learning, I'm always eager to learn and contribute.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Development</h4>
                  <p className="text-muted-foreground">
                    Currently working on building web application with React and Node.js.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">GenAI</h4>
                  <p className="text-muted-foreground">
                    Exploring different Generative AI models and their applications in real-world scenarios.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Business Management</h4>
                  <p className="text-muted-foreground">
                    Working will startups to help them scale applications and improve their business processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};