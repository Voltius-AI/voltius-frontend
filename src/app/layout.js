import { Inter } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "./ReactQueryProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Voltius | Elevating Blockchain Integrity",
  description: "REVOLUTIONIZING SMART CONTRACT SECURITY",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" class="dark">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/voltius_favicon.png" />
        <style>{inter.styles}</style>
      </head>
      <ReactQueryProvider>
        <body className={cn([inter.className, "bg-black"])}>
          {children}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition="Bounce"
          />
        </body>
      </ReactQueryProvider>
    </html>
  );
}
