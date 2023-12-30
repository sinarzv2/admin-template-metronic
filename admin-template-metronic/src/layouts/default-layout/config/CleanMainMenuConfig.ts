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
    route: "/recruitment-system",
    pages: [
      {
        sectionTitle: "users",
        route: "/user",
        keenthemesIcon: "profile-circle",
        sub: [
          {
            heading: "createUser",
            route: "/recruitment-system/user/create-user"
          },
          {
            heading: "userList",
            route: "/recruitment-system/user/user-list"
          }
        ]
      }
    ]
  },
  {
    heading: "systemAffairs",
    route: "/system-affairs",
    pages: [
      {
        sectionTitle: "access",
        route: "/access",
        keenthemesIcon: "pill",
        sub: [
          {
            heading: "roleManagement",
            route: "/system-affairs/access/role-management"
          },
          {
            heading: "createAccess",
            route: "/system-affairs/access/create-access"
          }
        ]
      }
    ]
  }
];

export default MainMenuConfig;
