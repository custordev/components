"use client";

import {
  ArrowRight,
  Code,
  Sparkles,
  CheckCircle,
  Layers,
  Palette,
  Compass,
  Cpu,
} from "lucide-react";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { componentsLibraries } from "@/components/navbar";

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

// const glowVariants = {
//   initial: { opacity: 0.5 },
//   animate: {
//     opacity: [0.5, 1, 0.5],
//     transition: {
//       duration: 2,
//       repeat: Number.POSITIVE_INFINITY,
//       ease: "easeInOut",
//     },
//   },
// };

const featureItems = [
  {
    icon: <Layers className="h-5 w-5 text-emerald-500" />,
    title: "Modular Components",
    description:
      "Mix and match components to create unique layouts for your projects.",
  },
  {
    icon: <Palette className="h-5 w-5 text-emerald-500" />,
    title: "Customizable Themes",
    description:
      "Easily adapt the design to match your brand with our theming system.",
  },
  {
    icon: <Code className="h-5 w-5 text-emerald-500" />,
    title: "Clean Code",
    description:
      "Well-structured, documented code that's easy to understand and modify.",
  },
  {
    icon: <Compass className="h-5 w-5 text-emerald-500" />,
    title: "Responsive Design",
    description:
      "Components that look great on all devices, from mobile to desktop.",
  },
  {
    icon: <Cpu className="h-5 w-5 text-emerald-500" />,
    title: "Performance Optimized",
    description: "Built with performance in mind to ensure fast loading times.",
  },
  {
    icon: <CheckCircle className="h-5 w-5 text-emerald-500" />,
    title: "Accessibility First",
    description:
      "Designed with accessibility in mind to ensure everyone can use your site.",
  },
];

export default function Page() {
  const controls = useAnimation();
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    controls.start("visible");

    const interval = setInterval(() => {
      setActiveCategory((prev) => (prev + 1) % componentsLibraries.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <div className="flex min-h-screen flex-col bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-70"></div>

        {/* Gradient Orbs */}
        <motion.div
          initial={{ opacity: 0.4 }}
          animate={{ opacity: 0.7 }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="absolute top-20 right-[10%] w-[300px] h-[300px] rounded-full bg-primary/20 blur-[100px]"
        />
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.6 }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute bottom-20 left-[5%] w-[250px] h-[250px] rounded-full bg-teal-400/20 blur-[100px]"
        />

        {/* Content */}
        <div className="container relative z-10 px-4 mx-auto">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-primary">
                Components for Next.js
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Build beautiful interfaces with{" "}
              <span className="text-gradient-primary">reusable components</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
            >
              A comprehensive library of UI components built with React,
              Tailwind CSS, and TypeScript. Perfect for creating modern,
              responsive web applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button asChild size="lg" className="px-8 gap-2">
                <Link href="/">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="px-8 gap-2"
              >
                <Link href="/components">
                  Browse Components
                  <Code className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            {/* Component Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl border border-border/50"
            >
              <div className="absolute top-0 left-0 right-0 h-10 bg-muted flex items-center px-4 border-b border-border/50">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                  {componentsLibraries[activeCategory].title} Components
                </div>
              </div>
              <div className="pt-10 bg-card">
                <Image
                  src={componentsLibraries[activeCategory].preview}
                  width={1000}
                  height={500}
                  alt="Component Preview"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Components?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Designed to help you build better applications faster, with less
              code and more flexibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featureItems.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-muted rounded-md">{feature.icon}</div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Component Categories Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Component Categories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our extensive collection of components organized by
              category.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {componentsLibraries.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-md text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-medium">{category.title}</h3>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {category.items.slice(0, 3).map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <CheckCircle className="h-4 w-4 text-primary" />
                        {item.title}
                      </li>
                    ))}
                    {category.items.length > 3 && (
                      <li className="text-muted-foreground text-sm">
                        + {category.items.length - 3} more
                      </li>
                    )}
                  </ul>

                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/components#${category.title.toLowerCase()}`}>
                      View All {category.title} Components
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to build your next project?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Get started with our component library today and build
                beautiful, responsive interfaces in no time.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="px-8">
                  <Link href="/components">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="px-8">
                  <Link href="/docs">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-teal-500/20 rounded-lg blur-lg"></div>
                <div className="relative bg-card border border-border rounded-lg p-6">
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="bg-muted rounded-md h-24 flex items-center justify-center"
                      >
                        <Layers className="h-8 w-8 text-primary/40" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
