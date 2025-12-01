import { Avatar } from "flowbite-react";
import photo from '../assets/Aivan.png';

export default function AvatarComponent() {
    return (
        <div className="flex flex-wrap gap-2">
            <Avatar img={photo} size="xl" rounded />
        </div>
    );
}