"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navItems = [
  { href: "/onboarding", label: "Introduction" },
  { href: "/onboarding/tracker", label: "Tracker" },
  { href: "/onboarding/administrator", label: "Administrator" },
];

export function SidePanel() {
  const DesktopNav = () => (
    <nav className="hidden md:block bg-white border-r border-gray-200 h-[calc(100vh-4rem)] w-64 fixed top-16">
      <div className="space-y-1 p-4">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="block">
            <Button variant="ghost" className="w-full justify-start">
              {item.label}
            </Button>
          </Link>
        ))}
      </div>
    </nav>
  );

  const MobileNav = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden fixed top-4 left-4 z-50">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] sm:w-[300px]">
        <nav className="space-y-1 mt-8">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="block">
              <Button variant="ghost" className="w-full justify-start">
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <>
      <DesktopNav />
      <MobileNav />
    </>
  );
}
