"use client"

import * as React from "react"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  user: {
    name: "Lord Shadcn",
    email: "royal@castle.realm",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Kingdom Overview",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "Royal Affairs",
      url: "#",
      icon: IconListDetails,
    },
    {
      title: "Treasury Records",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "Fiefdoms",
      url: "#",
      icon: IconFolder,
    },
    {
      title: "Court Members",
      url: "#",
      icon: IconUsers,
    },
  ],
  navClouds: [
    {
      title: "Conquests",
      icon: IconCamera,
      isActive: true,
      url: "#",
      items: [
        {
          title: "Active Campaigns",
          url: "#",
        },
        {
          title: "Historical Battles",
          url: "#",
        },
      ],
    },
    {
      title: "Royal Decrees",
      icon: IconFileDescription,
      url: "#",
      items: [
        {
          title: "Active Decrees",
          url: "#",
        },
        {
          title: "Archived",
          url: "#",
        },
      ],
    },
    {
      title: "Scrolls",
      icon: IconFileAi,
      url: "#",
      items: [
        {
          title: "Active Scrolls",
          url: "#",
        },
        {
          title: "Ancient Archives",
          url: "#",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "Royal Settings",
      url: "#",
      icon: IconSettings,
    },
    {
      title: "Summon Advisor",
      url: "#",
      icon: IconHelp,
    },
    {
      title: "Seek Knowledge",
      url: "#",
      icon: IconSearch,
    },
  ],
  documents: [
    {
      name: "Royal Archives",
      url: "#",
      icon: IconDatabase,
    },
    {
      name: "Kingdom Reports",
      url: "#",
      icon: IconReport,
    },
    {
      name: "Scribe Assistant",
      url: "#",
      icon: IconFileWord,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="#">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Kingdom of Acme</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.documents} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
