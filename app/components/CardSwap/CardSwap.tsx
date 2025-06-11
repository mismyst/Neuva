'use client';
import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { FaUsers, FaRocket, FaEye } from "react-icons/fa";

export interface CardSwapProps {
  width?: number | string;
  height?: number | string;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (idx: number) => void;
  skewAmount?: number;
  easing?: "linear" | "elastic";
  children: ReactNode;
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`
        absolute top-1/2 left-3/4 
        rounded-3xl border-[1.5px] border-white/30 
        bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#1e293b]
        backdrop-blur-lg text-white shadow-[0_10px_40px_rgba(255,255,255,0.1)] 
        p-12 font-semibold text-lg tracking-wide 
        [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden]
        transition-transform duration-300 hover:scale-[1.03]
        ${customClass ?? ""} ${rest.className ?? ""}
      `.trim()}
    />
  )
);
Card.displayName = "Card";

type CardRef = RefObject<HTMLDivElement>;
interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

// Shift cards to the LEFT
const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number
): Slot => ({
  x: i * distX -80, // Reduced from 300 to 100
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLElement, slot: Slot, skew: number) => {
  // Simple CSS transform instead of GSAP for initial positioning
  el.style.transform = `translate3d(${slot.x}px, ${slot.y}px, ${slot.z}px) translate(-50%, -50%) skewY(${skew}deg)`;
  el.style.transformOrigin = "center center";
  el.style.zIndex = slot.zIndex.toString();
};

const CardSwap: React.FC<CardSwapProps> = ({
  width = 800,
  height = 600,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 12000, // Increased from 8000ms to 12000ms for much slower transitions
  pauseOnHover = true, // Changed default to true
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}) => {
  const config =
    easing === "elastic"
      ? {
          ease: "cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Smoother easing
          durDrop: 2.5, // Increased from 1.8 to 2.5 for much slower drop
          durMove: 2.2, // Increased from 1.5 to 2.2 for much slower movement
          durReturn: 2.5, // Increased from 1.8 to 2.5 for much slower return
          promoteOverlap: 0.6, // Reduced from 0.7 to 0.6 for longer pause
          returnDelay: 0.5, // Increased from 0.3 to 0.5 for much longer pause
        }
      : {
          ease: "cubic-bezier(0.4, 0.0, 0.2, 1)", // Smoother easing
          durDrop: 1.8, // Increased from 1.2 to 1.8
          durMove: 1.8, // Increased from 1.2 to 1.8
          durReturn: 1.8, // Increased from 1.2 to 1.8
          promoteOverlap: 0.5, // Reduced from 0.6 to 0.5 for longer pause
          returnDelay: 0.6, // Increased from 0.4 to 0.6
        };

  const childArr = useMemo(
    () => Children.toArray(children) as ReactElement<CardProps>[],
    [children]
  );
  const refs = useMemo<CardRef[]>(() => childArr.map(() => React.createRef<HTMLDivElement>()), [childArr.length]);
  const order = useRef<number[]>(Array.from({ length: childArr.length }, (_, i) => i));
  const intervalRef = useRef<number>();
  const container = useRef<HTMLDivElement>(null);
  const isPaused = useRef<boolean>(false);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) =>
      placeNow(r.current!, makeSlot(i, cardDistance, verticalDistance, total), skewAmount)
    );

    const swap = () => {
      if (order.current.length < 2 || isPaused.current) return;
      
      const [front, ...rest] = order.current;
      const elFront = refs[front].current!;

      // Animate the front card dropping down
      elFront.style.transition = `transform ${config.durDrop}s ${config.ease}`;
      const currentTransform = elFront.style.transform;
      elFront.style.transform = currentTransform.replace(/translate3d\([^)]+\)/, 
        `translate3d(${makeSlot(0, cardDistance, verticalDistance, total).x}px, 500px, ${makeSlot(0, cardDistance, verticalDistance, total).z}px)`);

      // After overlap delay, promote other cards
      setTimeout(() => {
        rest.forEach((idx, i) => {
          const el = refs[idx].current!;
          const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
          el.style.zIndex = slot.zIndex.toString();
          el.style.transition = `transform ${config.durMove}s ${config.ease}`;
          el.style.transform = `translate3d(${slot.x}px, ${slot.y}px, ${slot.z}px) translate(-50%, -50%) skewY(${skewAmount}deg)`;
        });

        // Return the front card to the back
        setTimeout(() => {
          const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
          elFront.style.zIndex = backSlot.zIndex.toString();
          elFront.style.transition = `transform ${config.durReturn}s ${config.ease}`;
          elFront.style.transform = `translate3d(${backSlot.x}px, ${backSlot.y}px, ${backSlot.z}px) translate(-50%, -50%) skewY(${skewAmount}deg)`;
          
          order.current = [...rest, front];
        }, config.durMove * 1000 * config.returnDelay);
        
      }, config.durDrop * 1000 * config.promoteOverlap);
    };

    // Start the first swap after a longer delay
    const startTimeout = setTimeout(swap, 4000);
    intervalRef.current = window.setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current!;
      const pause = () => {
        isPaused.current = true;
        clearInterval(intervalRef.current);
      };
      const resume = () => {
        isPaused.current = false;
        intervalRef.current = window.setInterval(swap, delay);
      };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearInterval(intervalRef.current);
        clearTimeout(startTimeout);
      };
    }

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(startTimeout);
    };
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) => {
    const icon = [
      <FaUsers size={32} className="mb-5 text-blue-400 drop-shadow-md" />,
      <FaRocket size={32} className="mb-5 text-green-400 drop-shadow-md" />,
      <FaEye size={32} className="mb-5 text-purple-400 drop-shadow-md" />,
    ][i];

    const content = [
      {
        title: "Passionate Developers",
        desc: `We're not just coders; we live and breathe development. Whether it's front-end aesthetics or back-end logic, our team is deeply passionate about building clean, efficient, and user-friendly solutions.`,
        image: "/images/tog.jpeg",
      },
      {
        title: "How We Started as a Team",
        desc: `It all began with a shared frustration: good ideas lacking great execution. So we came together—designers, developers, dreamers—to form a team built on creativity and collaboration.`,
        image: "/images/brain.jpeg",
      },
      {
        title: "Founder's Vision",
        desc: `The vision? Build a community where tech meets creativity, and innovation thrives. Our founder believes in empowering individuals to create, learn, and lead.`,
        image: "/images/Leadership.jpeg",
      },
    ][i];

    return isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onClick: (e) => {
            child.props.onClick?.(e as React.MouseEvent<HTMLDivElement>);
            onCardClick?.(i);
          },
          children: (
            <div className="flex flex-col items-center text-center">
              {icon}
              <h4 className="text-2xl font-extrabold mb-4">{content.title}</h4>
              <img
                src={content.image}
                alt={content.title}
                className="rounded-xl w-300 h-70 object-cover mb-5 shadow-md"
              />
              <p className="text-base opacity-90 leading-relaxed px-4">
                {content.desc}
              </p>
            </div>
          ),
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child;
  });

  return (
    <div
      ref={container}
      className="w-full h-screen flex items-center justify-start px-10"
    >
      <div
        className="relative perspective-[1200px]"
        style={{ width: width, height: height }}
      >
        {rendered}
      </div>
    </div>
  );
};

export default CardSwap;