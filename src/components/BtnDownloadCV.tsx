import { Link } from 'react-router-dom';
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function btnDownloadCV() {
    return (
        <Link to={`${import.meta.env.BASE_URL}Aivan Karlo Geronimo.pdf.pdf`} target='_blank' download 
        className="inline-flex items-center px-5 py-5 text-md text-left text-white bg-blue-700 border border-blue-500 rounded-lg center-center hover:text-white sm:ms-4 hover:bg-transparent focus:ring-4 focus:ring-blue-700">
            <HiOutlineDocumentDownload/>Download CV
        </Link>
    );
};