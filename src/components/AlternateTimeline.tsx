import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function AlternateTimeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work text-black dark:text-white"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="May 2025 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Concierge/Receptionist</h3>
        <h4 className="vertical-timeline-element-subtitle">UAE, Abu Dhabi</h4>
        <p>
          TBD
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work text-black dark:text-white"
        date="January 2023 - February 2025"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">IT Technical Support</h3>
        <h4 className="vertical-timeline-element-subtitle">Taytay, Rizal, Philippines</h4>
        <p>
          TBD
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work text-black dark:text-white"
        date="October 2021 - January 2023"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Enterprise Support Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Pasig, NCR, Philippines</h4>
        <p>
          TBD
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work text-black dark:text-white"
        date="September 2020 - March 2021"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Barista/Service Crew</h3>
        <h4 className="vertical-timeline-element-subtitle">Pasig, NCR, Philippines</h4>
        <p>
          TBD
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="March 2020"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Graduation</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor of Science in Informaton Technology</h4>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="July 2019 - September 2019"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">IT - Internship</h3>
        <h4 className="vertical-timeline-element-subtitle">Taytay, Rizal, Philippines</h4>
        <p>
          TBD
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="March 2015"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Bachelor of Science in Information Technology</h3>
        <h4 className="vertical-timeline-element-subtitle">Our Lady of Fatima University - Antipolo Campus</h4>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        // icon={<StarIcon />}
      />
    </VerticalTimeline>
  )
}

