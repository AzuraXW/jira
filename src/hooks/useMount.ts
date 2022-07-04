/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

export function useMount(callback: () => void) {
  useEffect(() => {
    callback();
  }, []);
}
