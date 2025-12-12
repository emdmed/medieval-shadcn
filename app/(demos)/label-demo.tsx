import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function LabelDemo() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="scroll">Scroll Title</Label>
      <Input id="scroll" placeholder="Enter scroll title..." />
    </div>
  );
}
