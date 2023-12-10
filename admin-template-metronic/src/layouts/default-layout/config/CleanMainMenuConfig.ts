import type { MenuItem } from "@/layouts/default-layout/config/types";

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/dashboard",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator"
      }
    ]
  },
  {
    heading: "recruitmentSystem",
    route: "/recruitmentSystem",
    pages: [
      {
        sectionTitle: "users",
        route: "/user",
        keenthemesIcon: "profile-circle",
        sub: [
          {
            heading: "createUser",
            route: "/recruitmentSystem/user/create-user"
          },
          {
            heading: "userList",
            route: "/recruitmentSystem/user/user-list"
          }
        ]
      }
    ]
  }
];

export default MainMenuConfig;
