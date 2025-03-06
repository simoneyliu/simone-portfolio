import { Link } from "react-router-dom";

const ResumeSite = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-4xl p-8 shadow-xl rounded-2xl bg-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img
            src="/profile.jpg"
            alt="Simone Liu"
            className="w-40 h-40 rounded-full object-cover border-4 border-gray-300"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Simone Liu</h1>
            <p className="text-gray-600">Senior Software Engineer</p>
            <p className="text-gray-500">Pittsburgh, Pennsylvania</p>
            <div className="mt-4 flex gap-4 flex-wrap">
              <Link
                to="/experience"
                className="px-4 py-2 bg-blue-600 text-white rounded-md text-center w-full sm:w-auto"
              >
                My Experience
              </Link>

              <a
                href="/Simone Liu - Resume 2025.pdf"
                download
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md text-center w-full sm:w-auto"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Technical Skills
          </h2>
          <p className="text-gray-600">
            JavaScript, TypeScript, Vue, React, Tailwind, Python (Django,
            Celery), PostgreSQL, GCP, Azure, Playwright
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeSite;
