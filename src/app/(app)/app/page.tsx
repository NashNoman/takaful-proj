import GreetingHeader from "@/app/(app)/app/_components/greeting-header";
import OptionCard from "@/app/(app)/app/_components/option-card";
import {
  ArchiveIcon,
  ChatBubbleIcon,
  FileTextIcon,
  IdCardIcon,
  QuestionMarkCircledIcon,
} from "@radix-ui/react-icons";
import {
  ClipboardCheckIcon,
  ListChecksIcon,
  MessageCircle,
  MessageCircleQuestionIcon,
  Receipt,
} from "lucide-react";

export default function App() {
  return (
    <main className="container mx-auto px-4 max-h-screen">
      <GreetingHeader />
      <div className="p-2 bg-slate-100 rounded-md grid grid-cols-2 lg:grid-cols-3 gap-4">
        <OptionCard
          icon={<IdCardIcon className="h-9 w-9" />}
          title="ID Cards"
          href="/app/account"
        />
        <OptionCard
          icon={<ArchiveIcon className="h-8 w-8" />}
          title="My Package"
          href="/app/package"
        />
        <OptionCard
          icon={<Receipt className="h-8 w-8" />}
          title="Billing"
          href="/app/billing"
        />
        <OptionCard
          icon={<ClipboardCheckIcon className="h-8 w-8" />}
          title="Claims"
          href="/app/claims"
        />
        <OptionCard
          icon={<MessageCircleQuestionIcon className="h-7 w-7" />}
          title="Consultation"
          href="/app/consult"
        />
        <OptionCard
          icon={<QuestionMarkCircledIcon className="h-7 w-7" />}
          title="About Us"
          href="/app/about"
        />
      </div>
    </main>
  );
}
