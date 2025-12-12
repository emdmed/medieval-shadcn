import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputDemo() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="kingdom">Kingdom Name</Label>
      <Input id="kingdom" placeholder="Enter thy kingdom..." />
    </div>
  );
}
