import Link from "next/link";
import Image from "next/image";
import { componentsLibraries } from "@/components/navbar";

export default function ComponentsPage() {
  // Ensure componentsLibraries is an array
  const libraries = Array.isArray(componentsLibraries)
    ? componentsLibraries
    : [];

  return (
    <div className="container py-12 px-4 mx-auto">
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Component Library</h1>
        <p className="text-xl text-muted-foreground">
          Browse our collection of pre-built components to accelerate your
          development workflow.
        </p>
      </div>

      <div className="space-y-16">
        {libraries.map((category, index) => (
          <section
            key={index}
            id={category.title.toLowerCase()}
            className="scroll-mt-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-md text-primary">
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold">
                {category.title} Components
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.isArray(category.items) &&
                category.items.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-all"
                  >
                    <div className="aspect-video bg-muted relative overflow-hidden">
                      <Image
                        src={
                          item.preview ||
                          `/placeholder.svg?height=200&width=400&text=${item.title}`
                        }
                        alt={item.title}
                        width={400}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-lg mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Explore our {item.title.toLowerCase()} collection
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
