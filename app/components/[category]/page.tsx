import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { componentsLibraries } from "@/components/navbar";

export function generateStaticParams() {
  return componentsLibraries.flatMap((category) =>
    category.items.map((item) => ({
      category: item.href.split("/").pop(),
    }))
  );
}

export default async function ComponentCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  // Find the category and its items
  const categorySlug = (await params).category;

  // Find the matching category item
  const allItems = componentsLibraries.flatMap((category) => category.items);
  const categoryItem = allItems.find((item) =>
    item.href.endsWith(categorySlug)
  );

  if (!categoryItem) {
    return notFound();
  }

  // Find the parent category
  const parentCategory = componentsLibraries.find((category) =>
    category.items.some((item) => item.href.endsWith(categorySlug))
  );

  // Generate some mock components for this category
  const mockComponents = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `${categoryItem.title.slice(0, -1)} ${i + 1}`,
    description: `A beautiful ${categoryItem.title.toLowerCase()} component for your next project.`,
    image: `/placeholder.svg?height=300&width=600&text=${categoryItem.title} ${
      i + 1
    }`,
  }));

  return (
    <div className="container py-12 px-4 mx-auto">
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Link
            href="/components"
            className="hover:text-foreground transition-colors"
          >
            Components
          </Link>
          <span>/</span>
          {parentCategory && (
            <>
              <span className="text-foreground">{parentCategory.title}</span>
              <span>/</span>
            </>
          )}
          <span className="text-foreground">{categoryItem.title}</span>
        </div>

        <h1 className="text-4xl font-bold mb-4">{categoryItem.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          Browse our collection of {categoryItem.title.toLowerCase()} to enhance
          your application&#39;s user interface.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mockComponents.map((component) => (
          <div
            key={component.id}
            className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md transition-all"
          >
            <div className="aspect-video bg-muted relative overflow-hidden">
              <Image
                src={component.image || "/placeholder.svg"}
                alt={component.title}
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="font-medium text-xl mb-2">{component.title}</h3>
              <p className="text-muted-foreground mb-4">
                {component.description}
              </p>
              <div className="flex gap-3">
                <Button size="sm">Preview</Button>
                <Button variant="outline" size="sm">
                  Copy Code
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
