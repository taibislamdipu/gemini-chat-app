import Link from "next/link";

export default function ConversationList() {
  return (
    <div className="pt-4 ">
      <span className="text-gray-500 text-xs uppercase font-semibold">
        Conversations
      </span>
      <div className="space-y-1  mt-3">
        <Link
          href="/conversation/1"
          className="flex items-center space-x-3 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer "
        >
          <span className="text-sm text-zinc-300">Learning NLP vs LLM</span>
        </Link>
      </div>
    </div>
  );
}
