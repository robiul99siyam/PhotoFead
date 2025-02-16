import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "PhotoFeed",
  description: "A Photo Feed App built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        <div className="container my-4 lg:my-8"> {children}</div>
        <div id="modal-content" />
      </body>
    </html>
  );
}
