import React from "react";

const WorkExperience: React.FC = () => {
  return (
    <div className="container mx-auto px-4 lg:px-[100px] py-12">
      <h1 className="text-center text-4xl font-bold text-[#171717] mt-4 mb-12">
        Work Experiences
      </h1>

      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: "repeat(5, 1fr)",
          gridTemplateRows: "repeat(7, minmax(0, 1fr))",
        }}
      >
        {/* Card 1 */}
        <div
          className="bg-[#171717] rounded-xl p-6 text-[#E6E6E6] flex flex-col justify-between"
          style={{
            gridColumn: "span 3 / span 3",
            gridRow: "span 4 / span 4",
          }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-1">Orphic Altar</h3>
            <p className="text-xl font-medium mb-3">Creative Visualizer</p>
            <p className="text-base leading-relaxed">
              Editing video on Adobe Premier Pro & creating motion graphics for Offer & Campaigns.
            </p>
          </div>

          {/* Bottom row: both tags on left */}
          <div className="mt-4 flex items-center gap-3 text-base">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2A2A2A] border border-[#E6E6E6]/30 text-[#E6E6E6] text-base font-medium cursor-default">
              Employed
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2A2A2A] border border-[#E6E6E6]/30 text-[#E6E6E6] text-base font-medium cursor-default">
              Full-Time
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="bg-[#171717] rounded-xl p-6 text-[#E6E6E6] flex flex-col justify-between"
          style={{
            gridColumn: "4 / span 2",
            gridRow: "span 4 / span 4",
          }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-1">Furniture Concept</h3>
            <p className="text-xl font-medium mb-3">Visualize Brand & Communication</p>
            <p className="text-base leading-relaxed">
              Editing video on Adobe Premier Pro & creating motion graphics for Offer & Campaigns.
            </p>
          </div>

          <div className="mt-4 flex items-center gap-3 text-base">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2A2A2A] border border-[#E6E6E6]/30 text-[#E6E6E6] text-base font-medium cursor-default">
              May 2024
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2A2A2A] border border-[#E6E6E6]/30 text-[#E6E6E6] text-base font-medium cursor-default">
              Full-Time
            </span>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="bg-[#171717] rounded-xl p-6 text-[#E6E6E6] flex flex-col justify-between"
          style={{
            gridColumn: "span 5 / span 5",
            gridRow: "5 / span 3",
          }}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-1">Soft IT Care</h3>
            <p className="text-xl font-medium mb-3">Video & Motion Graphics Designer</p>
            <p className="text-base leading-relaxed">
              Editing video on Adobe Premier Pro & creating motion graphics for Offer & Campaigns.
            </p>
          </div>

          <div className="mt-4 flex items-center gap-3 text-base">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2A2A2A] border border-[#E6E6E6]/30 text-[#E6E6E6] text-base font-medium cursor-default">
              March 2023
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2A2A2A] border border-[#E6E6E6]/30 text-[#E6E6E6] text-base font-medium cursor-default">
              Full-Time
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;