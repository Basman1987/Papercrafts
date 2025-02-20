"use client"

import Image from "next/image"
import { useLanguage } from "../languageContext"

export default function About() {
  const { t } = useLanguage()

  const featuredCreations = [t("paperPulpEgg"), t("geometricBrooch"), t("texturedGreetingCard"), t("earrings")]

  return (
    <div className="min-h-screen bg-paper text-stone-800 flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center paper-font">{t("aboutMyWork")}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/About_work-Ju6ZfBhyzbTSYPuU31ARdx7dr5sdSK.webp"
              alt="Handmade paper creations display"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover"
              priority
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t("craftingBeauty")}</h2>
            <p className="text-lg mb-4">{t("paperMakingJourney")}</p>
            <p className="text-lg">{t("sustainableArt")}</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 text-center paper-font">{t("featuredCreations")}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCreations.map((item, index) => (
            <div key={index} className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
              <Image
                src={
                  index === 0
                    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/egg-y3fE0qZGABTnQEoAhufl80JZm6kSWL.webp"
                    : index === 1
                      ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brooche2-d5pu3tsqgRRygs7LNLZWEzkyqYzDvi.webp"
                      : index === 2
                        ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/card2-H0jHy1JQR7jXVKGjwJ1u5pi7fjUbaJ.webp"
                        : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/earrings-2XRAhdCb6n40lLvsHjAK8vyD9YeCxl.webp"
                }
                alt={item}
                width={300}
                height={300}
                className="w-full h-64 object-cover mb-4 rounded"
              />
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-stone-600">
                {item === t("paperPulpEgg")
                  ? "Egg made of paper pulp with a delicate bird inside."
                  : item === t("geometricBrooch")
                    ? "Handcrafted brooch featuring organic patterns in emerald and lime green."
                    : item === t("texturedGreetingCard")
                      ? "Minimalist greeting cards featuring textured paper birds perched on delicate branches."
                      : "Beautiful earrings made of handmade paper."}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

