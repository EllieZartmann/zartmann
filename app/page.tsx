import { Genos } from "next/font/google";

const genos = Genos({
  subsets: ["latin"],
  variable: "--font-genos",
});


export default function Home() {
  return (
    <div
      className="
        h-screen
        w-full flex justify-center
        text-gray-800 font-sans
        dark:bg-gray-200
        bg-white
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
        bg-size-[24px_24px]
      "
    >
      <div className="w-full max-w-6xl flex flex-col items-center">
        <section
          style={{ fontFamily: "var(--font-genos)" }}
          className="
        w-full
        min-h-screen
        flex flex-col items-start justify-center
      "
        >
          <div className="pl-30 flex flex-col">
            <h1 className="text-9xl cursor-default">Sylvia</h1>
            <h1 className="text-9xl pl-50 cursor-default">Zartmann</h1>
            <h1 className="text-9xl pl-100 cursor-default">Developer</h1>

            {/* Email direkt unter Developer */}
            <p className="text-xl pl-100 text-gray-700 -mt-7 ml-2">
              sylvi_zartmann@rocketmail.com
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
