const Resume = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl p-8 shadow-xl rounded-2xl bg-white text-center">
        <h1 className="text-3xl font-bold text-gray-800">Download My Resume</h1>
        <p className="text-gray-600 mt-2">
          Click below to download a PDF copy of my resume.
        </p>
        <a
          href="/Simone Liu - Resume 2025.pdf"
          download
          className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded-md"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Resume;
