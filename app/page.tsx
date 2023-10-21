import Services from "./components/Services";


export default function Home() {
  return (
    <>
    <div className="bg-[url('/hero.jpeg')] w-hero min-h-screen absolute top-0 bg-[left_-10rem_top_-15rem] bg-cover bg-no-repeat"></div>
    <div className="z-40 container p-10 grid grid-cols-5 grid-rows-2 mt-16 gap-y-8 mb-8">
      <p className="ml-16 col-span-3 text-5xl">What&apos;s cooking?! I&apos;m a visual storyteller, dishing out narratives through the art of design and photography.</p>
      <div className="row-start-2 col-start-4">
        <p className="text-sm mb-8">She / her</p>
        <p className="text-lg">My name is Sarah Scicluna and I work as a freelance creative director, brand designer and portrait photographer. I also love street photography, whipping up delicious soups & adding movies to my never ending watch-list. You&apos;ll find me to be a friendly and approachable human. Say hello!</p>
      </div>
    </div>
    <Services />
    </>
  )
}
