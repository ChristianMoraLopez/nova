"use client";

import { useState } from "react";
import { Search, Home, BedDouble, Bath, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export function HeroSearch() {
  const form = useForm();
  const router = useRouter();

  const onSubmit = (data: any) => {
    router.push("/properties");
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
      <div className="bg-white/90 backdrop-blur-md rounded-lg shadow-xl p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Ubicación"
                        className="w-full"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="propertyType"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <select
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                        {...field}
                      >
                        <option value="">Tipo de Propiedad</option>
                        <option value="house">Casa</option>
                        <option value="apartment">Apartamento</option>
                        <option value="commercial">Local Comercial</option>
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="priceRange"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <select
                        className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                        {...field}
                      >
                        <option value="">Rango de Precio</option>
                        <option value="0-200">$0 - $200,000,000</option>
                        <option value="200-400">$200,000,000 - $400,000,000</option>
                        <option value="400+">$400,000,000+</option>
                      </select>
                    </FormControl>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                <Search className="mr-2 h-4 w-4" />
                Buscar
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}