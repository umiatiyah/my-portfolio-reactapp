export default function Navbar() {
  return (
    // <!-- Navigation -->
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-semibold">
          mee
        </a>
        <ul className="flex space-x-6">
          <li>
            <a href="#about" className="hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="hover:text-blue-500">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
