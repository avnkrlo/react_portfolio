import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Work, School, Star } from '@mui/icons-material';
import ConvergeLogo from '../assets/work_logo/converge-logo.jpg';
import KhidmahLogo from '../assets/work_logo/khidmah-logo.jpg';
import MonheimLogo from '../assets/work_logo/monheim-logo.jpg';
import VnlbrwLogo from '../assets/work_logo/vnl-brw-logo.png';
import OlfuLogo from '../assets/work_logo/olfu-logo.jpg';

export default function AlternateTimeline() {
  return (
    <VerticalTimeline lineColor="#3b82f6">
      <VerticalTimelineElement
        contentStyle={{
          background: '#0f172a',
          color: '#f8fafc',
          textAlign: 'center',
          padding: '2rem',
          border: '1px solid #334155',
          borderRadius: '0.75rem',
        }}
        contentArrowStyle={{ borderRight: '7px solid #0f172a' }}
        date={<span style={{ position: 'relative', left: '-2rem', top: '-0.25rem' }}>May 2025 - Present</span>}
        iconStyle={{ background: '#1eaf56ff', color: '#fff' }}
        icon={<Work fontSize="small" />}
      >
        <div className="flex flex-col items-center mb-4">
          <img
            src={KhidmahLogo}
            alt="Khidmah Logo"
            className="w-20 sm:w-24 h-auto object-contain rounded mb-2 drop-shadow-md brightness-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-white">Concierge/Receptionist</h3>
          <p className="italic text-gray-400 text-sm sm:text-base">UAE, Abu Dhabi</p>
        </div>

        <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-300 text-left text-sm sm:text-base">
          <li>Handled registration and verification of guests, deliveries, and contractors through the building system.</li>
          <li>Confirmed visitor legitimacy with homeowners or tenants to ensure proper access control.</li>
          <li>Coordinated with security during viewings to enforce building policies consistently.</li>
          <li>Addressed resident complaints professionally and escalated concerns to management.</li>
          <li>Prepared and submitted routine reports in line with supervisor requirements.</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{
          background: '#0f172a',
          color: '#f8fafc',
          textAlign: 'center',
          padding: '2rem',
          border: '1px solid #334155',
          borderRadius: '0.75rem',
        }}
        contentArrowStyle={{ borderRight: '7px solid #0f172a' }}
        date="January 2023 - February 2025"
        iconStyle={{ background: '#1e40af', color: '#fff' }}
        icon={<Work fontSize="small" />}
      >
        <div className="flex flex-col items-center mb-4">
          <img
            src={MonheimLogo}
            alt="monheim"
            className="w-20 sm:w-24 h-auto object-contain rounded mb-2 drop-shadow-md brightness-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-white">IT Technical Support</h3>
          <p className="italic text-gray-400 text-sm sm:text-base">Taytay, Rizal, Philippines</p>
        </div>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-300 text-left text-sm sm:text-base">
          <li>Monitored and tracked IT assets to ensure accountability and system readiness.</li>
          <li>Onboarded new employees: assigned laptops, enrolled biometrics, and provided asset usage guidelines.</li>
          <li>Provided on-site support for desktop hardware: replaced/install parts (CPU, RAM, SSD, GPU, PSU, printers, etc.).</li>
          <li>Maintained key business apps including Microsoft Office, Outlook, Teams, and VPNs.</li>
          <li>Worked with developers to align server specs with project deployment requirements.</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{
          background: '#0f172a',
          color: '#f8fafc',
          textAlign: 'center',
          padding: '2rem',
          border: '1px solid #334155',
          borderRadius: '0.75rem',
        }}
        contentArrowStyle={{ borderRight: '7px solid #0f172a' }}
        date={<span style={{ position: 'relative', left: '-2rem', top: '-0.25rem' }}>October 2021 - January 2023</span>}
        iconStyle={{ background: '#1e40af', color: '#fff' }}
        icon={<Work fontSize="small" />}
      >
        <div className="flex flex-col items-center mb-4">
          <img
            src={ConvergeLogo}
            alt="converge"
            className="w-20 sm:w-24 h-auto object-contain rounded mb-2 drop-shadow-md brightness-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-white">Enterprise Support Engineer</h3>
          <p className="italic text-gray-400 text-sm sm:text-base">Pasig, NCR, Philippines</p>
        </div>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-300 text-left text-sm sm:text-base">
          <li>Delivered Tier 1 tech support to corporate clients via calls and email per SLA.</li>
          <li>Managed 50–100 daily tickets (150–200 during outages); logged and escalated via ticketing system.</li>
          <li>Coordinated with field teams to schedule Fiber repairs and estimate restoration timelines.</li>
          <li>Informed clients of outages during typhoons and other disruptions.</li>
          <li>Handled modem-level (Zyxel) troubleshooting; escalated beyond demarcation point.</li>
          <li>Contributed to internal troubleshooting guides and improved support quality.</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{
          background: '#0f172a',
          color: '#f8fafc',
          textAlign: 'center',
          padding: '2rem',
          border: '1px solid #334155',
          borderRadius: '0.75rem',
        }}
        contentArrowStyle={{ borderRight: '7px solid #0f172a' }}
        date="September 2020 - March 2021"
        iconStyle={{ background: '#1e40af', color: '#fff' }}
        icon={<Work fontSize="small" />}
      >
        <div className="flex flex-col items-center mb-4">
          <img
            src={VnlbrwLogo}
            alt="vnlbrw"
            className="w-20 sm:w-24 h-auto object-contain rounded mb-2 drop-shadow-md brightness-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-white">Barista/Service Crew</h3>
          <h4 className="italic text-gray-400 text-sm sm:text-base">Pasig, NCR, Philippines</h4>
        </div>
        <ul>
          <li>TBD</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{
          background: '#0f172a',
          color: '#f8fafc',
          textAlign: 'center',
          padding: '2rem',
          border: '1px solid #334155',
          borderRadius: '0.75rem',
        }}
        contentArrowStyle={{ borderRight: '7px solid #be185d' }}
        date={<span style={{ position: 'relative', left: '-2rem', top: '-0.25rem' }}>March 2020</span>}
        iconStyle={{ background: '#be185d', color: '#fff' }}
        icon={<School />}
      >
        <div className="flex flex-col items-center mb-4">
          <img
            src={OlfuLogo}
            alt="OLFU Logo"
            className="w-20 sm:w-24 h-auto object-contain rounded mb-2 drop-shadow-md brightness-125"
          />
          <h3 className="font-bold text-lg">Graduation</h3>
          <h4 className="italic">Bachelor of Science in Information Technology</h4>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{
          background: '#0f172a',
          color: '#f8fafc',
          textAlign: 'center',
          padding: '2rem',
          border: '1px solid #334155',
          borderRadius: '0.75rem',
        }}
        contentArrowStyle={{ borderRight: '7px solid #be185d' }}
        date="July 2019 - September 2019"
        iconStyle={{ background: '#be185d', color: '#fff' }}
        icon={<School />}
      >
        <div className="flex flex-col items-center mb-4">
          <img
            src={MonheimLogo}
            alt="monheim"
            className="w-20 sm:w-24 h-auto object-contain rounded mb-2 drop-shadow-md brightness-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-white">IT - Internship</h3>
          <h4 className="italic text-gray-400 text-sm sm:text-base">Taytay, Rizal, Philippines</h4>
        </div>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-300 text-left text-sm sm:text-base">
          <li>Assisting users with hardware and software issues, including troubleshooting problems in person.</li>
          <li>Helping with the setup, maintenance, and repair of computer systems and networks.</li>
          <li>Assisting in the installation and configuration of software applications and updates.</li>
          <li>Helping to diagnose and repair hardware issues, including desktops, laptops, printers, and other peripherals.</li>
          <li>Supporting network connectivity issues and assisting with network configuration tasks.</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{
          background: '#0f172a',
          color: '#f8fafc',
          textAlign: 'center',
          padding: '2rem',
          border: '1px solid #334155',
          borderRadius: '0.75rem',
        }}
        contentArrowStyle={{ borderRight: '7px solid #be185d' }}
        date={<span style={{ position: 'relative', left: '-2rem', top: '-0.25rem' }}>March 2015</span>}
        iconStyle={{ background: '#be185d', color: '#fff' }}
        icon={<School />}
      >
        <div className="flex flex-col items-center mb-4">
          <img
            src={OlfuLogo}
            alt="OLFU Logo"
            className="w-20 sm:w-24 h-auto object-contain rounded mb-2 drop-shadow-md brightness-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-white">Bachelor of Science in Information Technology</h3>
          <h4 className="italic text-gray-400 text-sm sm:text-base">Our Lady of Fatima University - Antipolo Campus</h4>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: '#10b981', color: '#fff' }}
        icon={<Star />}
      />
    </VerticalTimeline>
  );
}
