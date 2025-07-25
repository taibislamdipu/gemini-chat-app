export default function CreateChat() {
  return (
    <div className="space-y-1">
      <a
        href="#"
        className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
      >
        <i data-lucide="message-circle" className="w-4 h-4"></i>
        <span className="text-sm">Create Chat</span>
      </a>
    </div>
  );
}
