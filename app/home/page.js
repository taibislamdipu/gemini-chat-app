import CreateChat from "@/components/CreateChat";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function HomePage() {
  return (
    <div className="flex h-screen mx-auto bg-white max-h-screen">
      {/* <!-- Left Sidebar --> */}
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
              <a
                href="#"
                className="flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer "
              >
                <span className="text-sm text-zinc-300">
                  Learning NLP vs LLM
                </span>
              </a>
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

      {/* <!-- Main Chat Area --> */}
      <div className="flex-1 flex flex-col bg-white">
        {/* <!-- Chat Content --> */}
        <div className="flex-1 flex flex-col items-center justify-center p-8">
          {/* <!-- Avatar --> */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 mb-8 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 opacity-80"></div>
          </div>

          {/* <!-- Greeting --> */}
          <h1 className="text-4xl font-instrument font-semibold text-gray-800 mb-2">
            Hi there
          </h1>
          <h2 className="text-3xl font-instrument font-semibold text-gray-800 mb-6">
            How can I help you today?
          </h2>

          {/* <!-- Description --> */}
          <p className="text-gray-600 text-center max-w-md mb-8 leading-relaxed">
            I'm a professional looking for an AI assistant that helps with their
            workflows, automates routine tasks, and gives valuable insights
            based on real-time data.
          </p>

          {/* <!-- Prompt Suggestions --> */}
          <div className="space-y-3 w-full max-w-2xl">
            <button className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer text-left">
              <i
                data-lucide="zap"
                className="w-5 h-5 text-yellow-500 flex-shrink-0"
              ></i>
              <span className="text-gray-700">
                It looks like you're writing an email, would you like help
                drafting it?
              </span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer text-left">
              <i
                data-lucide="zap"
                className="w-5 h-5 text-yellow-500 flex-shrink-0"
              ></i>
              <span className="text-gray-700">
                Generate a report on customer feedback for the last 3 months.
              </span>
            </button>
            <button className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer text-left">
              <i
                data-lucide="zap"
                className="w-5 h-5 text-yellow-500 flex-shrink-0"
              ></i>
              <span className="text-gray-700">
                Analyze this month's sales performance
              </span>
            </button>
          </div>
        </div>

        {/* <!-- Input Area --> */}
        <div className="p-6 border-t border-gray-200">
          <div className="relative">
            <input
              type="text"
              placeholder="Ask me Anything"
              className="w-full p-4 pr-20 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <i data-lucide="sparkles" className="w-5 h-5 text-purple-500"></i>
            </div>
          </div>
          <div className="flex items-end justify-end mt-3">
            <div className="flex items-end space-x-4">
              <span className="text-sm text-gray-500">0/1000</span>
              <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors cursor-pointer">
                <span className="text-sm">Send</span>
                <i data-lucide="arrow-right" className="w-4 h-4"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
