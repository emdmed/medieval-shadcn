// Import existing demos
import { AccordionDemo } from "@/app/(demos)/accordion-demo";
import { AlertDialogDemo } from "@/app/(demos)/alert-dialog-demo";
import { BadgeDemo } from "@/app/(demos)/badge-demo";
import { CardDemo } from "@/app/(demos)/card-demo";
import { CheckboxDemo } from "@/app/(demos)/checkbox-demo";
import { DrawerDemo } from "@/app/(demos)/drawer-demo";
import { SliderDemo } from "@/app/(demos)/slider-demo";
import { SwitchDemo } from "@/app/(demos)/switch-demo";

// Import new demos
import { ButtonDemo } from "@/app/(demos)/button-demo";
import { InputDemo } from "@/app/(demos)/input-demo";
import { SelectDemo } from "@/app/(demos)/select-demo";
import { DialogDemo } from "@/app/(demos)/dialog-demo";
import { DropdownMenuDemo } from "@/app/(demos)/dropdown-menu-demo";
import { TabsDemo } from "@/app/(demos)/tabs-demo";
import { TableDemo } from "@/app/(demos)/table-demo";
import { FormDemo } from "@/app/(demos)/form-demo";
import { PopoverDemo } from "@/app/(demos)/popover-demo";
import { TooltipDemo } from "@/app/(demos)/tooltip-demo";
import { SeparatorDemo } from "@/app/(demos)/separator-demo";
import { AvatarDemo } from "@/app/(demos)/avatar-demo";
import { LabelDemo } from "@/app/(demos)/label-demo";
import { TextareaDemo } from "@/app/(demos)/textarea-demo";
import { CommandDemo } from "@/app/(demos)/command-demo";

export interface DemoConfig {
  name: string;
  medievalName: string;
  category: string;
  component: React.ComponentType;
  code: string;
}

