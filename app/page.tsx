import { Button } from "@/components/ui/button";
import { AlertDialogDemo } from "./(demos)/alert-dialog-demo";
import { BadgeDemo } from "./(demos)/badge-demo";
import { CardDemo } from "./(demos)/card-demo";
import { CheckboxDemo } from "./(demos)/checkbox-demo";
import { SliderDemo } from "./(demos)/slider-demo";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-8">
          <div className="flex flex-col gap-2">
            <Button>Primary button</Button>
            <Button variant="secondary">Secondary button</Button>
            <Button variant="outline">Outline button</Button>
            <Button variant="ghost">Ghost button</Button>
            <div className="my-5 w-full">
              <SliderDemo />
            </div>
            <BadgeDemo />
          </div>

          <CardDemo />
          <AlertDialogDemo />
          <CheckboxDemo />
        </div>


      </main>

    </div>
  );
}
