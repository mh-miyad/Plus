import StackingCards from "@/components/StackingCard/StackingCard";
import LenisProvider from "@/layout/LenisProvider";

export default function Home() {
  return (
    <>
      <LenisProvider>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          ipsum facilis obcaecati culpa! Quia atque eos laborum dolore facilis
          ipsum blanditiis praesentium, unde voluptates necessitatibus
          consequuntur perferendis sit inventore? Voluptates?
        </div>
        <div className=" relative">
          <section className="h-screen bg-blue-400  sticky top-0 left-0">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse iusto
            dolorum dolor doloribus in consequatur. Recusandae natus quis ut
            suscipit architecto laboriosam qui velit, aperiam a culpa. Dolorum,
            praesentium cum.
          </section>
          <section className="h-screen bg-green-400 sticky top-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse iusto
            dolorum dolor doloribus in consequatur. Recusandae natus quis ut
            suscipit architecto laboriosam qui velit, aperiam a culpa. Dolorum,
            praesentium cum.
          </section>
          <section className="h-screen bg-yellow-400 sticky top-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse iusto
            dolorum dolor doloribus in consequatur. Recusandae natus quis ut
            suscipit architecto laboriosam qui velit, aperiam a culpa. Dolorum,
            praesentium cum.
          </section>
          <section className="h-screen bg-yellow-400 sticky top-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse iusto
            dolorum dolor doloribus in consequatur. Recusandae natus quis ut
            suscipit architecto laboriosam qui velit, aperiam a culpa. Dolorum,
            praesentium cum.
          </section>
        </div>
        <div>
          <StackingCards />
          <StackingCards />
          <StackingCards />
          <StackingCards />
          <StackingCards />
        </div>
        <footer>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, et
          aliquid recusandae mollitia nobis quisquam voluptates magnam nisi
          blanditiis provident ea tempore repellendus laborum esse. Optio magni
          error eveniet rerum.
        </footer>
      </LenisProvider>
    </>
  );
}
