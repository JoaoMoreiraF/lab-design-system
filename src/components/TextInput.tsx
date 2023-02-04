import { InputHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: ReactNode;
}

export interface TextInputIconProps {
  children: ReactNode;
}

function TextInputRoot({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 h-12 py-4 px-3 w-full outline-none rounded bg-gray-800 focus-within:ring-2 ring-cyan-300">
      {children}
    </div>
  );
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

TextInputIcon.displayName = "TextInputIcon"

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 outline-none text-gray-100 text-xs placeholder:text-gray-400"
      {...props}
    ></input>
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};
