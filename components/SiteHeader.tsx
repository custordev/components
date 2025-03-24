import Link from "next/link"
import { Search, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./ModeToggle"


export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500"></div>
              <span className="font-bold text-foreground">commerce-ui</span>
              <span className="rounded-md bg-muted px-1.5 py-0.5 text-xs font-medium text-muted-foreground">beta</span>
            </div>
          </Link>
        </div>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/docs" className="text-foreground/60 transition-colors hover:text-foreground">
            Docs
          </Link>
          <Link href="/blog" className="text-foreground/60 transition-colors hover:text-foreground">
            Blog
          </Link>
          <Link href="/full-stack" className="text-cyan-500 transition-colors hover:text-cyan-400">
            Go full-stack
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Button
            variant="outline"
            className="h-8 gap-1 rounded-md border border-input bg-background px-3 text-muted-foreground"
            asChild
          >
            <Link href="/api">
              Commerce API
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.7761 3 12 3.22386 12 3.5L12 9C12 9.27614 11.7761 9.5 11.5 9.5C11.2239 9.5 11 9.27614 11 9L11 4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </Button>
          <div className="flex w-full items-center space-x-2">
            <div className="relative flex items-center text-muted-foreground">
              <Search className="absolute left-2.5 h-4 w-4" />
              <input
                type="search"
                placeholder="Search"
                className="flex h-8 w-[200px] rounded-md border border-input bg-background pl-8 pr-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <kbd className="pointer-events-none absolute right-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">Ctrl</span> K
              </kbd>
            </div>
            <ModeToggle />
            <Link href="https://github.com" className="text-foreground/60 transition-colors hover:text-foreground">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

