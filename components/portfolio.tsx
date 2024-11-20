'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"

type Item = {
  id: number
  title: string
  description: string
}

type SectionData = {
  title: string
  items: Item[]
}

const sectionData: SectionData[] = [
  {
    title: "Client Work",
    items: [
      { id: 1, title: "Project A", description: "Description for Project A" },
      { id: 2, title: "Project B", description: "Description for Project B" },
      { id: 3, title: "Project C", description: "Description for Project C" },
      { id: 4, title: "Project D", description: "Description for Project D" },
      { id: 5, title: "Project E", description: "Description for Project E" },
      { id: 6, title: "Project F", description: "Description for Project F" },
    ]
  },
  {
    title: "Projects",
    items: [
      { id: 1, title: "Personal Project 1", description: "Description for Personal Project 1" },
      { id: 2, title: "Personal Project 2", description: "Description for Personal Project 2" },
      { id: 3, title: "Personal Project 3", description: "Description for Personal Project 3" },
    ]
  },
  {
    title: "Talks",
    items: [
      { id: 1, title: "Conference Talk 1", description: "Description for Conference Talk 1" },
      { id: 2, title: "Workshop 1", description: "Description for Workshop 1" },
      { id: 3, title: "Webinar 1", description: "Description for Webinar 1" },
      { id: 4, title: "Panel Discussion", description: "Description for Panel Discussion" },
      { id: 5, title: "Keynote Speech", description: "Description for Keynote Speech" },
      { id: 6, title: "Tech Meetup Talk", description: "Description for Tech Meetup Talk" },
    ]
  },
  {
    title: "Tweets",
    items: [
      { id: 1, title: "Tweet 1", description: "Content of Tweet 1" },
      { id: 2, title: "Tweet 2", description: "Content of Tweet 2" },
      { id: 3, title: "Tweet 3", description: "Content of Tweet 3" },
    ]
  }
]

export function PortfolioComponent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)

  const openModal = (item: Item) => {
    setSelectedItem(item)
    setModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
      <header className="py-6 px-4 bg-white bg-opacity-80 backdrop-blur-sm">
        <h1 className="text-3xl font-bold text-center text-gray-800">Young & AI</h1>
      </header>
      <main className="container mx-auto px-4 py-8">
        {sectionData.map((section, index) => (
          <Section key={index} data={section} openModal={openModal} />
        ))}
      </main>
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{selectedItem?.title}</DialogTitle>
            <DialogDescription>{selectedItem?.description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

function Section({ data, openModal }: { data: SectionData; openModal: (item: Item) => void }) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const displayItems = data.items.slice(0, 5)
  const hasMoreItems = data.items.length > 5

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="mb-12">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold text-gray-700">{data.title}</h2>
        {hasMoreItems && (
          <Link href={`/${data.title.toLowerCase().replace(/\s+/g, '-')}`} passHref>
            <Button variant="outline" size="sm">
              Show more
            </Button>
          </Link>
        )}
      </div>
      <div className="relative">
        <div ref={carouselRef} className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
          {displayItems.map((item) => (
            <div
              key={item.id}
              className="flex-none w-64 bg-white p-4 rounded-lg shadow-md cursor-pointer transition-transform hover:scale-105"
              onClick={() => openModal(item)}
            >
              <h3 className="font-medium text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 truncate">{item.description}</p>
            </div>
          ))}
        </div>
        {displayItems.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50"
              onClick={() => scroll('left')}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50"
              onClick={() => scroll('right')}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}
      </div>
    </section>
  )
}