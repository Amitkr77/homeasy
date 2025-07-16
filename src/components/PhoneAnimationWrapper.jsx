import { useEffect, useState } from "react";
import PhoneScrollAnimation from "@/components/PhoneScrollAnimation";
import PhoneScrollAnimationMobile from "@/components/PhoneScrollAnimationMobile";
import PhoneScreen from "./PhoneScreen";
import PhoneScreenMobile from "./PhoneScreenMobile";

export default function PhoneAnimationWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile ? <PhoneScreen /> : <PhoneScreenMobile />;
}
