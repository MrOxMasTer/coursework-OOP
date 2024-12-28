import Link from "next/link";
import ShadcnKit from "@/components/icons/shadcn-kit";
import { ScrollArea } from "@/components/ui/scroll-area";
import routes from "@/components/layouts/component/routes";
import SidebarItem from "@/components/layouts/component/sidebar-item";

const SidebarDesktop = () => {
  return (
    <section className="hidden md:block inset-0 z-50 h-full w-full transition-all duration-300 relative max-w-[300px]">
      <ScrollArea className="bg-background w-[300px] overflow-x-hidden transition-all duration-300 absolute top-0 left-0 h-full border border-r border-border shadow">
        <Link href="/" className="flex items-center gap-4 py-6 px-8">
          <ShadcnKit />
        </Link>

        <div className="m-4">
          {routes.map((route) => {
            return <SidebarItem key={route.id} {...route} />;
          })}
        </div>
      </ScrollArea>
    </section>
  );
};

export default SidebarDesktop;
