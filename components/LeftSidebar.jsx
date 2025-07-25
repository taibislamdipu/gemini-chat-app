import ConversationList from "./ConversationList";
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
        <ConversationList />
      </nav>

      <Footer />
    </div>
  );
}
