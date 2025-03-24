"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { componentsLibraries, NavMenu } from "./navbar";

import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Logo from "./Logo";

export function SheetLeftbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className=" lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[300px] sm:w-[350px] overflow-y-auto"
      >
        <SheetHeader className="mb-6">
          <SheetTitle className="flex justify-start">
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-6 px-4">
          <div className="flex flex-col gap-2">
            <NavMenu isSheet={true} />
          </div>

          <div className="border-t pt-4">
            <h3 className="text-sm font-medium mb-2">Components</h3>
            <Accordion type="multiple" className="w-full">
              {componentsLibraries.map((category) => (
                <AccordionItem key={category.title} value={category.title}>
                  <AccordionTrigger className="text-sm py-2">
                    <div className="flex items-center">
                      {category.icon}
                      <span>{category.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-2 pl-6 py-2">
                      {category.items.map((item) => (
                        <Link
                          key={item.title}
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-2 pl-2">
              <Link
                href="/components"
                className="text-sm font-medium flex items-center hover:text-foreground transition-colors py-2"
              >
                All Components
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
