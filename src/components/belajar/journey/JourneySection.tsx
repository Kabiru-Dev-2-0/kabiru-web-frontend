"use client";

import { learningJourneyLayout } from "@/types/learningJourneyLayout";
import JourneyNode from "./JourneyNode";
import { JourneySectionProps } from "@/types/learningJourney";

export default function JourneySection({ data, selectedNodeId, onNodeSelect, onNodeClick }: JourneySectionProps) {
  const { headingHeight, nodeSpacing, horizontalPattern } = learningJourneyLayout;

  // Menghitung tinggi area node berdasarkan jumlah materi.
  const nodeAreaHeight = data.nodes.length * nodeSpacing;

  // Total tinggi section termasuk heading.
  const sectionHeight = headingHeight + nodeAreaHeight;

  return (
    <section id={`journey-section-${data.id}`} data-journey-section={data.id} className="relative scroll-mt-36">
      <div
        className="relative mx-auto w-full max-w-[560px] overflow-visible"
        style={{
          height: `${sectionHeight}px`,
        }}
      >
        {/* Section Heading dan Divider */}
        <div
          className="absolute inset-x-0 top-0 z-20 flex items-center justify-center"
          style={{
            height: `${headingHeight}px`,
          }}
        >
          {/* Garis pembatas */}
          <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-primary-default" />

          {/* Judul bagian */}
          <div className="relative z-10 max-w-[260px] bg-white px-4 text-center">
            <p className="text-small font-normal text-text-paragraph-75">{data.section}</p>

            <h2 className="text-paragraph font-normal text-text-heading">{data.title}</h2>
          </div>
        </div>

        {/* Journey Nodes */}
        {data.nodes.map((node, index) => {
          const x = horizontalPattern[index % horizontalPattern.length];

          const y = headingHeight + index * nodeSpacing + nodeSpacing / 2;

          return (
            <div
              key={node.id}
              className="absolute z-10"
              style={{
                left: `${x}%`,
                top: `${y}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <JourneyNode data={node} isOpen={selectedNodeId === node.id} onSelect={onNodeSelect} onClick={onNodeClick} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
