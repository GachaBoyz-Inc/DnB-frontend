import { Users, LogOut, HelpCircle, Swords } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-6">
        <h1 className="font-display text-xl font-bold tracking-wider text-foreground">
          Darius & Dragons
        </h1>
      </SidebarHeader>

      <SidebarContent className="px-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink 
                to="/" 
                end 
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                activeClassName="bg-primary-200 text-primary-foreground hover:bg-primary-500 hover:text-primary-foreground"
              >
                <Users className="h-5 w-5" />
                <span className="font-medium">Personagens</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink 
                to="/campanhas" 
                end 
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                activeClassName="bg-primary-200 text-primary-foreground hover:bg-primary-500 hover:text-primary-foreground"
              >
                <Swords className="h-5 w-5" />
                <span className="font-medium">Campanhas</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink 
                to="/ajuda" 
                end 
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                activeClassName="bg-primary-200 text-primary-foreground hover:bg-primary-500 hover:text-primary-foreground"
              >
                <HelpCircle className="h-5 w-5" />
                <span className="font-medium">Ajuda</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sidebar-foreground transition-colors hover:bg-destructive/10 hover:text-destructive cursor-pointer">
                <LogOut className="h-5 w-5" />
                <span className="font-medium">Logout</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
