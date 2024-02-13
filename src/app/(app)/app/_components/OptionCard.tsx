import { IconProps } from "@radix-ui/react-icons/dist/types";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type AppCardProps = {
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
  href: string;
};

export default function OptionCard({
  Icon,
  title,
  description,
  href,
}: AppCardProps) {
  return (
    <Link href={href}>
      <div className="flex flex-col h-full p-3 shadow-lg gap-3 border border-slate-200 rounded-md justify-center">
        <Icon className="h-10 w-10 mb-5" />
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-slate-500">{description}</p>
      </div>
    </Link>
  );
}
