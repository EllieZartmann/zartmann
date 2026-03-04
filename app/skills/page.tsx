import Image from "next/image";

const skills = [
  { name: "Python", image_src: "/skills/python.svg", image_alt: "Python", width: 60, height: 60 },
  { name: "JavaScript", image_src: "/skills/javascript.png", image_alt: "JavaScript", width: 60, height: 60 },
  { name: "TypeScript", image_src: "/skills/typescript.png", image_alt: "TypeScript", width: 60, height: 60 },
  { name: "Next.js", image_src: "/skills/next_js.png", image_alt: "Next.js", width: 60, height: 60 },
  { name: "Tailwind", image_src: "/skills/tailwind.png", image_alt: "Tailwind", width: 60, height: 60 },
  { name: "HTML", image_src: "/skills/html.png", image_alt: "HTML", width: 60, height: 60 },
  { name: "CSS", image_src: "/skills/css.png", image_alt: "CSS", width: 60, height: 60 }
];


export default function Skills() {
  return (
    <section
      style={{ fontFamily: "var(--font-genos)" }}
      className=" w-full min-h-screen 
      text-gray-800 font-sans
        dark:bg-gray-200
        bg-white
        bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]
        bg-[size:24px_24px]"
    >
      <h1 className="pt-20 mb-5 text-6xl font-bold">Skills</h1>
      <div className="flex flex-wrap gap-5 justify-center px-30 mx-20 mt-20 py-20 border-2 rounded-xl ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-36 h-36 flex flex-col items-center justify-center p-5 rounded-lg"
          >
            <Image
              src={skill.image_src}
              alt={skill.image_alt}
              width={skill.width}
              height={skill.height}
            />
            <span className="mt-2 text-black font-semibold">{skill.name}</span>
          </div>
        ))}
        </div>
    </section>
  );
}
