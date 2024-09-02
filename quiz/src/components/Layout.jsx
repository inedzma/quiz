import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
      </div>
    </>
  );
}