export const demoConfigs: DemoConfig[] = [
  // Input Components
  {
    name: "button",
    medievalName: "Command Rune",
    category: "Input",
    component: ButtonDemo,
    code: `import { Button } from "@/components/ui/button";

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
}`,
  },
  {
    name: "input",
    medievalName: "Inscription Field",
    category: "Input",
    component: InputDemo,
    code: `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputDemo() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="kingdom">Kingdom Name</Label>
      <Input id="kingdom" placeholder="Enter thy kingdom..." />
    </div>
  );
}`,
  },
  {
    name: "select",
    medievalName: "Scroll of Options",
    category: "Input",
    component: SelectDemo,
    code: `"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <div className="w-full max-w-sm">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose thy class..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="knight">Knight</SelectItem>
          <SelectItem value="archer">Archer</SelectItem>
          <SelectItem value="wizard">Wizard</SelectItem>
          <SelectItem value="rogue">Rogue</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`,
  },
  {
    name: "checkbox",
    medievalName: "Mark of Choice",
    category: "Input",
    component: CheckboxDemo,
    code: `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}`,
  },
  {
    name: "switch",
    medievalName: "Toggle Lever",
    category: "Input",
    component: SwitchDemo,
    code: `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="ship-mode" />
      <Label htmlFor="ship-mode">Ship Mode</Label>
    </div>
  );
}`,
  },
  {
    name: "slider",
    medievalName: "Value Scribe",
    category: "Input",
    component: SliderDemo,
    code: `import { Slider } from "@/components/ui/slider";

export function SliderDemo() {
  return (
    <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className="w-[60%]"
    />
  );
}`,
  },
  {
    name: "label",
    medievalName: "Inscription Mark",
    category: "Input",
    component: LabelDemo,
    code: `import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function LabelDemo() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="scroll">Scroll Title</Label>
      <Input id="scroll" placeholder="Enter scroll title..." />
    </div>
  );
}`,
  },
  {
    name: "textarea",
    medievalName: "Scroll Field",
    category: "Input",
    component: TextareaDemo,
    code: `import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function TextareaDemo() {
  return (
    <div className="w-full max-w-sm space-y-2">
      <Label htmlFor="message">Scribe's Notes</Label>
      <Textarea
        id="message"
        placeholder="Record thy observations..."
        className="min-h-[100px]"
      />
    </div>
  );
}`,
  },

  // Display Components
  {
    name: "card",
    medievalName: "Parchment",
    category: "Display",
    component: CardDemo,
    code: `import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function CardDemo() {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Royal Announcement</CardTitle>
        <CardDescription>From the crown</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Content goes here...</p>
      </CardContent>
    </Card>
  );
}`,
  },
  {
    name: "badge",
    medievalName: "Seal",
    category: "Display",
    component: BadgeDemo,
    code: `import { Badge } from "@/components/ui/badge";

export function BadgeDemo() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  );
}`,
  },
  {
    name: "accordion",
    medievalName: "Expandable Scroll",
    category: "Display",
    component: AccordionDemo,
    code: `import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Quest Details</AccordionTrigger>
        <AccordionContent>
          Journey to the ancient ruins...
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`,
  },
  {
    name: "separator",
    medievalName: "Dividing Line",
    category: "Display",
    component: SeparatorDemo,
    code: `import { Separator } from "@/components/ui/separator";

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
    </div>
  );
}`,
  },
  {
    name: "avatar",
    medievalName: "Portrait",
    category: "Display",
    component: AvatarDemo,
    code: `import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    </div>
  );
}`,
  },

  // Navigation Components
  {
    name: "tabs",
    medievalName: "Tabbed Scrolls",
    category: "Navigation",
    component: TabsDemo,
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function TabsDemo() {
  return (
    <Tabs defaultValue="quests" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="quests">Quests</TabsTrigger>
        <TabsTrigger value="inventory">Inventory</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
      </TabsList>
      <TabsContent value="quests">
        <Card>
          <CardHeader>
            <CardTitle>Active Quests</CardTitle>
          </CardHeader>
        </Card>
      </TabsContent>
    </Tabs>
  );
}`,
  },

  // Overlay Components
  {
    name: "dialog",
    medievalName: "Modal Chamber",
    category: "Overlay",
    component: DialogDemo,
    code: `"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open Scroll</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Royal Decree</DialogTitle>
          <DialogDescription>
            By order of the crown...
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}`,
  },
  {
    name: "alert-dialog",
    medievalName: "Warning Chamber",
    category: "Overlay",
    component: AlertDialogDemo,
    code: `"use client";

import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Kingdom</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Dost thou TRULY dare proceed?!</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone...
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`,
  },
  {
    name: "drawer",
    medievalName: "Side Chamber",
    category: "Overlay",
    component: DrawerDemo,
    code: `"use client";

import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Chamber</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Quest Goals</DrawerTitle>
          <DrawerDescription>Set thy goals...</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`,
  },
  {
    name: "dropdown-menu",
    medievalName: "Cascade Scroll",
    category: "Overlay",
    component: DropdownMenuDemo,
    code: `"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sword, Shield } from "lucide-react";

export function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Royal Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Kingdom Actions</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Sword className="mr-2 size-4" />
          Raise Army
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Shield className="mr-2 size-4" />
          Fortify Walls
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`,
  },
  {
    name: "popover",
    medievalName: "Floating Parchment",
    category: "Overlay",
    component: PopoverDemo,
    code: `"use client";

import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Info } from "lucide-react";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <Info className="mr-2 size-4" />
          Quest Info
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-2">
          <h4 className="font-medium">Quest Details</h4>
          <p className="text-sm text-muted-foreground">
            Journey to the ancient ruins...
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}`,
  },
  {
    name: "tooltip",
    medievalName: "Whisper Text",
    category: "Overlay",
    component: TooltipDemo,
    code: `import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
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
}`,
  },
  {
    name: "command",
    medievalName: "Command Palette",
    category: "Overlay",
    component: CommandDemo,
    code: `"use client";

import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Sword, Shield } from "lucide-react";

export function CommandDemo() {
  return (
    <Command className="w-full max-w-md rounded-lg border shadow-md">
      <CommandInput placeholder="Search kingdom commands..." />
      <CommandList>
        <CommandEmpty>No commands found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>
            <Sword className="mr-2 size-4" />
            <span>Raise Army</span>
          </CommandItem>
          <CommandItem>
            <Shield className="mr-2 size-4" />
            <span>Fortify Defenses</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`,
  },

  // Form Components
  {
    name: "form",
    medievalName: "Inscription Form",
    category: "Form",
    component: FormDemo,
    code: `"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2),
  kingdom: z.string().min(3),
});

export function FormDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", kingdom: "" },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(() => {})} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Sir Lancelot" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Pledge Allegiance</Button>
      </form>
    </Form>
  );
}`,
  },

  // Data Components
  {
    name: "table",
    medievalName: "Data Ledger",
    category: "Data",
    component: TableDemo,
    code: `import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const knights = [
  { name: "Sir Lancelot", rank: "Champion", quests: 42 },
  { name: "Sir Galahad", rank: "Paladin", quests: 35 },
];

export function TableDemo() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Knight</TableHead>
          <TableHead>Rank</TableHead>
          <TableHead className="text-right">Quests</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {knights.map((knight) => (
          <TableRow key={knight.name}>
            <TableCell>{knight.name}</TableCell>
            <TableCell>{knight.rank}</TableCell>
            <TableCell className="text-right">{knight.quests}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}`,
  },
];

export const demosByCategory = demoConfigs.reduce((acc, demo) => {
  if (!acc[demo.category]) {
    acc[demo.category] = [];
  }
  acc[demo.category].push(demo);
  return acc;
}, {} as Record<string, DemoConfig[]>);
