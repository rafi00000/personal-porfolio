
const Education = () => {
    const icon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-5 w-5"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );

    return (
        <div className="my-20 space-y-5">
            <h1 className="text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-red-600 to-pink-600 drop-shadow">Education</h1>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">{icon}</div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2019</time>
            <div className="text-lg font-black">SSC</div>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">{icon}</div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2019-current</time>
            <div className="text-lg font-black">Diploma In Computer Technology</div>
          </div>
          <hr />
        </li>
      </ul>
        </div>
    );
};

export default Education;