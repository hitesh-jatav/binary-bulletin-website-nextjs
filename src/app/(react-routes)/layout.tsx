import Navbar from "@/components/Navbar";
import "@/styles/globals.css"; // Tailwind CSS imported here
import { Montserrat } from "next/font/google";
import SideBar from "@/components/SideBar";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css"
          integrity="sha512-OQDNdI5rpnZ0BRhhJc+btbbtnxaj+LdQFeh0V9/igiEPDiWE2fG+ZsXl0JEH+bjXKPJ3zcXqNyP4/F/NegVdZg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.min.css"
          integrity="sha512-MqL4+Io386IOPMKKyplKII0pVW5e+kb+PI/I3N87G3fHIfrgNNsRpzIXEi+0MQC0sR9xZNqZqCYVcC61fL5+Vg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className="bg-gray-100">
        <div className="">
          <Navbar /> {/* Make Navbar sticky */}
          <div className="responsive-padding flex flex-col-reverse md:flex-row mt-4">
            <div
              className="flex-1 pr-5"
              style={{
                minHeight: "90%",
              }}
            >
              {children}
            </div>
            <aside className="w-full md:w-1/4 p-4 bg-white rounded-lg shadow-md mb-4 md:mb-0">
              <SideBar />
            </aside>
          </div>
        </div>
      </body>
    </html>
  );
}
