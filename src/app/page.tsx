import MouseCursor from "@/components/MouseCursor/MouseCursor";

export default function Home() {
  return (
    <main className="z-20">
      <section className="h-screen bg-blue-400">
        <p className="text-[6rem]">Lorem ipsum dolor sit amet</p>
      </section>
      <section className="h-screen bg-pink-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam
        aliquam rerum debitis, inventore quaerat, eos, eaque totam soluta aut
        incidunt voluptatibus! Dolore omnis unde laborum dolores, odio porro
        modi.
      </section>
      <MouseCursor />
    </main>
  );
}
