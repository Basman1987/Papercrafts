"use client"

import type React from "react"
import { useLanguage } from "./languageContext"
import { Button } from "@/components/ui/button"

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "nl" : "en")
  }

  return (
    <Button onClick={toggleLanguage} variant="outline" className="paper-button glow-effect flex items-center gap-2">
      <span className={`flag-icon flag-icon-${language === "en" ? "gb" : "nl"}`} />
      {language === "en" ? "EN" : "NL"}
    </Button>
  )
}

export default LanguageSwitcher

