import React, { useState } from "react";
import { EyeIcon } from "@heroicons/react/24/outline";
import VideoModal from "./VideoModal";
import ImageModal from "./ImageModal";
import UiUxModal from "./UiUxModal";

interface ProjectCardProps {
  type: "video" | "image" | "casestudy";
  contentUrl?: string;
  title: string;
  description: string;
  videoId?: string;
  caseStudyContent?: string;           // legacy string support
  caseStudyComponent?: React.ReactNode; // preferred for rich case studies
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  type,
  contentUrl,
  title,
  description,
  videoId,
  caseStudyContent,
  caseStudyComponent,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  // Show image if contentUrl exists — regardless of type
  const hasImage = !!contentUrl;

  return (
    <div className="group rounded-xl overflow-hidden bg-[#121212] shadow-md hover:shadow-xl transition-all duration-300">
      {/* Thumbnail / Preview Area */}
      <div
        className={`relative h-52 md:h-72 cursor-pointer overflow-hidden ${!hasImage ? "bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center" : ""}`}
        onClick={openModal}
      >
        {hasImage && contentUrl ? (
          <img
            src={contentUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              e.currentTarget.parentElement!.innerHTML += `<div class="absolute inset-0 flex items-center justify-center text-gray-500">Image not found</div>`;
            }}
          />
        ) : (
          <div className="text-gray-400 text-center p-6">
            <p className="text-lg font-medium">
              {type === "casestudy" ? "Case Study" : type === "video" ? "Video" : "Project"}
            </p>
            {type === "casestudy" && (
              <p className="text-sm mt-2 opacity-80">Click to read full case study</p>
            )}
          </div>
        )}

        {/* Eye icon overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="h-14 w-14 rounded-full border-2 border-white/40 flex items-center justify-center backdrop-blur-sm">
            <EyeIcon className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h5 className="text-xl font-semibold text-white mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm line-clamp-3">{description}</p>
      </div>

      {/* Modals */}
      {type === "video" && videoId && (
        <VideoModal isOpen={modalIsOpen} onClose={closeModal} videoId={videoId} />
      )}

      {type === "image" && contentUrl && (
        <ImageModal isOpen={modalIsOpen} onClose={closeModal} imageUrl={contentUrl} />
      )}

      {type === "casestudy" && (caseStudyComponent || caseStudyContent) && (
        <UiUxModal
          isOpen={modalIsOpen}
          onClose={closeModal}
          title={title}
          caseStudyContent={caseStudyContent}
          caseStudyComponent={caseStudyComponent}   // ← must be passed
        />
      )}
    </div>
  );
};

export default ProjectCard;