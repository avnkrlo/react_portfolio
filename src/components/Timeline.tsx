import React from "react";
import { motion } from "framer-motion";

type TimelineItem = {
  date: string;
  title: string;
  description: string;
};

const timelineData: TimelineItem[] = [
  {
    date: "2022-01",
    title: "Started Project",
    description: "We kicked off the project with a team of 4 engineers and 2 designers.",
  },
  {
    date: "2022-03",
    title: "MVP Released",
    description: "Released the first version of the app to beta testers.",
  },
  {
    date: "2022-06",
    title: "Public Launch",
    description: "Opened access to the public and gained our first 1,000 users.",
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="relative max-w-5xl mx-auto px-4 py-16">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gray-300 -translate-x-1/2 z-0" />

      <div className="flex flex-col gap-24">
        {timelineData.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex items-center"
            >
              {/* Left Side */}
              <div className={`w-1/2 pr-4 flex justify-end ${isLeft ? "" : "invisible"}`}>
                <div className="relative bg-gray-800 text-white p-5 rounded-lg shadow-lg max-w-md">
                  {/* Tail pointing to dot */}
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-l-8 border-l-gray-800" />
                  <p className="text-xs text-gray-400">{item.date}</p>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{item.description}</p>
                </div>
              </div>

              {/* Dot */}
              <div className="w-0 relative z-10">
                <div className="w-5 h-5 bg-blue-600 rounded-full border-4 border-white mx-auto" />
              </div>

              {/* Right Side */}
              <div className={`w-1/2 pl-4 flex justify-start ${!isLeft ? "" : "invisible"}`}>
                <div className="relative bg-gray-800 text-white p-5 rounded-lg shadow-lg max-w-md">
                  {/* Tail pointing to dot */}
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-y-8 border-y-transparent border-r-8 border-r-gray-800" />
                  <p className="text-xs text-gray-400">{item.date}</p>
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{item.description}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;






// import { Button, Timeline, TimelineBody, TimelineContent, TimelineItem, TimelinePoint, TimelineTime, TimelineTitle,} from "flowbite-react";
// import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

// export default function Component() {
//   return (
//     <Timeline>
//       <TimelineItem>
//         <TimelinePoint icon={HiCalendar} />
//         <TimelineContent>
//           <TimelineTime>February 2022</TimelineTime>
//           <TimelineTitle>Application UI code in Tailwind CSS</TimelineTitle>
//           <TimelineBody>
//             Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
//             E-commerce & Marketing pages.
//           </TimelineBody>
//           <Button color="gray">
//             Learn More
//             <HiArrowNarrowRight className="ml-2 h-3 w-3" />
//           </Button>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelinePoint icon={HiCalendar} />
//         <TimelineContent>
//           <TimelineTime>March 2022</TimelineTime>
//           <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
//           <TimelineBody>
//             All of the pages and components are first designed in Figma and we keep a parity between the two versions
//             even as we update the project.
//           </TimelineBody>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelinePoint icon={HiCalendar} />
//         <TimelineContent>
//           <TimelineTime>April 2022</TimelineTime>
//           <TimelineTitle>E-Commerce UI code in Tailwind CSS</TimelineTitle>
//           <TimelineBody>
//             Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
//           </TimelineBody>
//         </TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// }