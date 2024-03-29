import 'index.css';
import { hmr, render } from 'voby';
import { ClockFace } from 'ClockFace';

render(
  hmr((cb: (mod: unknown) => void) => import.meta.hot?.accept(cb), ClockFace),
  document.querySelector('#root'),
);
