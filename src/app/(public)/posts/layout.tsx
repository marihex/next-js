import type { Metadata } from "next";


export const metadata: Metadata = { title: "Posts Page", description: "Posts Page" };

export default function PostsLayout({
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