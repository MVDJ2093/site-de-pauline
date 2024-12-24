import { Checkbox } from "@/components/ui/checkbox";

interface CookieOptionProps {
  title: string;
  description: string;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
}

const CookieOption = ({ title, description, checked, onChange, disabled = false }: CookieOptionProps) => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h4 className="font-medium text-navy">{title}</h4>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
      <Checkbox
        checked={checked}
        onCheckedChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default CookieOption;