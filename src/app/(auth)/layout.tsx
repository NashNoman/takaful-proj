import SignupStateProvider from "@/components/providers/signup-state-provider";

type Props = {
  children: React.ReactNode;
};

export default async function layout({ children }: Props) {
  return <SignupStateProvider>{children}</SignupStateProvider>;
}
