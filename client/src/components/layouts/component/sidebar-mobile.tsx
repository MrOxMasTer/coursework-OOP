"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAppContext } from "@/hooks/useAppContext";
import LeftArrow from "@/components/icons/left-arrow";
import ShadcnKit from "@/components/icons/shadcn-kit";
import { setMobileSidenav } from "@/context/app-context";
import { ScrollArea } from "@/components/ui/scroll-area";
import routes from "@/components/layouts/component/routes";
import SidebarItem from "@/components/layouts/component/sidebar-item";

const MobileSidebar = () => {
  const [state, dispatch] = useAppContext();
  const { mobileSidenav } = state;

  return (
    <section className="block md:hidden max-w-[0px] inset-0 z-50 h-full w-full transition-all duration-300 relative">
      <div
        className={cn(
          "bg-background overflow-x-hidden transition-all duration-300 absolute top-0 left-0 h-full border border-r border-border shadow",
          mobileSidenav ? "w-[280px]" : "w-0"
        )}
      >
        <div className="py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-4 pl-6">
            <ShadcnKit />
          </Link>

          <Button
            size="icon"
            variant="outline"
            className="bg-gray-200 hover:bg-gray-200 active:bg-gray-200 w-6 h-9 text-gray-500 rounded-r-none"
            onClick={() => setMobileSidenav(dispatch, !mobileSidenav)}
          >
            <LeftArrow />
          </Button>
        </div>

        <ScrollArea style={{ height: "calc(100vh - 86px)" }}>
          <div className="m-4">
            {routes.map((route) => {
              return <SidebarItem key={route.id} {...route} />;
            })}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default MobileSidebar;
