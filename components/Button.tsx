import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

export default function Button({ title, icon, variant, type }: ButtonProps) {
  return (
    <button
      className={`flexCenter gap-3 rounded-full ${variant}`}
      type="button"
    >
      {icon && <Image src={icon} width={20} height={20} alt="Icon" />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
}
