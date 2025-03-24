import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.05] py-16 md:py-24">
      <div className="container flex flex-col items-center text-center">
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Build{" "}
          <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            commerce
          </span>{" "}
          sites and apps <span className="italic">faster</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Copy-paste components <span className="text-foreground/80">and blocks</span> that you can use in your next{" "}
          <span className="text-foreground">e-commerce project</span>.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button size="lg" className="h-11 px-8">
            Get Started
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
          <Button size="lg" variant="outline" className="h-11 px-8 bg-background/50">
            Browse Components
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-2 h-4 w-4"
            >
              <path
                d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          100% free and <span className="font-medium text-foreground">Open Source</span>
        </p>

        <div className="mt-12 flex items-center justify-center gap-6">
          <div className="flex items-center justify-center rounded-full bg-background/80 p-2 shadow-md">
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 13.5C14.2091 13.5 16 11.7091 16 9.5C16 7.29086 14.2091 5.5 12 5.5C9.79086 5.5 8 7.29086 8 9.5C8 11.7091 9.79086 13.5 12 13.5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M2 12H22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex items-center justify-center rounded-full bg-background/80 p-2 shadow-md">
            <svg className="h-8 w-8" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 200V0H400V400H0" fill="#007ACC" />
              <path
                d="M87.7 200.7V217.7H108.7V389.8H148.9V217.7H169.9V200.7H87.7ZM201.1 217.8H241.2V303.4C241.2 316.4 243.1 324.7 246.9 328.3C250.7 331.9 259.5 333.7 273.3 333.7H317.5V217.7H357.7V333.7H398V351.3H256.9C240.9 351.3 230 347.3 224.2 339.3C218.4 331.3 215.5 317.7 215.5 298.5V217.7H201V217.8H201.1Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex items-center justify-center rounded-full bg-background/80 p-2 shadow-md">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 6.036C14.323 6.036 16.617 6.878 18.437 8.437C18.5 8.499 18.563 8.499 18.625 8.437C18.687 8.374 18.687 8.312 18.625 8.249C16.804 6.628 14.448 5.723 12 5.723C9.552 5.723 7.196 6.628 5.375 8.249C5.313 8.312 5.313 8.374 5.375 8.437C5.437 8.499 5.5 8.499 5.563 8.437C7.383 6.878 9.677 6.036 12 6.036Z"
                fill="currentColor"
              />
              <path
                d="M5.563 15.563C7.383 17.122 9.677 17.964 12 17.964C14.323 17.964 16.617 17.122 18.437 15.563C18.5 15.501 18.563 15.501 18.625 15.563C18.687 15.626 18.687 15.688 18.625 15.751C16.804 17.372 14.448 18.277 12 18.277C9.552 18.277 7.196 17.372 5.375 15.751C5.313 15.688 5.313 15.626 5.375 15.563C5.437 15.501 5.5 15.501 5.563 15.563Z"
                fill="currentColor"
              />
              <path
                d="M18.437 12C18.437 11.448 18.063 11.01 17.511 11.01C16.959 11.01 16.584 11.448 16.584 12C16.584 12.552 16.959 12.99 17.511 12.99C18.063 12.99 18.437 12.552 18.437 12Z"
                fill="currentColor"
              />
              <path
                d="M12 3.723C13.761 3.723 15.511 4.191 17.073 5.127C17.136 5.19 17.198 5.19 17.261 5.127C17.323 5.064 17.323 5.001 17.261 4.938C15.636 3.97 13.823 3.473 12 3.473C10.177 3.473 8.364 3.97 6.739 4.938C6.677 5.001 6.677 5.064 6.739 5.127C6.802 5.19 6.864 5.19 6.927 5.127C8.489 4.191 10.239 3.723 12 3.723Z"
                fill="currentColor"
              />
              <path
                d="M6.927 18.873C8.489 19.809 10.239 20.277 12 20.277C13.761 20.277 15.511 19.809 17.073 18.873C17.136 18.81 17.198 18.81 17.261 18.873C17.323 18.936 17.323 18.999 17.261 19.062C15.636 20.03 13.823 20.527 12 20.527C10.177 20.527 8.364 20.03 6.739 19.062C6.677 18.999 6.677 18.936 6.739 18.873C6.802 18.81 6.864 18.81 6.927 18.873Z"
                fill="currentColor"
              />
              <path
                d="M7.416 12C7.416 12.552 7.041 12.99 6.489 12.99C5.937 12.99 5.563 12.552 5.563 12C5.563 11.448 5.937 11.01 6.489 11.01C7.041 11.01 7.416 11.448 7.416 12Z"
                fill="currentColor"
              />
              <path
                d="M12 7.416C12.552 7.416 12.99 7.791 12.99 8.343C12.99 8.895 12.552 9.27 12 9.27C11.448 9.27 11.01 8.895 11.01 8.343C11.01 7.791 11.448 7.416 12 7.416Z"
                fill="currentColor"
              />
              <path
                d="M12 14.73C12.552 14.73 12.99 15.105 12.99 15.657C12.99 16.209 12.552 16.584 12 16.584C11.448 16.584 11.01 16.209 11.01 15.657C11.01 15.105 11.448 14.73 12 14.73Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex items-center justify-center rounded-full bg-background/80 p-2 shadow-md">
            <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L3 7L12 12L21 7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 17L12 22L21 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 12L12 17L21 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="mt-8 inline-flex items-center rounded-full border border-cyan-800/30 bg-cyan-950/30 px-4 py-1.5 text-sm text-cyan-500">
          <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 6.036C14.323 6.036 16.617 6.878 18.437 8.437C18.5 8.499 18.563 8.499 18.625 8.437C18.687 8.374 18.687 8.312 18.625 8.249C16.804 6.628 14.448 5.723 12 5.723C9.552 5.723 7.196 6.628 5.375 8.249C5.313 8.312 5.313 8.374 5.375 8.437C5.437 8.499 5.5 8.499 5.563 8.437C7.383 6.878 9.677 6.036 12 6.036Z"
              fill="currentColor"
            />
            <path
              d="M5.563 15.563C7.383 17.122 9.677 17.964 12 17.964C14.323 17.964 16.617 17.122 18.437 15.563C18.5 15.501 18.563 15.501 18.625 15.563C18.687 15.626 18.687 15.688 18.625 15.751C16.804 17.372 14.448 18.277 12 18.277C9.552 18.277 7.196 17.372 5.375 15.751C5.313 15.688 5.313 15.626 5.375 15.563C5.437 15.501 5.5 15.501 5.563 15.563Z"
              fill="currentColor"
            />
            <path
              d="M18.437 12C18.437 11.448 18.063 11.01 17.511 11.01C16.959 11.01 16.584 11.448 16.584 12C16.584 12.552 16.959 12.99 17.511 12.99C18.063 12.99 18.437 12.552 18.437 12Z"
              fill="currentColor"
            />
            <path
              d="M12 3.723C13.761 3.723 15.511 4.191 17.073 5.127C17.136 5.19 17.198 5.19 17.261 5.127C17.323 5.064 17.323 5.001 17.261 4.938C15.636 3.97 13.823 3.473 12 3.473C10.177 3.473 8.364 3.97 6.739 4.938C6.677 5.001 6.677 5.064 6.739 5.127C6.802 5.19 6.864 5.19 6.927 5.127C8.489 4.191 10.239 3.723 12 3.723Z"
              fill="currentColor"
            />
            <path
              d="M6.927 18.873C8.489 19.809 10.239 20.277 12 20.277C13.761 20.277 15.511 19.809 17.073 18.873C17.136 18.81 17.198 18.81 17.261 18.873C17.323 18.936 17.323 18.999 17.261 19.062C15.636 20.03 13.823 20.527 12 20.527C10.177 20.527 8.364 20.03 6.739 19.062C6.677 18.999 6.677 18.936 6.739 18.873C6.802 18.81 6.864 18.81 6.927 18.873Z"
              fill="currentColor"
            />
            <path
              d="M7.416 12C7.416 12.552 7.041 12.99 6.489 12.99C5.937 12.99 5.563 12.552 5.563 12C5.563 11.448 5.937 11.01 6.489 11.01C7.041 11.01 7.416 11.448 7.416 12Z"
              fill="currentColor"
            />
            <path
              d="M12 7.416C12.552 7.416 12.99 7.791 12.99 8.343C12.99 8.895 12.552 9.27 12 9.27C11.448 9.27 11.01 8.895 11.01 8.343C11.01 7.791 11.448 7.416 12 7.416Z"
              fill="currentColor"
            />
            <path
              d="M12 14.73C12.552 14.73 12.99 15.105 12.99 15.657C12.99 16.209 12.552 16.584 12 16.584C11.448 16.584 11.01 16.209 11.01 15.657C11.01 15.105 11.448 14.73 12 14.73Z"
              fill="currentColor"
            />
          </svg>
          TAILWINDCSS V.4 READY
        </div>
      </div>
    </section>
  )
}

