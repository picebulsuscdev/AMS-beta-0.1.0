import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/web/96.png"
              alt="PICE BulSU-SC Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="text-center">
              <h1 className="text-xl font-bold text-primary">PICE BulSU-SC</h1>
              <h2 className="text-sm text-muted-foreground">
                Attendance Monitoring System
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
