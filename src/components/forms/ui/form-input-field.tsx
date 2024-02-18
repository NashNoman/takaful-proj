import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type Props = {
  form: any;
  label: string;
  name: string;
  type?: string;
  render?: (field: any) => JSX.Element;
  autoFocus?: boolean;
};

export default function FormInputField({
  form,
  label,
  name,
  type,
  render,
  autoFocus,
}: Props) {
  type = type || "text";

  return (
    <FormField
      control={form.control}
      shouldUnregister
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {render ? (
              render(field)
            ) : (
              <Input {...field} type={type} autoFocus={autoFocus} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
