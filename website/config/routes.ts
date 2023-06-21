export interface RouteConfig {
  path?: string;
  component?: string;
  routes?: RouteConfig[];
}

const routes: RouteConfig[] = [
  { path: "/", component: "Home" },
  { path: "/hot", component: "Hot" },
  { path: "/article", component: "Article" },
];

export default routes;
