import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Work, School, Star } from '@mui/icons-material';
import  ConvergeLogo  from '../assets/work_logo/converge.png';

const workContentStyle = {
  background: '#1e40af',
  color: '#fff',
};

const workArrowStyle = {
  borderRight: '7px solid #1e40af',
};

const educationStyle = {
  background: '#be185d',
  color: '#fff',
};

export default function AlternateTimeline() {
  return (
    <VerticalTimeline lineColor="#3b82f6">
      <VerticalTimelineElement
        className="text-black dark:text-white"
        contentStyle={workContentStyle}
        contentArrowStyle={workArrowStyle}
        date="May 2025 - Present"
        iconStyle={{ background: '#1e40af', color: '#fff' }}
        icon={<Work />}
      >
        <h3 className="font-bold text-lg"></h3>
        <h4 className="italic">Concierge/Receptionist</h4>
        <p>UAE, Abu Dhabi</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="text-black dark:text-white"
        contentStyle={workContentStyle}
        contentArrowStyle={workArrowStyle}
        date="January 2023 - February 2025"
        iconStyle={{ background: '#1e40af', color: '#fff' }}
        icon={<Work />}
      >
        <h3 className="font-bold text-lg">IT Technical Support</h3>
        <h4 className="italic">Taytay, Rizal, Philippines</h4>
        <p>TBD</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="text-black dark:text-white"
        contentStyle={workContentStyle}
        contentArrowStyle={workArrowStyle}
        date="October 2021 - January 2023"
        iconStyle={{ background: '#1e40af', color: '#fff' }}
        icon={<Work />}
      >
        <div className="flex items-center gap-4 mb-2">
          <img
            src={ ConvergeLogo } alt="converge"
            className="w-12 h-12 object-contain rounded"
          />
          <div>
            <h3 className="font-bold text-lg">Enterprise Support Engineer</h3>
            <h4 className="italic">Pasig, NCR, Philippines</h4>
          </div>
        </div>
        <p>TBD</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="text-black dark:text-white"
        contentStyle={workContentStyle}
        contentArrowStyle={workArrowStyle}
        date="September 2020 - March 2021"
        iconStyle={{ background: '#1e40af', color: '#fff' }}
        icon={<Work />}
      >
        <h3 className="font-bold text-lg">Barista/Service Crew</h3>
        <h4 className="italic">Pasig, NCR, Philippines</h4>
        <p>TBD</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="text-black dark:text-white"
        contentStyle={educationStyle}
        contentArrowStyle={{ borderRight: '7px solid #be185d' }}
        date="March 2020"
        iconStyle={{ background: '#be185d', color: '#fff' }}
        icon={<School />}
      >
        <h3 className="font-bold text-lg">Graduation</h3>
        <h4 className="italic">Bachelor of Science in Information Technology</h4>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="text-black dark:text-white"
        contentStyle={educationStyle}
        contentArrowStyle={{ borderRight: '7px solid #be185d' }}
        date="July 2019 - September 2019"
        iconStyle={{ background: '#be185d', color: '#fff' }}
        icon={<School />}
      >
        <h3 className="font-bold text-lg">IT - Internship</h3>
        <h4 className="italic">Taytay, Rizal, Philippines</h4>
        <p>TBD</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="text-black dark:text-white"
        contentStyle={educationStyle}
        contentArrowStyle={{ borderRight: '7px solid #be185d' }}
        date="March 2015"
        iconStyle={{ background: '#be185d', color: '#fff' }}
        icon={<School />}
      >
        <h3 className="font-bold text-lg">Bachelor of Science in Information Technology</h3>
        <h4 className="italic">Our Lady of Fatima University - Antipolo Campus</h4>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: '#10b981', color: '#fff' }}
        icon={<Star />}
      />
    </VerticalTimeline>
  );
}
