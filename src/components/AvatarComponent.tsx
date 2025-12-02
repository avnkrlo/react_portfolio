import { Avatar } from "flowbite-react";
import photo from '../assets/Aivan.jpg';

export default function AvatarComponent() {
    return (
        <div className="flex flex-wrap gap-2">
            <Avatar img={photo} size="xl" rounded />
        </div>
    );
}