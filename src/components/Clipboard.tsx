import { ClipboardWithIcon } from "flowbite-react";

export default function Clipboard() {
  return (
    <div className="flex">
      <div className="relative items-center space-x-10">
        <label htmlFor="email" className="sr-only">
          Label
        </label>
        <input
          id="email"
          type="text"
          className="rounded-lg p-2 text-sm text-white bg-transparent border-0"
          value="aivan.karlo28@gmail.com"
          disabled
          readOnly
        />
        <ClipboardWithIcon valueToCopy="aivan.karlo28@gmail.com" className="mr-2"/>
      </div>
    </div>
  );
}
