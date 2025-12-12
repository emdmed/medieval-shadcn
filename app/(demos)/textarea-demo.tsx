import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function TextareaDemo() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="message">Scribe&apos;s Notes</Label>
      <Textarea
        id="message"
        placeholder="Record thy observations..."
        className="min-h-[100px]"
      />
    </div>
  );
}
