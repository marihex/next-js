import type { Metadata } from "next";


export const metadata: Metadata = { title: "Comment Page", description: "Comment Page" };

export default function CommentLayout({
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