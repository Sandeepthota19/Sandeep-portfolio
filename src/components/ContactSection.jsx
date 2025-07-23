import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="flex flex-col items-center space-y-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:sandeept19012001@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  sandeept19012001@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <h4 className="font-medium mb-4">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/sandeep-kumar-thota-8365a816a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
              <a
                href="https://www.instagram.com/tsandeep_19/?igsh=dGxpY25tN3cwcjBw&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
