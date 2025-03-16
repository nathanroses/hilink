import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { useState } from "react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
          onClick={() => console.log("Login clicked")}
        />
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <Image 
          src="/menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl py-4 lg:hidden z-50">
          <ul className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link 
                href={link.href} 
                key={link.key} 
                className="regular-16 text-gray-50 cursor-pointer transition-all hover:font-bold w-full text-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 w-full px-8">
              <Button 
                type="button"
                title="Login"
                icon="/user.svg"
                variant="btn_dark_green"
                full
                onClick={() => console.log("Login clicked")}
              />
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
