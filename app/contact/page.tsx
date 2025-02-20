"use client"

import { useLanguage } from "../languageContext"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export default function Contact() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-paper text-stone-800 flex flex-col">
      <main className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center paper-font">{t("contactUs")}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">{t("getInTouch")}</h2>
            <p className="mb-6">{t("contactDescription")}</p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <Mail className="mr-2" />
                <span>anjademan@live.nl</span>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" />
                <span>+31 6 83551224</span>
              </div>
              <div className="flex items-center">
                <MapPin className="mr-2" />
                <span>Zevenhuizen (ZH), The Netherlands</span>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-32 h-32">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_Papercraft_RH1-3xT9fM3GbeLpSxGMldKHOehnfJ8TJ6.webp"
                  alt="PapercraftsNL Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">{t("sendMessage")}</h2>
            <form action="https://formspree.io/f/mjkgaokw" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  {t("name")}
                </label>
                <Input type="text" id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  {t("email")}
                </label>
                <Input type="email" id="email" name="email" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">
                  {t("message")}
                </label>
                <Textarea id="message" name="message" rows={4} required />
              </div>
              <Button type="submit" className="paper-button glow-effect">
                {t("send")}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}

