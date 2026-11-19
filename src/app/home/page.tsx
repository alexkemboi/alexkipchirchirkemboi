import type { Metadata } from "next";
import Home from "@/components/Home";
import Highlights from "@/components/Highlights";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Page() {
  return (
    <>
      <Home />
      <Highlights />
    </>
  );
}
