import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";

const SuccessStoriesPage: React.FC = () => {
  const successStories = [
    {
      title: "Innovation in Tech",
      description: "How User A revolutionized the tech industry...",
      content: <img src="/path-to-image-1.jpg" alt="User A's Success" />,
    },
    {
      title: "Achieving Growth",
      description: "User B's journey to success through consistent growth...",
      content: <img src="/path-to-image-2.jpg" alt="User B's Growth" />,
    },
    {
      title: "Community Impact",
      description: "User C made a significant impact on their community...",
      content: <img src="/path-to-image-3.jpg" alt="User C's Impact" />,
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-10">
      <StickyScroll content={successStories} contentClassName="p-6" />
    </div>
  );
};

export default SuccessStoriesPage;