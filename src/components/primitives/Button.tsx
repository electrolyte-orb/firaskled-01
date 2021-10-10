import React, { ReactNode, ComponentProps } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
  size?: 'xl' | 'sm';
  elevation?: boolean;
}
export default function Button({
  children,
  variant,
  size,
  elevation,
  ...props
}: ButtonProps & ComponentProps<'button'>) {
  function sizeStyles() {
    switch (size) {
      case 'sm':
        return 'text-sm py-1 px-4';
      case 'xl':
        return 'text-lg font-medium py-2 px-10';
      default:
        return 'text-base py-2 px-8';
    }
  }

  function elevationStyles() {
    switch (elevation) {
      case true:
        return 'shadow-xl active:shadow-md transition';
      case false:
        return '';
      default:
        return 'shadow-xl active:shadow-md transition';
    }
  }

  function variantStyles() {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 text-white active:bg-blue-600';
      case 'secondary':
        return 'bg-gray-200 text-black active:bg-gray-300';
      case 'danger':
        return 'bg-red-500 text-white active:bg-red-600';
      case 'success':
        return 'bg-green-500 text-white active:bg-green-600';
      case 'warning':
        return 'bg-yellow-500 text-black active:bg-yellow-600';

      default:
        return '';
    }
  }

  return (
    <button
      {...props}
      className={`rounded-full ${elevationStyles()} ${sizeStyles()} ${variantStyles()} ${
        props.className ? props.className : ''
      }`}
    >
      {children}
    </button>
  );
}
