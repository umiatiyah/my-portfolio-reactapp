export default function Header({user_profile}:IUserProfile) {
  return (
    <header className="bg-gray-800 py-10">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">{user_profile.fullname}</h1>
        <p className="text-lg mt-2">{user_profile.current_job}</p>
        <a
          className="text-blue-500 hover:underline mt-4 inline-block"
          href={user_profile.github_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </header>
  );
}
