import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  variant?: "olive" | "amber" | "earth";
  className?: string;
}

export function TechBadge({
  name,
  variant = "olive",
  className,
}: TechBadgeProps) {
  const variantClasses = {
    olive: "bg-olive/10 text-olive hover:bg-olive/20",
    amber: "bg-amber/10 text-amber-dark hover:bg-amber/20",
    earth: "bg-earth/10 text-earth-dark hover:bg-earth/20",
  };

  return (
    <span
      className={cn(
        "inline-block px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 hover:scale-105",
        variantClasses[variant],
        className
      )}
    >
      {name}
    </span>
  );
}
