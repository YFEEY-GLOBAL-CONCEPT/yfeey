import { Suspense } from "react";
import Navbar from "@/components/globalComp/Navbar";
import Footer from "@/components/globalComp/Footer";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Suspense>
        <Navbar />
      </Suspense>
      {children}
      <Footer />
    </>
  );
}
