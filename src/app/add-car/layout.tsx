import type { Metadata } from "next";


export const metadata: Metadata = { title: "Add new Car", description: "" };

export default function AddCarLayout({
                                      children,
                                    }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        {children}
      </div>
  );
}