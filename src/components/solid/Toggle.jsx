

import { createSignal, onCleanup } from 'solid-js';
const [count, setCount] = createSignal(21);

const interval = setInterval(() => setCount((c) => c + 1), 1000);

//onCleanup(() => clearInterval(interval));

export default function Toggle(props) {
  console.log('label', props.label)
  console.log('label', props.description)
  //   <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
 // <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
  return (

<div class="flex items-center justify-between">
  <div class="text-orange-500">qqqqq</div>
  <span class="flex flex-grow flex-col">
    <span class="text-sm font-medium text-gray-900" id="availability-label">Available to hire</span>
    <span class="text-sm text-gray-500" id="availability-description">Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.</span>
  </span>

  <button type="button" class="bg-indigo-600 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" role="switch" aria-checked="false" aria-labelledby="availability-label" aria-describedby="availability-description">

    <span aria-hidden="true" class="ttranslate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
  </button>
 

    </div>
  );
}