import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Work, School, Star } from '@mui/icons-material';
import ConvergeLogo from '../assets/work_logo/converge-logo.jpg';
import KhidmahLogo from '../assets/work_logo/khidmah-logo.jpg';
import MonheimLogo from '../assets/work_logo/monheim-logo.jpg';
import CckLogo from '../assets/work_logo/cck-logo.png';
import VnlbrwLogo from '../assets/work_logo/vnl-brw-logo.png';
import OlfuLogo from '../assets/work_logo/olfu-logo.jpg';

export default function AlternateTimeline() {
  return (
    <VerticalTimeline lineColor="#3b82f6">
      <VerticalTimelineElement
        contentStyle={{
          background: '#0f172a',
          color: '#f8fafc',
          textAlign: 'start',
          padding: '2rem',
          border: '1px solid #334155',
          borderRadius: '0.75rem',
        }}
        contentArrowStyle={{ borderRight: '7px solid #be185d' }}
        date="May 2025 - Present"
        iconStyle={{ background: '#1eaf56ff', color: '#fff' }}
        icon={<Work/>}
      >
        <div className="flex flex-col items-center mb-4">
          <img
            src={KhidmahLogo}
            alt="Khidmah Logo"
            className="w-20 sm:w-24 h-auto object-contain rounded mb-2 drop-shadow-md brightness-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-white">Concierge</h3>
          <p className="italic text-gray-300 text-sm sm:text-base">Abu Dhabi, United Arab Emirates</p>
        </div>

        <ul className="list-disc pl-5 mt-3 space-y-2 text-white text-left text-sm sm:text-base">
          <li>Managed front desk operations by assisting minimum of 120 visitors, deliveries, 
            contractors, and guests daily, ensuring smooth check-ins, apartment bookings, and 
            service requests while maintaining professional customer experience.
          </li>
          <li>Maintained 98% accurate visitor, guest, and delivery records in compliance with company 
            policies and data privacy standards, minimizing documentation errors and ensuring 
            efficient tracking.
          </li>
          <li>Coordinated maintenance requests, resident concerns, and service provider access, 
            monitoring cases through completion to support timely issue resolution and high resident 
            satisfaction.
          </li>
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
        date="January 2023 - February 2025"
        iconStyle={{ background: '#1e40af', color: '#fff' }}
        icon={<Work/>}
      >
        <div className="flex flex-col items-center mb-4">
          <img
            src={CckLogo}
            alt="cck"
            className="w-20 sm:w-24 h-auto object-contain rounded mb-2 drop-shadow-md brightness-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-white">Software Engineer</h3>
          <p className="italic text-gray-300 text-sm sm:text-base">Pasig, Philippines</p>
        </div>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-white text-left text-sm sm:text-base">
          <li>Collaborated in the development of an internal Inventory Management System using 
            Laravel, PHP, JavaScript, and MySQL, implementing modules for company asset tracking, 
            management, and reporting dashboards.
          </li>
          <li>Developed an internal administrative dashboard using Google Apps Script and Google 
            Sheets, adding search, filtering, and multilingual features for 500+ student records, 
            reducing manual lookup time by approximately 40%.
          </li>
          <li>Built a C# (.NET) desktop application with Excel import/export and barcode scanner 
            integration, allowing staff to quickly retrieve student records and update payment 
            statuses while replacing manual lookup processes.
          </li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{
          background: '#0f172a',
          color: '#f8fafc',
          textAlign: 'start',
          padding: '2rem',
          border: '1px solid #334155',
          borderRadius: '0.75rem',
        }}
        contentArrowStyle={{ borderRight: '7px solid #be185d' }}
        date="October 2021 - January 2023"
        iconStyle={{ background: '#1e40af', color: '#fff' }}
        icon={<Work/>}
      >
        <div className="flex flex-col items-center mb-4">
          <img
            src={ConvergeLogo}
            alt="converge"
            className="w-20 sm:w-24 h-auto object-contain rounded mb-2 drop-shadow-md brightness-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-white">L1 Enterprise Support Engineer</h3>
          <p className="italic text-gray-300 text-sm sm:text-base">Pasig, Philippines</p>
        </div>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-white text-left text-sm sm:text-base">
          <li>Created and responded to 50–100 service requests daily related to internet connectivity, whether slow, intermittent or no connection.</li>
          <li>Accurately logged incidents, attached photos of monitoring taken, and escalated to proper team via OTRS and Viber if customer issue persists.</li>
          <li>Communicated emergency outages full details to affected clients including actions taken by field engineers and estimated time of restoration.</li>
          <li>Collaborated with field engineers and NOC to dispatch support and restore fiber internet services, reducing downtime by 25%.</li>
          <li>Assisting clients through the standard documented troubleshooting procedure, improving first-call resolution rates.</li>
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
        date="September 2020 - March 2021"
        iconStyle={{ background: '#1e40af', color: '#fff' }}
        icon={<Work/>}
      >
        <div className="flex flex-col items-center mb-4 text-white">
          <img
            src={VnlbrwLogo}
            alt="vnlbrw"
            className="w-20 sm:w-24 h-auto object-contain rounded mb-2 drop-shadow-md brightness-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold">Barista/Service Crew</h3>
          <h4 className="italic text-sm sm:text-base">Pasig, Philippines</h4>
        </div>
        <ul className="list-disc pl-5 mt-3 space-y-2 text-white text-left text-sm sm:text-base">
          <li>Managing supplies strictly ensuring first in, first out & coordinating with the shop owner for low level supplies.</li>
          <li>Take customer orders, suggests best sellers, prepare food & specialty beverages.</li>
          <li>Handles cash and process payments accurately.</li>
          <li>Maintain cleanliness of the counter, dining area, and equipment.</li>
        </ul>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{
          background: '#0f172a',
          color: '#f8fafc',
          textAlign: 'start',
          padding: '2rem',
          border: '1px solid #334155',
          borderRadius: '0.75rem',
        }}
        contentArrowStyle={{ borderRight: '7px solid #be185d' }}
        date='March 2020'
        iconStyle={{ background: '#be185d', color: '#fff' }}
        icon={<School/>}
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
        icon={<School/>}
      >
        <div className="flex flex-col items-center mb-4">
          <img
            src={MonheimLogo}
            alt="monheim"
            className="w-20 sm:w-24 h-auto object-contain rounded mb-2 drop-shadow-md brightness-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-white">IT Staff - Internship</h3>
          <h4 className="italic text-gray-300 text-sm sm:text-base">Taytay, Rizal, Philippines</h4>
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
          textAlign: 'start',
          padding: '2rem',
          border: '1px solid #334155',
          borderRadius: '0.75rem',
        }}
        contentArrowStyle={{ borderRight: '7px solid #be185d' }}
        date='March 2015'
        iconStyle={{ background: '#be185d', color: '#fff' }}
        icon={<School/>}
      >
        <div className="flex flex-col items-center mb-4">
          <img
            src={OlfuLogo}
            alt="OLFU Logo"
            className="w-20 sm:w-24 h-auto object-contain rounded mb-2 drop-shadow-md brightness-125"
          />
          <h3 className="text-lg sm:text-xl font-semibold text-white">Bachelor of Science in Information Technology</h3>
          <h4 className="italic text-gray-300 text-sm sm:text-base">Our Lady of Fatima University - Antipolo Campus</h4>
        </div>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: '#10b981', color: '#fff' }}
        icon={<Star/>}
      />
    </VerticalTimeline>
  );
}
