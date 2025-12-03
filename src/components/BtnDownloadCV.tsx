import { Link } from 'react-router-dom';
import { HiOutlineDocumentDownload } from "react-icons/hi";

export default function btnDownloadCV() {
    return (
        <Link to={`${import.meta.env.BASE_URL}Aivan Karlo Geronimo.pdf.pdf`} target='_blank' download
            className="flex items-center justify-center gap-4 p-5 backdrop-blur-md bg-white/10 border border-blue-400 text-blue-400 rounded-md hover:bg-blue-500/20 transition">
            <HiOutlineDocumentDownload/> Download CV
        </Link>
    );
};