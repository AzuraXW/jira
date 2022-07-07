import { useState } from "react";

export default function useArray<T>(array: T[]) {
  const [state, setState] = useState(array);

  // 清空数组
  const clear = () => {
    setState([]);
  };

  const removeIndex = (index: number) => {
    const copy = state.slice();
    copy.splice(index, 1);
    setState(copy);
  };

  const add = (item: T) => {
    setState([...state, item]);
  };

  return [state, clear, removeIndex, add];
}
