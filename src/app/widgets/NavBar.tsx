import { Dock, DockIcon } from "@/components/magicui/dock";
import { HouseIcon, UserIcon, BriefcaseBusinessIcon } from "lucide-react";

export default function NavBar() {
  return (
    <Dock className="fixed top-0 flex flex-row h-16 gap-16 p-8 overflow-hidden -translate-x-1/2 rounded-full shadow-sm left-1/2 z-90 bg-background shadow-foreground">
      <DockIcon className="p-8 duration-300 ease-in-out rounded-full shadow-sm shadow-foreground bg-lust hover:scale-125 hover:shadow-lg">
        <HouseIcon className="text-foreground" />
      </DockIcon>
      <DockIcon className="p-8 duration-300 ease-in-out rounded-full shadow-sm shadow-foreground bg-gluttony hover:scale-125 hover:shadow-lg">
        <UserIcon className="text-sloth" />
      </DockIcon>
      <DockIcon className="p-8 duration-300 ease-in-out rounded-full shadow-sm shadow-foreground bg-greed hover:scale-125 hover:shadow-lg">
        <BriefcaseBusinessIcon className="text-background" />
      </DockIcon>
    </Dock>
  );
}
