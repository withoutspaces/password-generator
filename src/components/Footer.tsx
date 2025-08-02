import { LinkSimpleHorizontalIcon } from "@phosphor-icons/react";

export function Footer() {
  return (
    <footer className="absolute bottom-2 flex space-x-1 items-center  text-slate-500 ">
      <div className=" font-mono tracking-tighter flex items-center gap-2 text-sm">
        Desenvolvido por
        <a className="hover:underline" href="https://github.com/withoutspaces" target="_blank">
          Daniel Moreira
        </a>
      </div>
      <LinkSimpleHorizontalIcon />
    </footer>
  );
}
