"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useLanguage } from "./languageContext"

export default function Home() {
  const { t } = useLanguage()

  const products = [t("booklets"), t("brooches"), t("cards")]

  const getProductImage = (product: string) => {
    if (product === t("brooches")) {
      return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brooche_300-Fn58pQ7Y0XCIhVRRZBKYfTDUFuoj8L.webp"
    }
    if (product === t("booklets")) {
      return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Book.jpg-75uGW0pWEFsY8DUrxLxRAi5jGJOQst.jpeg"
    }
    if (product === t("cards")) {
      return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cards-HDSwA5aymmvrtxXnzHmPnXpTXwysrg.webp"
    }
    return `/placeholder.svg?height=300&width=300`
  }

  return (
    <div className="min-h-screen bg-paper text-stone-800 flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 paper-font-handcrafted">{t("handcraftedPaperArt")}</h2>
          <p className="text-xl mb-6">{t("discoverBeauty")}</p>
          <Button asChild className="paper-button glow-effect">
            <a
              href="https://www.etsy.com/shop/PapercraftsNL"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-800 text-white hover:bg-stone-700"
            >
              {t("shopOnEtsy")}
            </a>
          </Button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((item, index) => (
            <div key={index} className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
              <Image
                src={getProductImage(item) || "/placeholder.svg"}
                alt={item}
                width={300}
                height={300}
                className="w-full h-64 object-cover mb-4 rounded"
                priority={index === 0}
              />
              <h3 className="text-xl font-semibold mb-2 paper-font">{item}</h3>
              <p className="text-stone-600 font-indie-flower">{t("beautifulHandmade", { item: item.toLowerCase() })}</p>
            </div>
          ))}
        </section>

        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 paper-font">{t("discoverMyProcess")}</h2>
          <p className="text-lg mb-6 font-indie-flower">{t("discoverBeauty")}</p>
          <Button asChild variant="outline" className="paper-button glow-effect">
            <Link href="/process#top">{t("viewProcess")}</Link>
          </Button>
        </section>
      </main>
    </div>
  )
}

