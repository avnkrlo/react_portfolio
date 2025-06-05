import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";

const data = [
  {
    time: "February 2022",
    title: "Application UI code in Tailwind CSS",
    body:
      "Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.",
  },
  {
    time: "March 2022",
    title: "Marketing UI design in Figma",
    body:
      "All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.",
  },
  {
    time: "April 2022",
    title: "E-Commerce UI code in Tailwind CSS",
    body:
      "Get started with dozens of web components and interactive elements built on top of Tailwind CSS.",
  },
];

export default function AlternatingTimeline() {
  return (
    <Timeline>
      {data.map((item, index) => (
        <TimelineItem key={index}>
          <div className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-start gap-4`}>
            <TimelinePoint icon={HiCalendar} />
            <TimelineContent className="max-w-md">
              <TimelineTime>{item.time}</TimelineTime>
              <TimelineTitle>{item.title}</TimelineTitle>
              <TimelineBody>{item.body}</TimelineBody>
              {index === 0 && (
                <Button color="gray" className="mt-2">
                  Learn More
                  <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                </Button>
              )}
            </TimelineContent>
          </div>
        </TimelineItem>
      ))}
    </Timeline>
  );
}