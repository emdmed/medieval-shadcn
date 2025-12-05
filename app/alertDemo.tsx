
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"

export function AlertDialogDemo() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Summon Dire Warning</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Dost thou TRULY dare proceed?!</AlertDialogTitle>
          <AlertDialogDescription>
            Hark! This most grievous action cannot be undone by any sorcery known to man!
            Thy noble account shall be cast into the eternal void, and all records of thy
            deeds expunged from the Royal Archives forever more. The scribes shall weep!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Nay! I retreat in terror!</AlertDialogCancel>
          <AlertDialogAction>AYE, TO DOOM!</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
