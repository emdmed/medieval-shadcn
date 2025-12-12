import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sword } from "lucide-react";

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon">
            <Sword className="size-4" />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Wield thy sword in battle</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
