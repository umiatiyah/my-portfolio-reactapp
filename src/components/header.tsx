export default function Header() {
  return (
    <header className="bg-gray-800 py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Umi Atiyah</h1>
        <p className="text-lg mt-2">Software Engineer</p>
        <a
          className="text-blue-500 hover:underline mt-4 inline-block"
          href="https://github.com/umiatiyah"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </header>
  );
}
