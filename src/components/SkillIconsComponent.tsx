type SkillIconProps = {
  icon: {
    path: string;
    hex: string;
  };
};

export default function SkillIconsComponent({ icon }: SkillIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-12 h-12"
      fill={`#${icon.hex}`}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
