"use client";

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
            By order of the crown, all subjects are hereby summoned to the great hall for an announcement of utmost importance.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
