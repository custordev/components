"use client";

import {
  GithubIcon,
  Youtube,
  ChevronDown,
  ShoppingCart,
  Layout,
  Layers,
  Home,
  Grid,
} from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { SheetClose } from "@/components/ui/sheet";

import Search from "./search";

import Anchor from "./anchor";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import { SheetLeftbar } from "./leftBar";
import Logo from "./Logo";
import { ModeToggle } from "./ModeToggle";

export const NAVLINKS = [
  {
    title: "Templates",
    href: "/templates",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Docs",
    href: "/docs",
  },
];

export const componentsLibraries = [
  {
    title: "Layout",
    icon: <Layout className="h-4 w-4 mr-2" />,
    preview:
      "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1200&h=600&fit=crop",
    items: [
      {
        title: "Headers",
        href: "/components/headers",
        preview:
          "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Footers",
        href: "/components/footers",
        preview:
          "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Sidebars",
        href: "/components/sidebars",
        preview:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Containers",
        href: "/components/containers",
        preview:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Grids",
        href: "/components/grids",
        preview:
          "https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=800&h=400&fit=crop",
      },
    ],
  },
  {
    title: "Sections",
    icon: <Layers className="h-4 w-4 mr-2" />,
    preview:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&h=600&fit=crop",
    items: [
      {
        title: "Hero Sections",
        href: "/components/hero-sections",
        preview:
          "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Feature Sections",
        href: "/components/feature-sections",
        preview:
          "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "CTA Sections",
        href: "/components/cta-sections",
        preview:
          "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Pricing Sections",
        href: "/components/pricing-sections",
        preview:
          "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Testimonial Sections",
        href: "/components/testimonial-sections",
        preview:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&h=400&fit=crop",
      },
    ],
  },
  {
    title: "E-commerce",
    icon: <ShoppingCart className="h-4 w-4 mr-2" />,
    preview:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&h=600&fit=crop",
    items: [
      {
        title: "Product Cards",
        href: "/components/product-cards",
        preview:
          "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Cart Sections",
        href: "/components/cart-sections",
        preview:
          "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Checkout Forms",
        href: "/components/checkout-forms",
        preview:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Product Galleries",
        href: "/components/product-galleries",
        preview:
          "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Product Reviews",
        href: "/components/product-reviews",
        preview:
          "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800&h=400&fit=crop",
      },
    ],
  },
  {
    title: "UI Elements",
    icon: <Grid className="h-4 w-4 mr-2" />,
    preview:
      "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=1200&h=600&fit=crop",
    items: [
      {
        title: "Buttons",
        href: "/components/buttons",
        preview:
          "https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Cards",
        href: "/components/cards",
        preview:
          "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Forms",
        href: "/components/forms",
        preview:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Modals",
        href: "/components/modals",
        preview:
          "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Alerts",
        href: "/components/alerts",
        preview:
          "https://images.unsplash.com/photo-1495592822108-9e6261896da8?q=80&w=800&h=400&fit=crop",
      },
    ],
  },
  {
    title: "Page Examples",
    icon: <Home className="h-4 w-4 mr-2" />,
    preview:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&h=600&fit=crop",
    items: [
      {
        title: "Landing Pages",
        href: "/components/landing-pages",
        preview:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "About Pages",
        href: "/components/about-pages",
        preview:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Contact Pages",
        href: "/components/contact-pages",
        preview:
          "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Auth Pages",
        href: "/components/auth-pages",
        preview:
          "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=800&h=400&fit=crop",
      },
      {
        title: "Dashboard Pages",
        href: "/components/dashboard-pages",
        preview:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=400&fit=crop",
      },
    ],
  },
];

