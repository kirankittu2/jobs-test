import NavLinks from "./nav-links";

export default function Navbar({ setServiceHovered, servicesHovered }) {
  return (
    <header>
      <ul className="main-nav">
        <NavLinks
          setServiceHovered={setServiceHovered}
          servicesHovered={servicesHovered}
        />
      </ul>
    </header>
  );
}
