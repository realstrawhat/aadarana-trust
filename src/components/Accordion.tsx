"use client";
import { useState } from "react";
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full flex flex-col gap-2">
      {items.map((item, idx) => {
        const open = openIndex === idx;
        return (
          <div key={item.title} className="border-b border-gray-200">
            <button
              className="flex justify-between items-center w-full py-4 px-2 text-left text-lg font-semibold text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
              aria-expanded={open}
              aria-controls={`accordion-content-${idx}`}
              onClick={() => setOpenIndex(open ? null : idx)}
            >
              <span>{item.title}</span>
              <ChevronDownIcon className={`w-6 h-6 ml-2 transition-transform duration-300 ${open ? 'rotate-180' : ''} text-purple-500`} />
            </button>
            <div
              id={`accordion-content-${idx}`}
              className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${open ? 'max-h-40 py-2 px-2' : 'max-h-0 py-0 px-2'}`}
              aria-hidden={!open}
            >
              <div className="text-base text-gray-700 font-normal leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
} 