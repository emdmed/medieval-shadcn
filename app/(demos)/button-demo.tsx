import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>Summon Action</Button>
      <Button variant="secondary">Forge Item</Button>
      <Button variant="outline">View Details</Button>
      <Button variant="ghost">Dismiss</Button>
      <Button variant="destructive">Banish</Button>
    </div>
  );
}
