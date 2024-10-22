"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const handleClick = () => {
    window.open("https://wa.me/573123456789", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] shadow-lg z-50"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}