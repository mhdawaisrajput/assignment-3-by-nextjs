import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#FBF8CC]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
