"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "nl"

type Translations = {
  [key in Language]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    home: "Home",
    about: "About",
    process: "Process",
    contact: "Contact",
    handcraftedPaperArt: "Handcrafted Paper Art",
    discoverBeauty: "Discover the beauty of handmade paper creations",
    shopOnEtsy: "Shop on Etsy",
    discoverMyProcess: "Discover My Process",
    viewProcess: "View Process",
    aboutMyWork: "About My Work",
    craftingBeauty: "Crafting Beauty from Pulp",
    featuredCreations: "Featured Creations",
    paperMakingProcess: "My Paper-Making Process",
    artOfPatience: "The Art of Patience",
    booklets: "Booklets",
    brooches: "Brooches",
    cards: "Cards",
    beautifulHandmade: "Beautiful handmade {item} crafted with care.",
    floralBooklet: "Floral Booklet",
    geometricBrooch: "Geometric Brooch",
    texturedGreetingCard: "Textured Greeting Card",
    marbledPaperArt: "Marbled Paper Art",
    uniquePiece: "A unique piece showcasing the versatility of handmade paper.",
    preparingPulp: "Preparing the Pulp",
    addingNaturalElements: "Adding Natural Elements",
    formingSheet: "Forming the Sheet",
    pressingDrying: "Pressing and Drying",
    finishingTouches: "Finishing Touches",
    preparingPulpDesc:
      "I start by breaking down recycled paper into a fine pulp, mixing it with water to create the base for my creations.",
    addingNaturalElementsDesc:
      "Flowers, leaves, and other organic materials are carefully incorporated into the pulp for texture and visual interest.",
    formingSheetDesc: "Using a mold and deckle, I carefully distribute the pulp to form each unique sheet of paper.",
    pressingDryingDesc:
      "The newly formed sheets are pressed to remove excess water and then air-dried to preserve their natural texture.",
    finishingTouchesDesc:
      "Once dry, I may emboss, cut, or further embellish the paper to create the final piece of art.",
    patienceDesc:
      "Creating handmade paper is a labor of love that requires patience and attention to detail. Each step in the process contributes to the unique character of the final product, resulting in paper that's not just a medium, but a work of art in itself.",
    paperMakingJourney:
      "My journey into the world of handmade paper began with a fascination for texture and a desire to create something truly unique. Each piece I create is a labor of love, combining traditional techniques with modern design sensibilities.",
    sustainableArt:
      "From delicate booklets to intricate brooches, every item is crafted with attention to detail and a commitment to sustainability. I source my materials responsibly and take pride in creating eco-friendly art that brings joy to others.",
    allRightsReserved: "All rights reserved.",
    madeBy: "Made by Basman",
    contactUs: "Contact Us",
    getInTouch: "Get in Touch",
    contactDescription:
      "Have questions about our handmade paper creations? Want to place a custom order? We'd love to hear from you!",
    sendMessage: "Send Us a Message",
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send",
    paperPulpEgg: "Paper Pulp Egg",
    earrings: "Earrings",
    paperPulpEggDesc: "Egg made of paper pulp with a delicate bird inside.",
    earringsDesc: "Beautiful earrings made of handmade paper.",
  },
  nl: {
    home: "Home",
    about: "Over",
    process: "Proces",
    contact: "Contact",
    handcraftedPaperArt: "Handgemaakt Papierkunst",
    discoverBeauty: "Ontdek de schoonheid van handgemaakte papiercreaties",
    shopOnEtsy: "Winkel op Etsy",
    discoverMyProcess: "Ontdek Mijn Proces",
    viewProcess: "Bekijk Proces",
    aboutMyWork: "Over Mijn Werk",
    craftingBeauty: "Schoonheid Creëren uit Pulp",
    featuredCreations: "Uitgelichte Creaties",
    paperMakingProcess: "Mijn Papiermaakproces",
    artOfPatience: "De Kunst van Geduld",
    booklets: "Boekjes",
    brooches: "Broches",
    cards: "Kaarten",
    beautifulHandmade: "Prachtige handgemaakte {item} met zorg vervaardigd.",
    floralBooklet: "Bloemen Boekje",
    geometricBrooch: "Geometrische Broche",
    texturedGreetingCard: "Gestructureerde Wenskaart",
    marbledPaperArt: "Gemarmerd Papierkunst",
    uniquePiece: "Een uniek stuk dat de veelzijdigheid van handgemaakt papier laat zien.",
    preparingPulp: "Pulp Voorbereiden",
    addingNaturalElements: "Natuurlijke Elementen Toevoegen",
    formingSheet: "Vel Vormen",
    pressingDrying: "Persen en Drogen",
    finishingTouches: "Afwerking",
    preparingPulpDesc:
      "Ik begin met het afbreken van gerecycled papier tot een fijne pulp, gemengd met water om de basis voor mijn creaties te vormen.",
    addingNaturalElementsDesc:
      "Bloemen, bladeren en andere organische materialen worden zorgvuldig in de pulp verwerkt voor textuur en visuele interesse.",
    formingSheetDesc:
      "Met behulp van een mal en deksel verdeel ik zorgvuldig de pulp om elk uniek vel papier te vormen.",
    pressingDryingDesc:
      "De nieuw gevormde vellen worden geperst om overtollig water te verwijderen en vervolgens aan de lucht gedroogd om hun natuurlijke textuur te behouden.",
    finishingTouchesDesc:
      "Eenmaal droog kan ik het papier embossen, knippen of verder versieren om het uiteindelijke kunstwerk te creëren.",
    patienceDesc:
      "Het maken van handgemaakt papier is een arbeid van liefde die geduld en aandacht voor detail vereist. Elke stap in het proces draagt bij aan het unieke karakter van het eindproduct, resulterend in papier dat niet alleen een medium is, maar een kunstwerk op zich.",
    paperMakingJourney:
      "Mijn reis in de wereld van handgemaakt papier begon met een fascinatie voor textuur en een verlangen om iets echt unieks te creëren. Elk stuk dat ik maak is een arbeid van liefde, waarbij traditionele technieken worden gecombineerd met moderne ontwerpgevoeligheden.",
    sustainableArt:
      "Van delicate boekjes tot ingewikkelde broches, elk item is met aandacht voor detail en toewijding aan duurzaamheid vervaardigd. Ik betrek mijn materialen op verantwoorde wijze en ben trots op het creëren van milieuvriendelijke kunst die anderen vreugde brengt.",
    allRightsReserved: "Alle rechten voorbehouden.",
    madeBy: "Gemaakt door Basman",
    contactUs: "Neem Contact Op",
    getInTouch: "Kom in Contact",
    contactDescription:
      "Heeft u vragen over onze handgemaakte papiercreaties? Wilt u een aangepaste bestelling plaatsen? We horen graag van u!",
    sendMessage: "Stuur Ons een Bericht",
    name: "Naam",
    email: "E-mail",
    message: "Bericht",
    send: "Versturen",
    paperPulpEgg: "Papier Pulp Ei",
    earrings: "Oorbellen",
    paperPulpEggDesc: "Ei gemaakt van papierpulp met een delicate vogel erin.",
    earringsDesc: "Prachtige oorbellen gemaakt van handgemaakt papier.",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: { [key: string]: string }) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string, params?: { [key: string]: string }) => {
    let translation = translations[language][key] || key
    if (params) {
      Object.keys(params).forEach((param) => {
        translation = translation.replace(`{${param}}`, params[param])
      })
    }
    return translation
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

