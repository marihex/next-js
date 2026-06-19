import type { Metadata } from "next";


export const metadata: Metadata = { title: "About page" };

export default function AboutLayout({
                                      children,
                                    }: Readonly<{
  children: React.ReactNode;
}>) {
  return (

      <div className="min-h-full flex flex-col">
        {children}
      </div>
  );
}