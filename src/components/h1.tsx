import { cn } from "@/lib/utils";

export default function H1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={cn(`text-white text-2xl leading-6 ${className}`)}>
      {children}
    </h1>
  );
}
