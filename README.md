# Understandig UseState Usage In Navbar

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


# Learning From Making About Section 
 
 ### Why we used <section> instead of <div>?

- <section> = explicitly tells browsers, developers, and assistive technologies that this is a thematic grouping of content.
- <div> = it's just a generic container
 
 ### Understanding Tailwind CSS

- flex-col-reverse = Stacks children vertically in reverse order (image first, then text on mobile)
- md:flex-row = Horizontal layout on medium screens (side by side)
- items-center = Centers items vertically
- justify-between = Distributes space between items (pushes them to opposite ends)

- text-center = Centers text on mobile
- md:w-1/2 = Takes 50% width on medium screens
- md:text-left = Left-aligns text on medium screens
- mt-8 = Top margin of 2rem (32px)
- md:mt-0 = Removes top margin on medium screen

### Why do we use span?
- <span> = is a generic inline container used to apply styles or JavaScript to a specific portion of text without breaking the flow.
- <div> = breaks the line and create a new one

#### Why do we used <a> not <button>?
 - <a href="...">DOWNLOAD CV</a>  // ✅ Link to a file
    vs
   <button>DOWNLOAD CV</button>    // ❌ Performs an action

