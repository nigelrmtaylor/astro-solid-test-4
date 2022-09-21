
import { createSignal, onCleanup, createEffect } from 'solid-js';

export default function Counter(props) {
    const [count, setCount] = createSignal(0);
    const increment = () => setCount(count() + 1);
  
    return (
      <button type="button" onClick={increment}>
        {count()}
      </button>
    );
  }