type FormWrapperProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};

export default function FormWrapper({
  children,
  title,
  description,
}: FormWrapperProps) {
  return (
    <>
      <h1 className="font-bold text-3xl mb-5 mt-10">{title}</h1>
      <p className="text-black/70 text-sm">{description}</p>
      <form className="text-left flex flex-col gap-4 mt-10">{children}</form>
    </>
  );
}
