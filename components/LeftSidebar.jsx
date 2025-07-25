import Link from "next/link";
import CreateChat from "./CreateChat";
import Footer from "./Footer";
import Header from "./Header";

export default function LeftSidebar() {
  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col">
      <Header />

      {/* <!-- Navigation Menu --> */}
      <nav className="flex-1 p-4 space-y-2  overflow-y-auto">
        <CreateChat />

        {/* <!-- Conversations --> */}
        <div className="pt-4 ">
          <span className="text-gray-500 text-xs uppercase font-semibold">
            Conversations
          </span>
          <div className="space-y-1  mt-3">
            <Link
              href="/conversation"
              className="flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer "
            >
              <span className="text-sm text-zinc-300">Learning NLP vs LLM</span>
            </Link>
            <a
              href="#"
              className="flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer "
            >
              <span className="text-sm text-zinc-300">
                Microservice Data Orchestration
              </span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer "
            >
              <span className="text-sm text-zinc-300">
                Deep Cloning Alternatives
              </span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer "
            >
              <span className="text-sm text-zinc-300">
                AI Database Diagram Generation
              </span>
            </a>
          </div>
        </div>
      </nav>

      <Footer />
    </div>
  );
}
