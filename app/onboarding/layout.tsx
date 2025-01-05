import { Header } from "../components/header";
import { SidePanel } from "../components/side-panel";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex">
        <SidePanel />
        <main className="flex-1 p-8 overflow-y-auto docs-content md:ml-64 mt-16">
          <div className="max-w-3xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
