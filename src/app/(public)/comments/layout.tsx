import type { Metadata } from "next";


export const metadata: Metadata = { title: "Comments Page", description: "Comments page" };

export default function CommentsLayout({
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