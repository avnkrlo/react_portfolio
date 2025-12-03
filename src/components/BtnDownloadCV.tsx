import { Link } from 'react-router-dom';
import Cv from '../assets/cv/Resume - Aivan Karlo Geronimo.pdf';
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function btnDownloadCV() {
    return (
        <Link to={Cv} target='_blank' download
            className="inline-flex items-center px-4 py-2 text-md text-left text-white bg-blue-700 border border-blue-500 rounded-lg space-x-5 hover:text-white sm:ms-4 hover:bg-transparent focus:ring-4 focus:ring-blue-700">
                <HiOutlineDocumentDownload/> Download CV
        </Link>
    );
};