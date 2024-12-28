import { nanoid } from "nanoid";

export interface RouteTypes {
  id: string;
  path: string;
  title: string;
  pages: { id: string; name: string; path: string }[];
}

const routes: RouteTypes[] = [
  {
    id: nanoid(),
    title: "Introduction",
    path: "/components",
    pages: [],
  },
  {
    id: nanoid(),
    title: "Layout Components",
    path: "/components/layout",
    pages: [
      { id: nanoid(), path: "/landing", name: "Landing" },
      { id: nanoid(), path: "/dashboard", name: "Dashboard" },
    ],
  },
  {
    id: nanoid(),
    title: "Landing Components",
    path: "/components/landing",
    pages: [
      { id: nanoid(), path: "/crm", name: "CRM" },
      { id: nanoid(), path: "/faqs", name: "FAQs" },
      { id: nanoid(), path: "/career", name: "Career" },
      { id: nanoid(), path: "/pricing", name: "Pricing" },
      { id: nanoid(), path: "/about-us", name: "About Us" },
      { id: nanoid(), path: "/new-intro", name: "New Intro" },
      { id: nanoid(), path: "/contact-us", name: "Contact Us" },
      { id: nanoid(), path: "/ai-content", name: "AI Content" },
      { id: nanoid(), path: "/management", name: "Management" },
    ],
  },
  {
    id: nanoid(),
    title: "Dashboard Components",
    path: "/components/dashboard",
    pages: [
      { id: nanoid(), name: "Dashboard V1", path: "/dashboard-v1" },
      { id: nanoid(), name: "Dashboard V2", path: "/dashboard-v2" },
      { id: nanoid(), name: "Dashboard V3", path: "/dashboard-v3" },
      { id: nanoid(), name: "Dashboard V4", path: "/dashboard-v4" },
      { id: nanoid(), name: "Dashboard V5", path: "/dashboard-v5" },
      { id: nanoid(), name: "CRM", path: "/crm" },
      { id: nanoid(), name: "Analytics", path: "/analytics" },
      { id: nanoid(), name: "Finance 1", path: "/finance-1" },
      { id: nanoid(), name: "Finance 2", path: "/finance-2" },
      { id: nanoid(), name: "E-commerce", path: "/ecommerce" },
      { id: nanoid(), name: "Management", path: "/management" },
      { id: nanoid(), name: "Logistics", path: "/logistics" },
      { id: nanoid(), name: "Marketing", path: "/marketing" },
    ],
  },
];

export default routes;
