import Link from "next/link";
import { Layers } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="flex items-center justify-center size-8 rounded-md bg-gradient-to-br from-teal-400 to-emerald-600">
        <Layers className="h-4 w-4 text-white" />
      </div>
      <span className="font-bold text-xl">VCourse</span>
    </Link>
  );
}
