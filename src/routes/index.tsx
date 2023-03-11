import Counter from '~/components/Counter';
import './index.css';
import { A } from 'solid-start';

export default function Home() {
  return (
    <main>
      <h1 class="text-2xl font-bold underline">Hello world!</h1>
      <Counter />
      <p>
        Visit{' '}
        <a href="https://solidjs.com" target="_blank">
          solidjs.com
        </a>{' '}
        to learn how to build Solid apps.
      </p>
      <nav>
        <A
          href="./projects"
          activeClass="active-link"
          inactiveClass="inactive-link"
        >
          {' '}
          Projects{' '}
        </A>
        <A href="./contacts"> Contacts </A>
        <A href="./about"> About </A>
      </nav>
    </main>
  );
}
