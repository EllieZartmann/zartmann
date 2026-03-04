export default function Projects() {
  return (
    <section
      style={{ fontFamily: "var(--font-genos)" }}
      className="w-full min-h-screen h-auto flex-col items-center justify-center"
    >
      <h1 className="mt-20 mb-5 text-6xl font-bold">Projects</h1>
      <div className="flex flex-wrap gap-5 justify-center">
        <div className="h-70 w-140 border-2 rounded-xl"></div>
        <div className="h-70 w-140 border-2 rounded-xl"></div>
        <div className="h-70 w-140 border-2 rounded-xl"></div>
        <div className="h-70 w-140 border-2 rounded-xl"></div>
      </div>
    </section>
  );
}
