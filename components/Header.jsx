import Link from "next/link";

export default function Header() {
  return (
    <Link href="/">
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <span className="font-semibold text-sm">CognitionX</span>
        </div>
      </div>
    </Link>
  );
}
