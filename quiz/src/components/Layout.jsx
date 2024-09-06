import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
    <div className="flex flex-col min-h-screen bg-cover" style={{backgroundImage: `url(/src/assets/background.avif)`, opacity: `20`}} >
    <div className="flex flex-col min-h-screen absolute inset-0 bg-black bg-opacity-50 filter backdrop-blur-sm">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      </div>
      </div>
    </>
  );
}