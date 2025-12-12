import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const knights = [
  { name: "Sir Lancelot", rank: "Champion", quests: 42 },
  { name: "Sir Galahad", rank: "Paladin", quests: 35 },
  { name: "Sir Percival", rank: "Knight", quests: 28 },
  { name: "Sir Gawain", rank: "Warrior", quests: 31 },
];

export function TableDemo() {
  return (
    <div className="w-full max-w-2xl">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Knight</TableHead>
            <TableHead>Rank</TableHead>
            <TableHead className="text-right">Quests Completed</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {knights.map((knight) => (
            <TableRow key={knight.name}>
              <TableCell className="font-medium">{knight.name}</TableCell>
              <TableCell>{knight.rank}</TableCell>
              <TableCell className="text-right">{knight.quests}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
