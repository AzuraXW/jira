## 自定义 hooks

自定义 hook 可以抽离组件中的重复逻辑代码，达到逻辑复用的效果
必须以 use 开头，hook 只能在函数组件或者其他 hooks 中调用

### useDebounce hooks

这是一个防抖功能的 hook，传入一个 state，返回一个受控的 state，通过控制 state 的更新时机，从而达到防抖的效果

```javascript
export function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      // 延迟改变state
      setDebounceValue(value);
    }, delay);
    // 下次effect调用前清除上一次的timer
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounceValue;
}
```
