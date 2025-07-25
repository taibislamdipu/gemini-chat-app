import Link from "next/link";
import { IoChatbubbleOutline } from "react-icons/io5";

export default function CreateChat() {
  return (
    <div className="space-y-1">
      <Link
        href="/"
        className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
      >
        <IoChatbubbleOutline className="w-4 h-4" />
        <span className="text-sm">Create Chat</span>
      </Link>
    </div>
  );
}
