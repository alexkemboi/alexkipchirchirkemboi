import type { Metadata } from "next";
import Articles from "@/components/Articles";

export const metadata: Metadata = {
  title: "Writing",
  description: "Notes on servers, microservices, scaling, software architecture, idempotency, Git, DevOps, CI/CD and testing by Alex Kemboi.",
  alternates: { canonical: "/articles" },
};

export default function Page() {
  return <Articles />;
}
