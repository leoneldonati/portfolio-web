import { useState } from "react";
import { MenuIcon } from "../icons/Menu.tsx";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="text-2xl z-10 border-b-slate-300 py-2 flex flex-col items-center md:hidden">
      <ul
      className="flex flex-col fixed transition top-20 bg-black/90 p-2 rounded-md -right-52 [&>li>a]:block [&>li>a]:border [&>li>a]:rounded-md [&>li>a]:p-2 [&>li>a]:text-center gap-4"
      style={{ transform: `translateX(${open ? '-9em' : '0'})`}}
      >
        <li>
          <a href="/blog" title="Go to mi blog!">
            Blog
          </a>
        </li>
        <li>
          <a href="/projects" title="See my projects!">
            Projects
          </a>
        </li>
        <li>
          <a href="/contact" title="Contact me!">
            Contact
          </a>
        </li>
        <li>
          <a href="/about" title="About me..">
            About
          </a>
        </li>
      </ul>

      <button
      onClick={() => setOpen(prevState => !prevState)}
      className="mt-2 absolute right-10"
      >
        <MenuIcon styles={`w-8 h-auto ${open ? 'rotate-90' : 'rotate-0'}`}/>
      </button>
    </nav>
  );
}
