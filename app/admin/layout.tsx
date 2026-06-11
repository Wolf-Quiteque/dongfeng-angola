import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administração CMS - Dongfeng Angola",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return children;
}
