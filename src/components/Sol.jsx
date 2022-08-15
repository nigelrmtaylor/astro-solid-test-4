    

import { createSignal, onCleanup } from 'solid-js';
const [count, setCount] = createSignal(21);

const interval = setInterval(() => setCount((c) => c + 1), 1000);

//onCleanup(() => clearInterval(interval));

export default function Sol() {
  return (
    <div>
      <span class="text-orange-500">SOL</span> from Solid {count()}
    </div>
  );
}