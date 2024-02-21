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
  defaultValue?: any;
  autoFocus?: boolean;
};

export default function FormInputField({
  form,
  label,
  name,
  type,
  render,
  defaultValue,
  autoFocus,
}: Props) {
  type = type || "text";

  return (
    <FormField
      control={form.control}
      shouldUnregister
      name={name}
      defaultValue={defaultValue[name]}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              {render ? (
                render(field)
              ) : (
                <Input
                  {...field}
                  type={type}
                  autoFocus={autoFocus}
                  autoComplete="off"
                />
              )}
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
