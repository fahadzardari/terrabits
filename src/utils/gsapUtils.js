import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins once
gsap.registerPlugin(ScrollTrigger);

// Export configured instance
export { gsap, ScrollTrigger };
