import { useEffect, useState } from "react";

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue
        ? JSON.parse(storedValue) ?? initialValue
        : initialValue;
    } catch (e) {
      console.error(e);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error(e);
    }
  }, [value, key]);

  return [value, setValue];
}
export default useLocalStorage;
