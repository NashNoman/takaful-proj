import { Card, CardFooter, CardContent } from "@/components/ui/card";
import Link from "next/link";

type AppCardProps = {
  icon: React.ReactNode;
  title: string;
  href: string;
};

export default function OptionCard({ icon, title, href }: AppCardProps) {
  return (
    <Link href={href}>
      <Card className="flex flex-col items-center pb-4 h-full">
        <CardContent className="p-4 flex items-center">{icon}</CardContent>
        <CardFooter className="p-0">
          <h3 className="font-semibold">{title}</h3>
        </CardFooter>
      </Card>
    </Link>
  );
}
