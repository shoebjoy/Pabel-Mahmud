"use client";

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface UiUxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  caseStudyContent?: string;
  caseStudyComponent?: React.ReactNode;
}

const UiUxModal: React.FC<UiUxModalProps> = ({
  isOpen,
  onClose,
  title,
  caseStudyContent,
  caseStudyComponent,
}) => {
  const [mounted, setMounted] = useState(false);
  const hasComponent = !!caseStudyComponent;

  // Ensure this only runs on client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // prevents SSR error

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      appElement={document.getElementById("__next")!} // non-null assertion
      style={{
        overlay: {
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.80)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(6px)",
        },
        content: {
          inset: "auto",
          position: "relative",
          border: "none",
          background: "#ffffff",
          borderRadius: "16px",
          padding: 0,
          width: "920px",
          maxWidth: "94vw",
          height: "800px",
          maxHeight: "92vh",
          overflow: "hidden",
          boxShadow: "0 25px 70px rgba(0,0,0,0.7)",
          outline: "none",
        },
      }}
    >
      <div className="relative w-full h-full flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-30 bg-white px-10 pt-6 pb-4 border-b border-gray-200">
          <button
            onClick={onClose}
            className="absolute top-5 right-8 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-full w-10 h-10 flex items-center justify-center transition-colors shadow-sm"
          >
            ✕
          </button>

          {!hasComponent && (
            <h2 className="text-2xl font-bold text-[#171717] pr-16">
              {title}
            </h2>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-10 py-8 bg-white">
          {hasComponent ? (
            caseStudyComponent
          ) : (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-[24px] font-bold mt-8 mb-4 text-[#171717]">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-[24px] font-semibold mt-8 mb-3 text-[#171717]">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-[20px] font-semibold mt-6 mb-2 text-[#171717]">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-[#171717] leading-relaxed mb-4">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc ml-6 mb-6 space-y-2 text-[#171717]">
                    {children}
                  </ul>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-[#171717]">{children}</strong>
                ),
                img: ({ src, alt }) => (
                  <img
                    src={src || ""}
                    alt={alt || ""}
                    className="w-full max-w-[820px] mx-auto rounded-xl shadow-md my-8 object-contain"
                  />
                ),
              }}
            >
              {caseStudyContent || "No case study content available"}
            </ReactMarkdown>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default UiUxModal;