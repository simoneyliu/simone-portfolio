const Experience = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="w-full max-w-4xl p-8 shadow-xl rounded-2xl bg-white">
        <h1 className="text-3xl font-bold text-gray-800">Work Experience</h1>
        <div className="mt-4 space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              Reprise (07/2021 – Present)
            </h2>
            <p className="text-gray-600 font-medium">
              Senior Software Engineer
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Led cloud migration from PostgreSQL to GCP & Azure.</li>
              <li>
                Managed a core product, ensuring scalability and stability.
              </li>
              <li>Mentored junior engineers and participated in hiring.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-700">
              Robomatter (01/2020 – 06/2021)
            </h2>
            <p className="text-gray-600 font-medium">Staff Software Engineer</p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Developed VEXcode VR, used by 1M+ students worldwide.</li>
              <li>Created cross-platform applications for education.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
