import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="max-w-2xl mx-auto p-4 text-white">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to 0x Code Limited! We are a technology-based company dedicated
        to helping businesses design and develop new applications. Our team is
        passionate and enthusiastic about what we do, and we strive to deliver
        the best solutions for our clients.
      </p>
      <p className="mb-4">
        At 0x Code Limited, we believe in innovation, quality, and customer
        satisfaction. Whether you need a custom application or a complete
        digital transformation, we are here to assist you every step of the way.
      </p>
      <p>
        If you have any questions or would like to get in touch with us, please
        contact us at{" "}
        <a href="mailto:info@0x.company" className="text-blue-500 underline">
          info@0x.company
        </a>
        .
      </p>
    </div>
  );
};

export default About;
