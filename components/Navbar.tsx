import { navItems } from "@/lib/constants"
import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import { ThemeToggleSwitch } from "./ThemeToggleSwitch"
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="shrink-0">
                <Link href="/" className="text-xl font-serif font-bold text-foreground">Nx Blog</Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
                {navItems.map(item => (
                    <Link href={item.href} key={item.name} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-200">{item.name}</Link>
                ))}

                {/* Toggle */}
                <ThemeToggle />
            </div>

            {/* Mobile Nav */}
            <MobileNav />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
