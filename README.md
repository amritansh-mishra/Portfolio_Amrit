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

  -  If your effect uses external resources (listeners, timers, subscriptions), always clean them up!

  - 
═════════════════════════════════════════════════════════════════

[Page Loads]
  ↓
Navbar component created
  ↓
menuOpen = false
activeSection = ""
isScroll = false
  ↓
Component renders to screen
  ↓
useEffect runs:
  - handleScroll function created
  - addEventListener("scroll", handleScroll)
  
═════════════════════════════════════════════════════════════════

[User scrolls down 60px]
  ↓
handleScroll fires
  ↓
window.scrollY = 60
60 > 50 = true
  ↓
setIsScroll(true)
  ↓
Component re-renders
  ↓
Navbar now has background blur
  
═════════════════════════════════════════════════════════════════

[User clicks "About"]
  ↓
handleMenuItemClick("about")
  ↓
setActiveSection("about")
  ↓
Component re-renders
  ↓
"About" menu item highlighted orange
  ↓
useEffect does NOT run (dependencies [] haven't changed)
  
═════════════════════════════════════════════════════════════════

[User navigates to different page]
  ↓
Navbar component unmounting
  ↓
useEffect cleanup runs:
  - removeEventListener("scroll", handleScroll)
  ↓
Navbar removed from DOM
  ↓
All state destroyed