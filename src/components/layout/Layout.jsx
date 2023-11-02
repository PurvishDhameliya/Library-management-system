import Footer from "./Footer";
import Header from "./Header";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <main className="flex-1 container mx-auto ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
