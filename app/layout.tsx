"use client"

import "./globals.css"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Menu } from "lucide-react"
import type React from "react"
import { LanguageProvider, useLanguage } from "./languageContext"
import LanguageSwitcher from "./LanguageSwitcher"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import ScrollToTopArrow from "./components/ScrollToTopArrow"
import { Caveat, Indie_Flower } from "next/font/google"

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",
})

const indieFlower = Indie_Flower({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-indie-flower",
})

function Navigation() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/process", label: "process" },
    { href: "/contact", label: "contact" },
  ]

  return (
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-3">
        <div className="relative w-10 h-10 md:w-12 md:h-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_Papercraft_RH1-3xT9fM3GbeLpSxGMldKHOehnfJ8TJ6.webp"
            alt="PapercraftsNL Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-xl md:text-2xl font-semibold paper-font">PapercraftsNL</h1>
      </Link>
      <div className="flex items-center space-x-4">
        <LanguageSwitcher />
        <div className="hidden md:flex items-center space-x-4">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="hover:text-stone-600 paper-button">
              {t(item.label)}
            </Link>
          ))}
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-[1.2rem] w-[1.2rem]" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {navItems.map((item) => (
              <DropdownMenuItem key={item.label} asChild>
                <Link href={item.href}>{t(item.label)}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}

function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-stone-100 bg-opacity-80 py-6">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a
            href="https://www.instagram.com/papercraftsnl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-800 hover:text-stone-600 paper-button"
          >
            <Instagram size={24} />
          </a>
        </div>
        <p className="text-sm text-stone-600">&copy; 2025 PapercraftsNL. {t("allRightsReserved")}</p>
        <p className="text-sm text-stone-600 mt-1">Made by Basman</p>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${caveat.variable} ${indieFlower.variable}`}>
      <LanguageProvider>
        <body className="bg-paper">
          <header className="bg-white bg-opacity-80 shadow-sm">
            <Navigation />
          </header>

          {children}

          <Footer />
          <ScrollToTopArrow />
        </body>
      </LanguageProvider>
    </html>
  )
}

