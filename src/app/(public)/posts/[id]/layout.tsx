import type { Metadata } from "next";


export const metadata: Metadata = { title: "Post Page", description: "Post Page" };

export default function PostLayout({
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