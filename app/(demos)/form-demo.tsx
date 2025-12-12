"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  kingdom: z.string().min(3, {
    message: "Kingdom name must be at least 3 characters.",
  }),
});

export function FormDemo() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      kingdom: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success(`Welcome, ${values.name} of ${values.kingdom}!`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full max-w-sm space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Sir Lancelot" {...field} />
              </FormControl>
              <FormDescription>Enter thy noble name</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="kingdom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kingdom</FormLabel>
              <FormControl>
                <Input placeholder="Camelot" {...field} />
              </FormControl>
              <FormDescription>Which kingdom dost thou serve?</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Pledge Allegiance</Button>
      </form>
    </Form>
  );
}
