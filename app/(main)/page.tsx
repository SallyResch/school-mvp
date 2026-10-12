import Link from "next/link";


export default async function Home() {
  return (
    <main>
      <section className="h-dvh m-auto" id="home">
        <div className="flex flex-col md:flex-row justify-evenly mb-12">
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <div className="bg-orange rounded-full w-8 h-8"></div>
              <p className="text-wine font-semibold tracking-widest uppercase text-sm">Learn boldly. Grow together.</p>
            </div>
            <div>
              <h2 className="text-ink text-5xl">A school where every <span className="text-orange underline">bright mind</span> belongs.</h2>
              <p className="text-muted text-lg">Northstar Academy is a vibrant learning community where curiosity is celebrated, confidence grows, and every student is known by name.</p>
            </div>
            <div className="mt-4">
              <Link className="bg-navy text-paper p-4 rounded-xl font-semibold" href={"#our-school"}>Discover Northstar</Link>
              <Link className="font font-semibold text-navy" href={"#student-life"}>Explore student life</Link>
            </div>
            <div>
              <p>98% of families</p>
              <p>would recomment Northstar</p>
            </div>
          </div>
          <div className="relative ">
            <div className="absolute left-0 top-0 z-10 rounded-2xl bg-white px-6 py-3 shadow-md">
              <p>Curiosity first</p>
              <p>Learning that sparks joy</p>
            </div>
            <div className="absolute right-4 top-4 z-10 text-2xl">star</div>
            <div className="absolue inset-[12/]">
              <img className="h-2/4 w-2/4 object-cover rounded-[43%_57%_61%_39%/42%_38%_62%_58%]" src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=85" alt="" />
            </div>
            <div className="absolute bottom-4 left-4 z-10 text-xl">lightning</div>
            <div className="absolute bottom-0 right-0 z-10 rounded-2xl bg-white px-6 py-3 shadow-md border-l-wine border-l-6">
              <p className="text-wine font-bold ">24+</p>
              <p>clubs, teams & creative studios</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center bg-navy md:flex-row md:justify-evenly text-paper">
          <div className="flex flex-row">
            <p className="text-gold text-3xl">680</p>
            <p>happy students</p>
          </div>
          <div className="flex flex-row">
            <p className="text-gold text-3xl">14:1</p>
            <p>Student-teacher Ratio</p>
          </div>
          <div className="flex flex-row">
            <p className="text-gold text-3xl">32</p>
            <p>years of excellence</p>
          </div>
          <div className="flex flex-row">
            <p className="text-gold text-3xl">96%</p>
            <p>collage acceptance</p>
          </div>
        </div>
      </section>
      <section className="h-dvh" id="our-school">
        Our school
      </section>
      <section className="h-dvh" id="student-life">
        Student Life
      </section>
    </main>
  );
}
