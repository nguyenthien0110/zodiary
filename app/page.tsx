"use client";

import { useState } from "react";
import GridItem from "./components/GridItem";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "./components/Header";
import { zodiacSigns } from "./lib/utils";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSign, setSelectedSign] = useState<string | null>(null);
  const [markdownContent, setMarkdownContent] = useState<string>("");

  const handleOpenModal = async (sign: string, markdownPath: string) => {
    setSelectedSign(sign);
    try {
      const response = await fetch(markdownPath);
      if (!response.ok) throw new Error("Failed to fetch Markdown");
      const text = await response.text();
      setMarkdownContent(text);
      setModalOpen(true);
    } catch (error) {
      console.error(error);
      setMarkdownContent("Error loading content.");
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedSign(null);
    setMarkdownContent("");
  };

  return (
    <>
      <div className="h-full rounded-md flex flex-col items-center justify-center relative w-full">
        <Header />
        <div className="w-3/4 my-24">
          <ul className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {zodiacSigns.map((sign) => (
              <GridItem
                key={sign.name}
                icon={sign.icon}
                title={sign.name}
                description={sign.description}
                onClick={() => handleOpenModal(sign.name, sign.markdownPath)}
              />
            ))}
          </ul>
        </div>
        <ShootingStars />
        <StarsBackground />
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              className="absolute inset-0 bg-black/10 backdrop-blur-md"
              onClick={handleCloseModal}
            />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative z-60 max-w-3xl w-full bg-gradient-to-br from-white/5 to-neutral-900/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 max-h-[85vh] overflow-y-auto shadow-[0_0_30px_rgba(255,255,255,0.15)] animate-glow overflow-auto scrollbar-hide"
            >
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              >
                <X className="h-5 w-5 text-white/80" />
              </button>
              <h2 className="text-4xl font-serif font-bold text-white mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] tracking-wide">
                {selectedSign}
              </h2>
              <div className="prose prose-custom text-white/90 [&_img]:mx-auto">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {markdownContent}
                </ReactMarkdown>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
