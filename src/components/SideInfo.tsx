import animationData from "../../public/lotties/animation.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export function SideInfo() {
  return (
    <div className="border-b border-l border-t rounded-l-xl border-blue-500 p-10 w-96 hidden lg:flex flex-col">
      <Lottie options={defaultOptions} height={300} width={300} />
      <ul className="space-y-6 text-slate-300">
        <li>Combine letras, números e símbolos para máxima proteção.</li>
        <li>Gere uma senha que nem você conseguiria adivinhar.</li>
        <li>Sua vida digital merece essa proteção.</li>
      </ul>
    </div>
  );
}
