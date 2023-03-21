import { FormEvent } from 'react';

type ButtonPropsType = {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: FormEvent) => void;
};

export function GreenButton(props: ButtonPropsType) {
  return (
    <button
      onClick={(e) => props.onClick?.(e)}
      className={`
        bg-gradient-to-r from-green-400 to-green-700 
        rounded-md 
        text-white 
        px-4 py-2
        ${props.className}
      `}
    >
      {props.children}
    </button>
  );
}

export function BlueButton(props: ButtonPropsType) {
  return (
    <button
      onClick={(e) => props.onClick?.(e)}
      className={`
        bg-gradient-to-r from-blue-400 to-blue-700 
        rounded-md 
        text-white 
        px-4 py-2
        ${props.className}
      `}
    >
      {props.children}
    </button>
  );
}

export function GrayButton(props: ButtonPropsType) {
  return (
    <button
      onClick={(e) => props.onClick?.(e)}
      className={`
        bg-gradient-to-r from-gray-400 to-gray-700 
        rounded-md 
        text-white 
        px-4 py-2
        ${props.className}
      `}
    >
      {props.children}
    </button>
  );
}
