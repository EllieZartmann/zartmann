import Image from "next/image";

export default function About() {
  return (
    <section
      style={{ fontFamily: "var(--font-genos)" }}
      className="w-full min-h-screen flex-col items-center justify-center gap-5 
        text-gray-800 font-sans
        dark:bg-gray-200
        bg-white
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
        bg-size-[24px_24px]"
    >
        <h1 className="pt-20 mb-5 ml-50 text-6xl font-bold ">About</h1>
      <div className="h-auto w-full flex gap-5">
        <p className=" text-xl w-full ml-50">
          
        Ich bin Entwickler aus Leidenschaft und habe in meinem Hobby meine Berufung gefunden. 
        Besonders die Frontend-Entwicklung hat mich von Anfang an gefesselt, 
        wobei ich mir zusätzlich fundierte Kenntnisse im Backend und im Bereich Data Science erarbeitet habe.
<br /> <br />
        Ich lerne gerne und kontinuierlich dazu und sehe neue Herausforderungen als Chance, 
        mich fachlich wie persönlich weiterzuentwickeln. Besonders zeichnet mich meine schnelle 
        Auffassungsgabe aus, die es mir ermöglicht, mich effizient in neue Themen 
        einzuarbeiten und zielgerichtete Lösungen zu entwickeln.<br /> <br />

        Zudem verstehe ich mich darauf, komplexe Strukturen schnell zu durchdringen 
        und Probleme strukturiert, kontrolliert und nachhaltig zu beheben. 
        Mit meinem Wissen und meiner Motivation möchte ich aktiv dazu beitragen, 
        digitale Lösungen sinnvoll voranzubringen und echten Mehrwert zu schaffen. 
        </p>
        <div className="h-full w-full flex flex-col items-center justify-center">
          <Image
            src="/picture_me.jpg" 
            alt="Sylvia Zartmann"
            width={450}
            height={450}
            className="rounded-xl"
          />
        </div>
      </div>
      
    </section>
  );
}
