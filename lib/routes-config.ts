// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Fullstack Templates",
    href: "/site-templates",
    noLink: true,
    items: [
      {
        title: "Medical App",
        href: "/medical-app",
      },

      // {
      //   title: "Components",
      //   href: "/components",
      //   items: [
      //     { title: "Stepper", href: "/stepper" },
      //     { title: "Tabs", href: "/tabs" },
      //     { title: "Note", href: "/note" },
      //     { title: "Code Block", href: "/code-block" },
      //     { title: "Image & Link", href: "/image-link" },
      //     { title: "Custom", href: "/custom" },
      //   ],
      // },
      // { title: "Themes", href: "/themes" },
      // {
      //   title: "Customize",
      //   href: "/customize",
      // },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
