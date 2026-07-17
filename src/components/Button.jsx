import { motion } from "framer-motion";
import { cn } from "../utils/cn";

const VARIANTS = {
  primary:
    "bg-gradient-to-r from-primary to-accent text-bg font-bold shadow-[0_0_0_0_rgba(250,204,21,0.5)] hover:shadow-[0_0_35px_5px_rgba(250,204,21,0.35)]",
  outline:
    "border border-white/20 text-white hover:border-primary hover:text-primary bg-white/[0.03]",
  ghost: "text-white/80 hover:text-primary",
  dark: "bg-card text-white border border-line hover:border-primary/50",
};

const SIZES = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3.5 text-sm",
  lg: "px-8 py-4 text-base",
};

function spawnRipple(e) {
  const btn = e.currentTarget;
  const rect = btn.getBoundingClientRect();
  const ripple = document.createElement("span");
  const size = Math.max(rect.width, rect.height);
  ripple.className = "ripple";
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 650);
}

export default function Button({
  as = "button",
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "left",
  className = "",
  children,
  onClick,
  type = "button",
  ...rest
}) {
  const Tag = motion[as] ?? motion.button;
  const handleClick = (e) => {
    spawnRipple(e);
    onClick?.(e);
  };

  return (
    <Tag
      href={href}
      type={as === "button" ? type : undefined}
      onClick={handleClick}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "btn-ripple inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 cursor-pointer",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...rest}
    >
      {Icon && iconPosition === "left" && <Icon className="text-lg" />}
      <span>{children}</span>
      {Icon && iconPosition === "right" && <Icon className="text-lg" />}
    </Tag>
  );
}
