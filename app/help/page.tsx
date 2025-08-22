"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, FileText, Book } from "lucide-react";
import { api } from "@/components/lib/api";
import { useState } from "react";

export default function HelpPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);

    try {
      const pdfUrl = "/GuideBookDIPS.pdf";
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "GuidebookDips.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    const iframeElement = document.getElementById(
      "iframes"
    ) as HTMLIFrameElement;
    const elementToShow = document.getElementById("fall") as HTMLElement;

    if (!iframeElement || !elementToShow) return;

    // cek apakah iframe punya src atau tidak
    if (
      !iframeElement.src ||
      iframeElement.src.trim() === "" ||
      iframeElement.src === "about:blank"
    ) {
      elementToShow.style.display = "block"; // tampilkan fallback
    } else {
      elementToShow.style.display = "none"; // sembunyikan fallback
    }
  });

  return (
    <div className="pt-20 min-h-screen bg-[#0A1628]">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 xl:px-24 text-center">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <Book className="w-12 h-12 text-[#4DD0E1] mr-4" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Guidebook <span className="text-[#4DD0E1]">Dips</span>
              </h1>
            </div>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Panduan lengkap untuk menggunakan sistem dan memahami semua fitur
              yang tersedia
            </p>
          </motion.div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      <section className="pb-20 px-4 md:px-8 lg:px-20 xl:px-24">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            {/* PDF Container */}
            <div className="relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-10">
              <div className="p-8 border-b border-gray-700/50">
                <div className="flex items-center ">
                  <FileText className="w-8 h-8 text-[#4DD0E1] mr-3" />
                  <h2 className="text-xl font-semibold text-white">
                    Guidebook Dips - Manual Pengguna
                  </h2>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="relative h-96 md:h-[600px] bg-gray-800/30">
                {/* Fallback message */}
                

                <iframe
                  id="iframes"
                  src="/GuideBookDIPS.pdf"
                  className="w-full h-full"
                  title="Guidebook Dips PDF"
                  style={{ border: "none", background: "transparant" }}
                />
              </div>
            </div>

            {/* Download Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Download Guidebook
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Unduh panduan lengkap dalam format PDF untuk akses offline dan
                  referensi yang mudah
                </p>

                <button
                  onClick={handleDownload}
                  disabled={isLoading}
                  className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isLoading
                      ? "bg-gray-600 cursor-not-allowed text-gray-400"
                      : "bg-[#4DD0E1] hover:bg-[#26C6DA] text-black hover:scale-105 hover:shadow-lg hover:shadow-[#4DD0E1]/25"
                  } transform active:scale-95`}
                >
                  <Download
                    className={`w-5 h-5 mr-3 ${
                      isLoading ? "animate-pulse" : ""
                    }`}
                  />
                  {isLoading ? "Mengunduh..." : "Download Guidebook PDF"}
                </button>

                <div className="mt-4 text-sm text-gray-500">
                  <p>Ukuran file: ~364 KB </p>
                </div>
              </div>
            </motion.div>

            {/* Additional Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
            ></motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
