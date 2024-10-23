import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  description: React.ReactNode;
  url?: string;
  imageUrl: string;
  imageAlt: string;
};

const Projects = (props: Props) => {
  return (
    <section className="my-4 bg-theme-yellow bg-opacity-50">
      <div className="flex flex-col md:flex-row text-white">
        <div className="w-full md:w-1/2 p-4 flex justify-center">
          <Image
            src={props.imageUrl}
            alt={props.imageAlt}
            layout="responsive"
            width={256} // Set a smaller width for small screens
            height={256} // Set a smaller height for small screens
            className="w-96 h-96 md:w-96 md:h-96 lg:w-512 lg:h-512" // Adjust the width and height for different screen sizes
          />
        </div>
        <div className="w-full md:w-1/2 p-4 flex flex-col">
          <h3 className="text-2xl md:text-3xl font-semibold mt-5 mb-5">
            <Link href={props.url ?? "#"}>{props.title}</Link>
          </h3>
          {props.description}
        </div>
      </div>
    </section>
  );
};

export default Projects;
