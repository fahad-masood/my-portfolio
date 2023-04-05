import React from "react";
import myPhoto from "./images/my-photo.png";
import Socials from "./Socials";

function About() {
  return (
    <section
      name="about"
      className="my-8 flex flex-col md:flex-row items-center"
    >
      <img
        src={myPhoto}
        alt="My photo"
        className="w-48 h-48 object-cover bg-gray-900 shadow-xl rounded-full mr-0 md:mr-10 mb-6 md:mb-0"
      />
      <div className="md:w-1/2">
        <h2 className="text-2xl font-bold leading-tight text-gray-900">
          About Me
        </h2>
        <p className="my-4 text-gray-700">
          Hi there! My name is Fahad Masood and I'm a Frontend developer with 1+
          years of experience.
        </p>
        <p className="my-4 text-gray-700">
          I'm passionate about building responsive, user-friendly web
          applications using the latest technologies. I specialize in Javascript
          and React.js, but I'm always looking to expand my skillset and learn
          new things.
        </p>
      </div>
      <Socials />
    </section>

    // </section>
  );
}

export default About;
