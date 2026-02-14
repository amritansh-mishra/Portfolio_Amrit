# Understandig UseState Usage

## [menuOpen,setMenuOpen] = useState(false)

- Initial: menuOpen = false (menu hidden)
   ↓
User clicks hamburger
   ↓
setMenuOpen(true) called
   ↓
Component re-renders
   ↓
menuOpen = true (menu visible)

## [activeSection,setActiveSection] = useState("")

- Tracks which navigation section is currently active

-Initial: activeSection = "" (nothing highlighted)
   ↓
User clicks "About"
   ↓
setActiveSection("about")
   ↓
Component re-renders
   ↓
"About" menu item turns orange (#fca311)

- Update active section when menu item clicked

   const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId); // e.g., "about"
        setMenuOpen(false);
    };

- Apply highlighting based on active section

        <li className={`${
        activeSection === item.id ? "text-[#fca311]" : "text-[#e9d7d7]"
        }`}>

## UseEffects (Scroll Listener)

1. The Effect Function
-  const handleScroll = () => {
  setIsScroll(window.scrollY > 50);
};
- Checks if user scrolled more than 50 pixels
  If yes: setIsScroll(true) → navbar gets background
  If no: setIsScroll(false) → navbar stays transparent

2. Adding Event Listener
-  window.addEventListener("scroll", handleScroll);
   
   Attaches the scroll listener when component mounts
   Runs handleScroll every time user scrolls

3. Cleanup Function
- return () => window.removeEventListener("scroll", handleScroll);
  Removes the scroll listener when component unmounts
  Critical to prevent memory leaks