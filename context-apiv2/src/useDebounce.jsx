import { useEffect, useState } from "react";

export default function useDebounce(value, delay = 500) {
  const [debouncedValue, seDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      seDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}
