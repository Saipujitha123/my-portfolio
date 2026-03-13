import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-950 bg-opacity-90 z-50 px-8 py-4 flex justify-between items-center border-b border-gray-800">
      <h1 className="text-xl font-bold text-purple-400">Sai Pujitha</h1>
      <ul className="flex gap-6 text-sm text-gray-300">
        {['about','skills','projects','experience','contact'].map(s => (
          <li key={s}>
            <Link to={s} smooth={true} duration={500}
              className="cursor-pointer hover:text-purple-400 capitalize transition">
              {s}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}