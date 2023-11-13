import React from "react";

const Contact = ({contact}:IContact) => {
  return (
    <section id="contact" className="py-16 bg-gray-700">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
        <p className="text-lg mb-4">
          Feel free to reach out to me.
        </p>
        {contact.map((item, index) =>
          <a
            className="text-blue-500 hover:underline inline-block mr-5" key={index}
            href={"mailto:" + item.contact_person}
          >
            {item.address}
          </a>
        )}
      </div>
    </section>
  );
};

export default Contact;
