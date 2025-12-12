import { Separator } from "@/components/ui/separator";

export function SeparatorDemo() {
  return (
    <div className="w-full max-w-sm space-y-4">
      <div>
        <h4 className="text-sm font-medium">Northern Kingdom</h4>
        <p className="text-sm text-muted-foreground">Land of ice and snow</p>
      </div>
      <Separator />
      <div>
        <h4 className="text-sm font-medium">Southern Kingdom</h4>
        <p className="text-sm text-muted-foreground">Realm of eternal summer</p>
      </div>
      <Separator />
      <div>
        <h4 className="text-sm font-medium">Eastern Kingdom</h4>
        <p className="text-sm text-muted-foreground">Domain of ancient wisdom</p>
      </div>
    </div>
  );
}
