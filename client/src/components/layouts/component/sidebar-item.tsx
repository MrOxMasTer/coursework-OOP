"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { RouteTypes } from "@/components/layouts/component/routes";

const SidebarItem = (props: RouteTypes) => {
  const url = usePathname();
  const { id, path, title, pages } = props;

  return (
    <>
      {pages.length > 0 ? (
        <ul key={id} className="mb-8 flex flex-col gap-2">
          <li className={cn("mx-4 mb-2")}>
            <p className="font-medium text-sm">{title}</p>
          </li>

          {pages.map((page) => (
            <li key={page.id} className="pl-4">
              <Link href={`${path}${page.path}`}>
                <Button
                  variant="link"
                  className={cn(
                    "text-xs px-4 h-8",
                    `${path}${page.path}` === url && "underline font-semibold"
                  )}
                >
                  {page.name}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <Button
          key={id}
          variant="link"
          className={cn(
            "px-4 text-sm mb-4",
            path === url && "underline font-semibold"
          )}
        >
          <Link href={path}>{title}</Link>
        </Button>
      )}
    </>
  );
};

export default SidebarItem;
