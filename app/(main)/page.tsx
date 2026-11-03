import { Astroid, Check, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import Link from "next/link";


export default async function Home() {
  return (
    <main>
      <section id="home" className="max-w-full md:pt-30 pb-10 pt-10">
        <div className="flex flex-col md:flex-row justify-center items-center md:pb-20">
          <div className="max-w-100 mb-10">
            <div className="flex flex-row items-center">
              <div className="bg-gold rounded-full w-8 h-8 p-1">
                <Sparkles className="text-wine" />
              </div>
              <p className="text-wine font-semibold tracking-widest uppercase text-sm ml-2">Learn boldly. Grow together.</p>
            </div>
            <div className="my-6">
              <h2 className="text-ink text-5xl mb-6">A school where every <span className="text-orange underline">bright mind</span> belongs.</h2>
              <p className="text-muted text-lg">Northstar Academy is a vibrant learning community where curiosity is celebrated, confidence grows, and every student is known by name.</p>
            </div>
            <div className="my-4">
              <Link className="bg-navy text-paper font-semibold rounded-2xl p-3" href={"#our-school"}>Discover Northstar</Link>
              <Link className="text-navy font-semibold bg-cream rounded-2xl p-3" href={"#student-life"}>Explore student life</Link>
            </div>
            <p>98% of families</p>
            <p>would recommend Northstar</p>
          </div>
          <div className="relative w-90 h-100 mb-10">
            <div className="absolute left-0 top-0 z-10 rounded-2xl bg-white px-6 py-3 shadow-md w-50 text-sm ">
              <Sparkles className="text-gold bg-cream" />
              <div>
                <p className="font-semibold text-navy">Curiosity first</p>
                <p>Learning that sparks joy</p>
              </div>
            </div>
            <div className="absolute right-4 top-4 z-10 text-2xl"><Astroid className="text-gold fill-gold" /></div>
            <img className="absolute right-0 top-3.25 h-[92%] w-[90%] rounded-[44%_56%_42%_58%/56%_37%_63%_44%] object-cover object-[48%_center]" src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1400&q=85" alt="" />
            <div className="absolute bottom-5 left-0 z-10 text-xl"><Zap className="text-gold fill-gold" /></div>
            <div className="absolute bottom-0 right-0 z-10 rounded-2xl bg-white px-6 py-3 shadow-md border-l-wine border-l-6 w-50">
              <p className="text-wine font-bold text-2xl">24+</p>
              <p className="text-sm">clubs, teams & creative studios</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:items-center px-20 bg-navy md:flex-row md:justify-evenly text-paper p-4">
          <div className="flex flex-row items-center">
            <p className="text-gold text-3xl">680</p>
            <p className="ml-2">happy students</p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-gold text-3xl">14:1</p>
            <p className="ml-2">Student-teacher Ratio</p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-gold text-3xl">32</p>
            <p className="ml-2">years of excellence</p>
          </div>
          <div className="flex flex-row items-center">
            <p className="text-gold text-3xl">96%</p>
            <p className="ml-2">collage acceptance</p>
          </div>
        </div>
      </section>
      <section className="max-w-4xl m-auto md:pb-30 md:pt-15 pb-10 pt-10" id="our-school">
        <p className="text-wine font-semibold tracking-widest uppercase text-sm ">Why northstar?</p>
        <div className="flex flex-col md:flex-row md:justify-between mb-10">
          <h2 className="text-ink text-5xl">School should feel like a <br /> place you <span className="text-orange">want</span> to be.</h2>
          <p className="text-muted w-75">We blend academic challenge with genuine care, giving students the courage to try, the support to grow, and the freedom to find their own path.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="bg-navy text-paper flex flex-col p-4 w-75 rounded-2xl md:mr-5">
            <div className="flex flex-row justify-between mb-10">
              <div>
                <Sparkles />
              </div>
              <div>
                01
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-2xl mb-4">Learning with purpose</h3>
              <p className="text-muted font-semibold">Real projects, thoughtful questions, and lessons that connect beyond the classroom.</p>
            </div>
            <Link href={"/teacher/courses"}>Explore academics</Link>
          </div>
          <div className="bg-orange text-ink flex flex-col p-4 w-75 rounded-2xl mt-5 mb-5">
            <div className="flex flex-row justify-between mb-10">
              <div>
                <Users className="text-white" />
              </div>
              <div>
                02
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-2xl mb-4">Known and supported</h3>
              <p className="text-muted font-semibold">Small classes and caring mentors mean every student has someone in their corner.</p>
            </div>
            <Link href={"/teacher/courses"}>Meet our community</Link>
          </div>
          <div className="bg-wine text-paper flex flex-col p-4 w-75 rounded-2xl md:ml-5">
            <div className="flex flex-row justify-between mb-10">
              <div>
                <TrendingUp />
              </div>
              <div>
                03
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-2xl mb-4">Ready for what's next</h3>
              <p className="text-muted font-semibold">Confidence, character, and skills that prepare students for a changing world.</p>
            </div>
            <Link href={"/teacher/courses"}>See our outcomes</Link>
          </div>
        </div>
      </section>
      <section className="h-vh bg-paper flex flex-col md:flex-row justify-evenly items-center md:pt-30 md:pb-30 pt-10" id="student-life">
        <div className="flex flex-col justify-between md:w-1/2">
          <img className="self-start rounded-tl-[80px] rounded-2xl mb-5" width={340} src="https://images.unsplash.com/photo-1758270704226-db897b180243?auto=format&fit=crop&w=900&q=85" alt="Students in classroom" />
          <img className="self-end rounded-br-[80px] rounded-2xl mt-5 mb-5" width={340} src="https://images.unsplash.com/photo-1549057446-9f5c6ac91a04?auto=format&fit=crop&w=900&q=85" alt="Students laughing together" />
        </div>
        <div>
          <p className="text-wine font-semibold tracking-widest uppercase text-sm ">The northstar experience</p>
          <h3 className="text-5xl">Big ideas. Real <br /> friendships. <span className="text-orange">Every day.</span></h3>
          <p className="text-muted min-w-75 max-w-125">From science labs to stage lights, Northstar students learn by doing and discover what makes them come alive.</p>
          <div>
            <div className="flex flex-row items-center mb-4 mt-4">
              <Check className="bg-gold text-wine rounded-full p-1 w-8 h-8 mr-4" />
              <div>
                <p className="font-bold text-navy">Joyful, active learning</p>
                <p>Classes built around curiosity and collaboration.</p>
              </div>
            </div>
            <div className="flex flex-row items-center mb-4">
              <Check className="bg-gold text-wine rounded-full p-1 w-8 h-8 mr-4" />
              <div>
                <p className="font-bold text-navy">A community that feels close</p>
                <p>Belonging isn't a program here. Its how we do school.</p>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <Check className="bg-gold text-wine rounded-full p-1 w-8 h-8 mr-4" />
              <div>
                <p className="font-bold text-navy">Room to be yourself</p>
                <p>Clubs, arts, athletics, and endless ways to shine.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
