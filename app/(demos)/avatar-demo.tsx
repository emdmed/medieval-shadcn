import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <div className="flex gap-4">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="Knight" />
        <AvatarFallback>KN</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>WZ</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AR</AvatarFallback>
      </Avatar>
    </div>
  );
}
