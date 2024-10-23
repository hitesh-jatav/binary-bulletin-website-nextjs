import plane from "@/public/loading-plane.gif";
import Image from "next/image";

export default function () {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "550px",
        borderTop: "1px solid grey",
      }}
    >
      <Image alt="loading-page" src={plane} height={100} width={100} />
    </div>
  );
}
