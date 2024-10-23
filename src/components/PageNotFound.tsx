import Image from "next/image";
import React from "react";
import notFound from "@/public/notfound.gif";

interface NotFoundPageProps {
  title?: string;
  buttonText?: string;
  buttonLink?: string;
}

const NotFoundPage: React.FC<NotFoundPageProps> = ({
  title = "404",
  buttonText = "Go to Home",
  buttonLink = "/",
}) => {
  return (
    <div
      style={{
        padding: "40px 0",
        backgroundColor: "#fff",
        fontFamily: '"Arvo", serif',
      }}
    >
      <div className="container">
        <h1 style={{ fontSize: "80px", textAlign: "center" }}>{title}</h1>
        <div className="w-full flex justify-center">
          <Image src={notFound} height={300} width={600} alt="not-found" />
        </div>

        <div className="w-full flex justify-center">
          <a
            className="border text-center"
            href={buttonLink}
            style={{
              color: "#fff",
              padding: "10px 20px",
              backgroundColor: "#39ac31",
              display: "inline-block",
              textDecoration: "none",
              width: "200px",
              borderRadius: "10px",
            }}
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
