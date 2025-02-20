"use client"

import Image from "next/image"
import { useLanguage } from "../languageContext"

const steps = [
  {
    title: "preparingPulp",
    description: "preparingPulpDesc",
  },
  {
    title: "addingNaturalElements",
    description: "addingNaturalElementsDesc",
  },
  {
    title: "formingSheet",
    description: "formingSheetDesc",
  },
  {
    title: "pressingDrying",
    description: "pressingDryingDesc",
  },
  {
    title: "finishingTouches",
    description: "finishingTouchesDesc",
  },
]

export default function Process() {
  const { t } = useLanguage()

  return (
    <div id="top" className="min-h-screen bg-paper text-stone-800 flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center paper-font">{t("paperMakingProcess")}</h1>

        <div className="mb-12 grid grid-cols-2 gap-4 max-w-3xl mx-auto">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pulp-olN84yZQP9GixyI62kGdKtyYfAAqgu.webp"
            alt={t("preparingPulp")}
            width={320}
            height={240}
            className="rounded-lg shadow-md"
            priority
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/elements-GsHUV862ULBRqR8qSCsyvn3jqaB1oj.webp"
            alt={t("addingNaturalElements")}
            width={320}
            height={240}
            className="rounded-lg shadow-md"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sheet-o4O56cBQYMuU5jJCDp5x4UxkXqF3GE.webp"
            alt={t("formingSheet")}
            width={320}
            height={240}
            className="rounded-lg shadow-md"
          />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/press-aPadRUCGnCtBJn9s69X536qDHn51Xc.webp"
            alt={t("pressingDrying")}
            width={320}
            height={240}
            className="rounded-lg shadow-md"
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={index} className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-stone-300 mb-2">{index + 1}</div>
              <h3 className="text-xl font-semibold mb-2">{t(step.title)}</h3>
              <p className="text-stone-600">{t(step.description)}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 paper-font">{t("artOfPatience")}</h2>
          <p className="text-lg max-w-2xl mx-auto">{t("patienceDesc")}</p>
        </div>
      </main>
    </div>
  )
}

