type IconProps = { className?: string };

function Svg({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className ?? "h-6 w-6"}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function TyreIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.2" />
      <path d="M12 3.5v2.2M12 18.3v2.2M3.5 12h2.2M18.3 12h2.2M6.1 6.1l1.5 1.5M16.4 16.4l1.5 1.5M6.1 17.9l1.5-1.5M16.4 7.6l1.5-1.5" />
    </Svg>
  );
}

function WheelsIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.2" />
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 3.8 13.4 9.6M20.2 12 14.4 13.4M12 20.2 10.6 14.4M3.8 12 9.6 10.6M16.8 5.8 14.1 10.4M18.2 16.8 13.6 14.1M7.2 18.2 9.9 13.6M5.8 7.2 10.4 9.9" />
    </Svg>
  );
}

function AlignmentIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 8h16M4 16h16" />
      <path d="M7 5.5 4 8l3 2.5M17 5.5 20 8l-3 2.5M7 13.5 4 16l3 2.5M17 13.5 20 16l-3 2.5" />
    </Svg>
  );
}

function BalancingIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.2" />
      <path d="M12 4v16M8 8.5h8M8 15.5h8" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </Svg>
  );
}

function BrakeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="12" cy="12" r="8.2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4.8v2.4M12 16.8v2.4M4.8 12h2.4M16.8 12h2.4" />
    </Svg>
  );
}

function LogbookIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 4.5h9.5A1.5 1.5 0 0 1 18 6v14H8.5A1.5 1.5 0 0 1 7 18.5V4.5Z" />
      <path d="M7 4.5A1.5 1.5 0 0 0 5.5 6v12.5H7M10 9h5M10 12.5h5M10 16h3.5" />
    </Svg>
  );
}

function MechanicalIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M14.2 6.2 17.8 9.8M16 5l3 3 1.4-1.4a2 2 0 0 0 0-2.8L18.2 1.6a2 2 0 0 0-2.8 0L14 3" />
      <path d="M13.5 8.5 4.8 17.2a2 2 0 0 0 0 2.8l.2.2a2 2 0 0 0 2.8 0L16.5 11.5" />
    </Svg>
  );
}

function BatteryIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3.5" y="7" width="15.5" height="10.5" rx="1.6" />
      <path d="M19 10.2h1.6v3.6H19M8.5 12.2h2.4M13.2 10.6v3.2M14.8 12.2h.1" />
    </Svg>
  );
}

function FourByFourIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M3.5 15.5h17" />
      <path d="M5 15.5 6.8 10h6.7l3.7 5.5" />
      <path d="M4.8 15.5V18M19.2 15.5V18" />
      <circle cx="7.2" cy="18.2" r="1.6" />
      <circle cx="16.8" cy="18.2" r="1.6" />
      <path d="M3.8 8.2 7 5.8h4.2" />
    </Svg>
  );
}

function PinkSlipIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7 4h8l3 3v13H7V4Z" />
      <path d="M15 4v3h3M9.2 12.2 11 14l3.8-4" />
    </Svg>
  );
}

function AirConIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.5v17M5.2 7.2l13.6 9.6M5.2 16.8 18.8 7.2" />
      <circle cx="12" cy="12" r="2.1" />
    </Svg>
  );
}

function SuspensionIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.5v3.2M8.5 6.7h7M8.8 9.2h6.4M8.8 11.6h6.4M8.8 14h6.4M12 16.2V20.5M8.5 20.5h7" />
    </Svg>
  );
}

function CertifiedIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 3.2 14.4 5l2.8.4.8 2.7 2.1 1.9-1 2.6.6 2.8-2.5 1.3-1.6 2.5-2.8-.6L12 20.8l-1.8-2-2.8.6-1.6-2.5-2.5-1.3.6-2.8-1-2.6 2.1-1.9.8-2.7 2.8-.4L12 3.2Z" />
      <path d="m9.2 12.2 1.9 1.9 3.8-4" />
    </Svg>
  );
}

function PriceIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 6.2v1.4M12 16.4v1.4" />
      <path d="M9.4 15.2c.6.9 1.5 1.4 2.6 1.4 1.6 0 2.8-1 2.8-2.3 0-3.2-5.6-1.6-5.6-4.6 0-1.2 1.1-2.3 2.7-2.3 1.2 0 2.1.5 2.6 1.4" />
      <circle cx="12" cy="12" r="8.2" />
    </Svg>
  );
}

function FastIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 13.5h6.2L9.4 20.5 19 10.5h-6.2L14.6 3.5 5 13.5Z" />
    </Svg>
  );
}

function RatedIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="m12 3.8 2.1 4.4 4.8.7-3.5 3.4.8 4.8L12 14.8 7.8 17.1l.8-4.8-3.5-3.4 4.8-.7L12 3.8Z" />
    </Svg>
  );
}

function PhoneGlyph(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M7.2 3.8h2.6l1 4.1-1.7 1.1a12.5 12.5 0 0 0 5.9 5.9l1.1-1.7 4.1 1v2.6c0 .8-.7 1.6-1.6 1.6C10.4 18.4 5.6 13.6 5.6 5.4c0-.9.8-1.6 1.6-1.6Z" />
    </Svg>
  );
}

export const tyreAutoIcons = {
  tyre: TyreIcon,
  wheels: WheelsIcon,
  alignment: AlignmentIcon,
  balancing: BalancingIcon,
  brakes: BrakeIcon,
  logbook: LogbookIcon,
  mechanical: MechanicalIcon,
  battery: BatteryIcon,
  fourByFour: FourByFourIcon,
  pinkSlip: PinkSlipIcon,
  airCon: AirConIcon,
  suspension: SuspensionIcon,
  certified: CertifiedIcon,
  price: PriceIcon,
  fast: FastIcon,
  rated: RatedIcon,
  phone: PhoneGlyph,
} as const;

export type TyreAutoIconKey = keyof typeof tyreAutoIcons;
