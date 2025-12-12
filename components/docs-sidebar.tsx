"use client";

import * as React from "react";
import {
  IconBook,
  IconHome,
  IconPalette,
  IconFileText,
  IconLayoutGrid,
  IconFlame,
  IconSparkles,
} from "@tabler/icons-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "The Scrolls",
      url: "#quick-start",
      icon: IconFileText,
      items: [
        {
          title: "Quick Start",
          url: "#quick-start",
        },
        {
          title: "Installation",
          url: "#installation",
        },
      ],
    },
    {
      title: "The Arsenal",
      url: "#components",
      icon: IconLayoutGrid,
      items: [
        {
          title: "All Components (56)",
          url: "#components",
        },
        {
          title: "Input Elements",
          url: "#components-input",
        },
        {
          title: "Display Components",
          url: "#components-display",
        },
        {
          title: "Navigation",
          url: "#components-navigation",
        },
        {
          title: "Overlays",
          url: "#components-overlay",
        },
      ],
    },
    {
      title: "The Tapestry",
      url: "#themes",
      icon: IconPalette,
      items: [
        {
          title: "All Themes (6)",
          url: "#themes",
        },
        {
          title: "Light Themes",
          url: "#themes-light",
        },
        {
          title: "Dark Themes",
          url: "#themes-dark",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Back to Home",
      url: "/",
      icon: IconHome,
    },
    {
      title: "View Examples",
      url: "#showcase",
      icon: IconSparkles,
    },
    {
      title: "GitHub",
      url: "https://github.com/medieval-ui/medieval-ui",
      icon: IconBook,
    },
  ],
};

export function DocsSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/forge">
                <IconFlame className="!size-5" />
                <span className="text-base font-semibold">Medieval UI Forge</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 text-center text-xs text-muted-foreground">
          <p>Medieval UI v0.0.4</p>
          <p className="mt-1">Built with shadcn/ui</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
