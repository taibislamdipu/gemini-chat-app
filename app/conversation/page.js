import LeftSidebar from "@/components/LeftSidebar";
import PromptInput from "@/components/PromptInput";

export default function ChatPage() {
  return (
    <div className="flex h-screen mx-auto bg-white max-h-screen">
      {/* <!-- Left Sidebar --> */}
      <LeftSidebar />

      {/* <!-- Main Chat Area --> */}
      <div className="flex-1 flex flex-col bg-white">
        {/* <!-- Chat Header --> */}
        <div className="px-8 py-4 border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <h1 className="text-lg font-semibold text-gray-800">
                Learning NLP vs LLM
              </h1>
            </div>
            <div className="relative">
              <button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
                onclick="toggleDropdown()"
              >
                <i
                  data-lucide="more-horizontal"
                  className="w-5 h-5 text-gray-500 group-hover:text-gray-700"
                ></i>
              </button>
              {/* <!-- Dropdown Menu --> */}
              <div
                id="conversationDropdown"
                className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 hidden z-20"
              >
                <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                  <i data-lucide="edit" className="w-4 h-4"></i>
                  <span>Rename conversation</span>
                </button>

                <hr className="my-1 opacity-10" />
                <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2">
                  <i data-lucide="trash-2" className="w-4 h-4"></i>
                  <span>Delete conversation</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Chat Content --> */}
        <div className="flex-1 flex flex-col p-8 overflow-y-auto space-y-6">
          {/* <!-- Human Message --> */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              H
            </div>
            <div className="flex-1">
              <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-3xl">
                <p className="text-gray-800">
                  Whats the difference between machine learning and artificial
                  intelligence?
                </p>
              </div>
              <span className="text-xs text-gray-500 mt-1 block">2:34 PM</span>
            </div>
          </div>

          {/* <!-- AI Response --> */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              AI
            </div>
            <div className="flex-1">
              <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 max-w-3xl">
                <p className="text-gray-800 mb-3">
                  Great question! Heres the key difference:
                </p>
                <p className="text-gray-800 mb-3">
                  <strong>Artificial Intelligence (AI)</strong> is the broader
                  concept of creating machines that can perform tasks that
                  typically require human intelligence. Its like the umbrella
                  term.
                </p>
                <p className="text-gray-800">
                  <strong>Machine Learning (ML)</strong> is a subset of AI that
                  focuses on algorithms that can learn and improve from data
                  without being explicitly programmed for every scenario.
                </p>
              </div>
              <span className="text-xs text-gray-500 mt-1 block">2:35 PM</span>
            </div>
          </div>

          {/* <!-- Human Follow-up --> */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              H
            </div>
            <div className="flex-1">
              <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-3xl">
                <p className="text-gray-800">
                  Can you give me some practical examples of each?
                </p>
              </div>
              <span className="text-xs text-gray-500 mt-1 block">2:36 PM</span>
            </div>
          </div>

          {/* <!-- AI Response with Examples --> */}
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              AI
            </div>
            <div className="flex-1">
              <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 max-w-3xl">
                <p className="text-gray-800 mb-3">
                  Absolutely! Here are some practical examples:
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    🤖 AI Examples (broader applications):
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    <li>Siri, Alexa (voice assistants)</li>
                    <li>Chess-playing computers</li>
                    <li>Autonomous vehicles</li>
                    <li>Chatbots like me!</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    📊 Machine Learning Examples (data-driven learning):
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-2">
                    <li>Netflix movie recommendations</li>
                    <li>Email spam detection</li>
                    <li>Credit card fraud detection</li>
                    <li>Image recognition in photos</li>
                  </ul>
                </div>
              </div>
              <span className="text-xs text-gray-500 mt-1 block">2:37 PM</span>
            </div>
          </div>
        </div>

        <PromptInput />
      </div>
    </div>
  );
}
