import { Link } from 'react-router-dom';
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function btnDownloadCV() {
    return (
        <Link to={`${import.meta.env.BASE_URL}Aivan Karlo Geronimo.pdf.pdf`} target='_blank' download 
        className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
            <HiOutlineDocumentDownload/>Download CV
        </Link>
    );
};