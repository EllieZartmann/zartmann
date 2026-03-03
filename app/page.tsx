import Navigation from  '@/components/navigation'
import About from  '@/components/about'
import Projects from '@/components/projects';
import Contacts from '@/components/contact';

export default function Home() {
  return (
    <div className="min-h-screen text-gray-800 font-sans dark:bg-gray-200 absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]">
      <div className="ml-20 mr-20">
        <Navigation/> 
        <About/>
        <Projects/>
        <Contacts/>
      </div>



    </div>
  );
}
