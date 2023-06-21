interface MenuConfig {
  title?: string;
  path?: string;
}

const menus: MenuConfig[] = [
  { title: "首页", path: "/" },
  { title: "热点", path: "/hot" },
];

export default menus;
