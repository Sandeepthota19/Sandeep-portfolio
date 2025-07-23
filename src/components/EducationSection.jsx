import iithLogo from "@/assets/logos/iith.png";
import utdLogo from "@/assets/logos/utd.png";

export const EducationSection = () => {
  return (
    <section
      id="education"
      className="min-h-screen flex items-center justify-center bg-background text-foreground"
    >
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-12 text-primary">Education</h2>

        <div className="space-y-16">
          {/* IITH */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <img
              src={iithLogo}
              alt="IITH Logo"
              className="w-20 h-20 object-contain"
            />
            <div>
              <h3 className="text-xl font-semibold">
                Bachelors in Computer Science
              </h3>
              <p className="text-foreground/70">
                Indian Institute of Technology, Hyderabad (IITH)
              </p>
            </div>
          </div>

          {/* UTD */}
          <div className="flex flex-col items-center justify-center space-y-4">
            <img
              src={utdLogo}
              alt="UTD Logo"
              className="w-20 h-20 object-contain"
            />
            <div>
              <h3 className="text-xl font-semibold">
                Masters in Business Analytics and Artificial Intelligence
              </h3>
              <p className="text-foreground/70">
                University of Texas at Dallas (UTD)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
