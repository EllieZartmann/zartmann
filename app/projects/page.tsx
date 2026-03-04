export default function Projects() {
  return (
    <section
      style={{ fontFamily: "var(--font-genos)" }}
      className="w-full min-h-screen h-auto flex-col items-center justify-center 
        text-gray-800 font-sans
        dark:bg-gray-200
        bg-white
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
        bg-size-[24px_24px]"
    >
      <h1 className="pt-20 ml-50 mb-5 text-6xl font-bold">Projects</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        <div className="h-70 w-140 border-2 rounded-xl"></div>
        <div className="h-70 w-140 border-2 rounded-xl"></div>
        <div className="h-70 w-140 border-2 rounded-xl"></div>
        <div className="h-70 w-140 border-2 rounded-xl"></div>
      </div>
    </section>
  );
}
