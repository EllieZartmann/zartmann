import Image from "next/image";

export default function About() {
  return (
    <section
      style={{ fontFamily: "var(--font-genos)" }}
      className="w-full min-h-screen flex-col items-center justify-center gap-5 text-gray-800 font-sans
        dark:bg-gray-200
        bg-white
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
        bg-[size:24px_24px]"
    >
      <h1 className="pt-20 mb-5 text-6xl font-bold">About</h1>
      <div className="h-auto w-full flex gap-5">
        <p className=" text-xl w-full">
          Ich verstehe mich darauf, komplexe Strukturen zu erkennen und Probleme
          geordnet und kontrolliert zu beheben. Mit meinem Wissen bin ich in der
          Lage, oder habe gar das Privileg, meinen Beitrag zum Fortschritt zu
          leisten. <br /> <br />
          blabla blablablabla blabla blabla blablablabla blabla blabla
          blablablabla blabla blabla blablablabla blabla blabla blablablabla
          blabla blabla blablablabla blabla blabla blablablabla blabla blabla
          blablablabla blabla blabla blablablabla blabla blabla blablablabla
          blabla blabla blablablabla blabla blabla blablablabla blabla blabla
          blablablabla blabla blabla blablablabla blabla blabla blablablabla
          blabla blabla blablablabla blabla<br /> <br />
          blabla blablablabla blabla blabla blablablabla blabla blabla
          blablablabla blabla blabla blablablabla blabla blabla blablablabla
          blabla blabla blablablabla blabla blabla blablablabla blabla blabla
          blablablabla blabla blabla blablablabla blabla blabla blablablabla
          blabla blabla blablablabla blabla blabla blablablabla blabla blabla
          blablablabla blabla blabla blablablabla blabla blabla blablablabla
          blabla blabla blablablabla blabla
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
