import Greeting from "@/app/(app)/app/_components/Greeting";
import OptionCard from "@/app/(app)/app/_components/OptionCard";
import {
  CardStackPlusIcon,
  ChatBubbleIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";

export default function App() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Greeting />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <OptionCard
          Icon={CardStackPlusIcon}
          title="My Package"
          description="Manage your insurance policies with ease."
          href="/app/package"
        />
        <OptionCard
          Icon={FileTextIcon}
          title="Claims"
          description="View and file claims for your policies."
          href="/app/package"
        />
        <OptionCard
          Icon={ChatBubbleIcon}
          title="Consultation"
          description="Chat with a representative for help."
          href="/app/package"
        />
      </div>
    </main>
  );
}
