import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-[hsl(222.2,84%,4.9%)] mt-4">
        Made with 💗 by{" "}
        <a
          href="https://github.com/Saurabh-git-hub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Saurabh
        </a>
      </div>
      {/* <div className="p-10 text-center bg-[hsl(222.2,84%,4.9%)] mt-4">
        Made with 💗 by Saurabh
      </div> */}
      {/* <div className="p-10 text-center bg-gray-800 mt-10"> */}
    </div>
  );
};

export default AppLayout;
