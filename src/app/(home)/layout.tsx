import MobileNav from "@/components/layout/mobile-nav";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <>
      <MobileNav />
      <div>{children}</div>
    </>
  );
}
