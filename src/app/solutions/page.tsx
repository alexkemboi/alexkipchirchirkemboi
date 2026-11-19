import type { Metadata } from "next";
import Solutions from "@/components/Solutions";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "ERP, CRM, point of sale and business intelligence applications designed and built by Alex Kemboi.",
  alternates: { canonical: "/solutions" },
};

export default function Page() {
  return <Solutions />;
}
