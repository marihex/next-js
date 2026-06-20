import type { Metadata } from "next";


export const metadata: Metadata = { title: "User Page", description: "User Page" };

export default function UserLayout({
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