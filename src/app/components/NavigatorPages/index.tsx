//este le dejamos casi identico a sim.
import Link from "next/link";
import "./styles.css";

const NavigatorPages = () => {

  type LinkType = {
    name: string; 
    link: string; 
  };


  const enlaces: LinkType[] = [
    { name: "Personajes", link: "/characters" },
    { name: "Lugares", link: "/locations" },
    { name: "Episodios", link: "/episodes" },
  ];

  return (
    <nav className="nav">
      {enlaces.map((e) => (
        <Link key={e.link} href={e.link}>
          {e.name}
        </Link>
      ))}
    </nav>
  );
};

export default NavigatorPages;
