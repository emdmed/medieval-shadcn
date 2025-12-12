import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
            <CardDescription>Your current adventures</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm">Slay the Dragon</p>
            <p className="text-sm">Rescue the Princess</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="inventory">
        <Card>
          <CardHeader>
            <CardTitle>Your Inventory</CardTitle>
            <CardDescription>Items in thy possession</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm">Enchanted Sword</p>
            <p className="text-sm">Health Potion x3</p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="skills">
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
            <CardDescription>Your abilities and powers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm">Swordsmanship: Level 5</p>
            <p className="text-sm">Magic: Level 3</p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
