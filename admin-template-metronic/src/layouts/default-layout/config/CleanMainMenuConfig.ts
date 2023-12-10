import type { MenuItem } from "@/layouts/default-layout/config/types";

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator"
      },
      {
        heading: "users",
        route: "/users",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator"
      }
    ]
  }
];

export default MainMenuConfig;
