import Link from "next/link";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

interface Social {
    label: string;
    Icon: React.ComponentType<{ className: string }>;
    href: string;
}
  
const socialLinks: Social[] = [
    {label: 'Instagram', Icon: FaInstagram, href: 'https://instagram.com/mathildecudeville'},
    // {label: 'Facebook', Icon: FaFacebook, href: 'https://facebook.com/2regards'},
    // {label: 'YouTube', Icon: FaYoutube, href: 'https://youtube.com/@2regards'},
];

export default function Socials () {
    return (
      <>
        {socialLinks.map(({label, Icon, href}) => (
          <Link
            aria-label={label}
            className="-m-1.5 rounded-md p-1.5 transition-all duration-300sm:-m-3 sm:p-3"
            href={href}
            key={label}>
            <Icon className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />
          </Link>
        ))}
      </>
    );
  };