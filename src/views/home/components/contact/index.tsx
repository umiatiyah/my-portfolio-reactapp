import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-700">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-lg mb-4">
          Feel free to reach out to me via email or social media.
        </p>
        <a
          className="text-blue-500 hover:underline inline-block"
          href="mailto:umiatiyah97@gmail.com"
        >
          umiatiyah97@gmail.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
