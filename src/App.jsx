import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Feed from "./components/organisms/Feed";
import Profile from "./components/Profile";
import Scrollbar from "./components/Scrollbar";
import { MainContextProvider } from "./context/MainContext";

export default function App() {
  return (
    <>
      <div className="container mx-auto lg:max-w-[724px] dark:text-[#f8f9fb]">
        <MainContextProvider>
          <Navbar />
          <Profile />
          <Scrollbar />
          <Feed />
          <Footer />
        </MainContextProvider>
      </div>
    </>
  );
}
