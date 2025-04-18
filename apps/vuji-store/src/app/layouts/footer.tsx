export function Footer() {
  return (
    <footer className="mt-20 bg-gray-900 py-4 text-sm text-white/50">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Vuji Store. All rights reserved.</p>
        <p>
          Follow me on{' '}
          <a href="https://www.linkedin.com/in/imdatdev" className="text-blue-400 hover:underline">
            LinkedIn
          </a>{' '}
          and{' '}
          <a
            href="https://github.com/datdevs
          "
            className="text-blue-400 hover:underline"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          Designed with ❤️ by{' '}
          <a href="https://imdat.dev" className="text-blue-400 hover:underline">
            Dat
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
