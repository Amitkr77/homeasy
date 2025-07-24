import { useEffect, useState } from "react";
import PhoneScrollAnimationMobile from "@/components/PhoneScrollAnimationMobile";
import PhoneScreen from "./PhoneScreen";

export default function PhoneAnimationWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    mediaQuery.addEventListener("change", updateIsMobile);

    updateIsMobile();

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  return isMobile ? <PhoneScrollAnimationMobile /> : <PhoneScreen />;
}
