const links = ["Company", "About Us", "Team", "Products", "Blog", "Pricing"];
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 py-28">
      <div className="container mx-auto flex flex-col items-center">
        <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
          {links.map((link, index) => (
            <ul key={index}>
              <li>
           
                  {link}

              </li>
            </ul>
          ))}
        </div>
      
          Copyright &copy; {currentYear} NextGenTale
        
      </div>
    </footer>
  );
}
export default Footer;