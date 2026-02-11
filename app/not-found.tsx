import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-5">
      <h1 className="text-navy font-cormorant font-light text-3xl md:text-4xl tracking-tight mb-4">
        Page introuvable
      </h1>
      <p className="text-neutral-400 text-sm font-light mb-8">
        Désolé, cette page n'existe pas.
      </p>
      <Link
        href="/"
        className="group text-navy text-[13px] items-center inline-flex gap-2 px-6 py-3 rounded-full transition-all duration-300 font-normal tracking-wide"
        style={{ border: "1px solid rgba(27, 58, 75, 0.12)" }}
      >
        <ArrowLeft className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={1.5} />
        Retour à l'accueil
      </Link>
    </div>
  );
}
