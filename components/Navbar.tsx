import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" width={75} height={29} alt="Logo" />
        <ul className="hidden h-full gap-12 lg:flex"></ul>
      </Link>
    </nav>
  );
}