// export const componentsLibraries = [
//   {
//     title: "Layout",
//     icon: <Layout className="h-4 w-4 mr-2" />,
//     preview: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=1200&h=600&fit=crop",
//     items: [
//       {
//         title: "Headers",
//         href: "/components/headers",
//         preview: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Footers",
//         href: "/components/footers",
//         preview: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Sidebars",
//         href: "/components/sidebars",
//         preview: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Containers",
//         href: "/components/containers",
//         preview: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Grids",
//         href: "/components/grids",
//         preview: "https://images.unsplash.com/photo-1465447142348-e9952c393450?q=80&w=800&h=400&fit=crop"
//       },
//     ],
//   },
//   {
//     title: "Sections",
//     icon: <Layers className="h-4 w-4 mr-2" />,
//     preview: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1200&h=600&fit=crop",
//     items: [
//       {
//         title: "Hero Sections",
//         href: "/components/hero-sections",
//         preview: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Feature Sections",
//         href: "/components/feature-sections",
//         preview: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "CTA Sections",
//         href: "/components/cta-sections",
//         preview: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Pricing Sections",
//         href: "/components/pricing-sections",
//         preview: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Testimonial Sections",
//         href: "/components/testimonial-sections",
//         preview: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=800&h=400&fit=crop"
//       },
//     ],
//   },
//   {
//     title: "E-commerce",
//     icon: <ShoppingCart className="h-4 w-4 mr-2" />,
//     preview: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&h=600&fit=crop",
//     items: [
//       {
//         title: "Product Cards",
//         href: "/components/product-cards",
//         preview: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Cart Sections",
//         href: "/components/cart-sections",
//         preview: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Checkout Forms",
//         href: "/components/checkout-forms",
//         preview: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Product Galleries",
//         href: "/components/product-galleries",
//         preview: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Product Reviews",
//         href: "/components/product-reviews",
//         preview: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=800&h=400&fit=crop"
//       },
//     ],
//   },
//   {
//     title: "UI Elements",
//     icon: <Grid className="h-4 w-4 mr-2" />,
//     preview: "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=1200&h=600&fit=crop",
//     items: [
//       {
//         title: "Buttons",
//         href: "/components/buttons",
//         preview: "https://images.unsplash.com/photo-1537884944318-390069bb8665?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Cards",
//         href: "/components/cards",
//         preview: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Forms",
//         href: "/components/forms",
//         preview: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Modals",
//         href: "/components/modals",
//         preview: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Alerts",
//         href: "/components/alerts",
//         preview: "https://images.unsplash.com/photo-1495592822108-9e6261896da8?q=80&w=800&h=400&fit=crop"
//       },
//     ],
//   },
//   {
//     title: "Page Examples",
//     icon: <Home className="h-4 w-4 mr-2" />,
//     preview: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&h=600&fit=crop",
//     items: [
//       {
//         title: "Landing Pages",
//         href: "/components/landing-pages",
//         preview: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "About Pages",
//         href: "/components/about-pages",
//         preview: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Contact Pages",
//         href: "/components/contact-pages",
//         preview: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Auth Pages",
//         href: "/components/auth-pages",
//         preview: "https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=800&h=400&fit=crop"
//       },
//       {
//         title: "Dashboard Pages",
//         href: "/components/dashboard-pages",
//         preview: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&h=400&fit=crop"
//       },
//     ],
//   },
// ]

export function Navbar() {
  const [isComponentsOpen, setIsComponentsOpen] = useState(false);

  return (
    <nav className="w-full  px-4 border-b h-16 sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center justify-between md:gap-2">
        <div className="flex items-center gap-5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="sm:flex hidden">
              <Logo />
            </div>
            <div className="lg:flex hidden items-center gap-6 text-sm font-medium text-muted-foreground">
              <NavMenu />

              <DropdownMenu
                open={isComponentsOpen}
                onOpenChange={setIsComponentsOpen}
              >
                <DropdownMenuTrigger className="flex items-center gap-1 outline-none text-muted-foreground hover:text-foreground transition-colors">
                  Components
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${
                      isComponentsOpen ? "rotate-180" : ""
                    }`}
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-[220px] p-2">
                  {componentsLibraries.map((category) => (
                    <DropdownMenuSub key={category.title}>
                      <DropdownMenuSubTrigger className="flex items-center">
                        {category.icon}
                        <span>{category.title}</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent className="min-w-[180px]">
                          {category.items.map((item) => (
                            <DropdownMenuItem key={item.title} asChild>
                              <Link href={item.href} className="cursor-pointer">
                                {item.title}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link
                      href="/components"
                      className="flex items-center cursor-pointer font-medium"
                    >
                      <Grid className="h-4 w-4 mr-2" />
                      All Components
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Search />
            <div className="flex ml-2.5 sm:ml-0">
              <Link
                href="https://github.com/custordev/custor-components.git"
                className={buttonVariants({ variant: "ghost", size: "icon" })}
              >
                <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <Link
                href="https://www.youtube.com/@custorDev"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <Youtube className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className="flex px-4 items-center gap-1 dark:text-stone-300/85 text-stone-800 hover:text-foreground transition-colors"
            href={item.href as string}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}

//   <div className="flex ml-2.5 sm:ml-0">
//               <Link
//                 href="https://github.com/custordev/custor-components.git"
//                 className={buttonVariants({ variant: "ghost", size: "icon" })}
//               >
//                 <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
//               </Link>
//               <Link
//                 href="https://www.youtube.com/@custorDev"
//                 className={buttonVariants({
//                   variant: "ghost",
//                   size: "icon",
//                 })}
//               >
//                 <Youtube className="h-[1.1rem] w-[1.1rem]" />
//               </Link>
//               <ModeToggle />
//             </div>
