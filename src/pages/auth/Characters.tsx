import { SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { CharacterList } from "@/components/CharacterList";

const Index = () => {
  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center border-b border-border px-4 lg:hidden">
          <SidebarTrigger />
        </header>
        <CharacterList />
      </div>
    </div>
  );
};

export default Index;