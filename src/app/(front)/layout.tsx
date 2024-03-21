import NavBar from "@/components/front/NavBar";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      
        <div >
            <NavBar/>
            
            {children}
        </div>
      
    );
  }
  