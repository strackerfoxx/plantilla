"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const InputOTPContext = React.createContext(null);
const REGEXP_ONLY_DIGITS = "\\d*";

const InputOTP = React.forwardRef(
  ({ className, containerClassName, maxLength = 6, value = "", onChange, children, ...props }, ref) => {
    const inputRef = React.useRef(null);

    React.useImperativeHandle(ref, () => inputRef.current);

    const normalizedValue = String(value).slice(0, maxLength);

    const handleChange = (event) => {
      const nextValue = event.target.value.replace(/\D/g, "").slice(0, maxLength);
      onChange?.(nextValue);
    };

    const focusInput = () => {
      inputRef.current?.focus();
    };

    return (
      <InputOTPContext.Provider value={{ maxLength, value: normalizedValue }}>
        <div
          className={cn("relative flex items-center justify-center", containerClassName)}
          onClick={focusInput}
        >
          <input
            ref={inputRef}
            value={normalizedValue}
            onChange={handleChange}
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={maxLength}
            className={cn("absolute inset-0 h-full w-full cursor-text opacity-0", className)}
            {...props}
          />
          {children}
        </div>
      </InputOTPContext.Provider>
    );
  }
);
InputOTP.displayName = "InputOTP";

const InputOTPGroup = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex items-center gap-1 sm:gap-2", className)} {...props} />
));
InputOTPGroup.displayName = "InputOTPGroup";

const InputOTPSlot = React.forwardRef(({ index, className, ...props }, ref) => {
  const context = React.useContext(InputOTPContext);

  if (!context) {
    throw new Error("InputOTPSlot must be used within InputOTP");
  }

  const char = context.value[index] ?? "";
  const isActive = context.value.length === index && context.value.length < context.maxLength;

  return (
    <div
      ref={ref}
      className={cn(
        "flex h-12 w-10 items-center justify-center rounded-2xl border border-input bg-background text-lg font-semibold text-foreground shadow-sm transition-colors sm:w-12",
        isActive && "border-ring ring-2 ring-ring ring-offset-2",
        className
      )}
      {...props}
    >
      {char}
    </div>
  );
});
InputOTPSlot.displayName = "InputOTPSlot";

export { InputOTP, InputOTPGroup, InputOTPSlot, REGEXP_ONLY_DIGITS };
