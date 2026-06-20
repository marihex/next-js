import type { Metadata } from "next";


export const metadata: Metadata = { title: "Users Page", description: "Users Page" };

export default function UsersLayout({
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