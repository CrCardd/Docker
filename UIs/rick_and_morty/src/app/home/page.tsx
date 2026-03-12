import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Aprendizagem técnica bosch",
};

export default function Home() {
  return (
  
    <div className="bg-gradient-to-r from-blue-200 to-cyan-700   h-screen w-screen flex flex-col justify-center items-center">


      <section className="w-80 flex flex-col items-center bg-gray-700 p-5 rounded-lg">
        <h1 className="text-white text-lg font-kanitfont">Login</h1>
        <form className="h-52 flex flex-col justify-evenly">
          <input className="p-1 rounded" type="text" placeholder="User"/>
          <input className="p-1 rounded" type="password" placeholder="Password"/>
          
        </form>
      </section>

    </div>

  );
}
