const Experience = () => {
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
    <div className="space-y-5">
      <h3 className="text-4xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-red-600 to-pink-600">
        Experience
      </h3>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">{icon}</div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">2021 - current</time>
            <div className="text-lg font-black">IT Support</div>
            <p>
              As an IT Support  at Lions Eye Hospital, I provided
              efficient technical assistance, maintained network infrastructure,
              and ensured seamless operation of IT systems. I conducted user
              training, enforced security measures, and collaborated with
              cross-functional teams, contributing to the hospitals commitment
              to delivering exceptional healthcare services.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">{icon}</div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">2023</time>
            <div className="text-lg font-black">Web Developing</div>
            In this time frame i was doing an Course for MERN Stack in Programming hero
          </div>
          <hr />
        </li>
        <li>
        <div className="timeline-middle">{icon}</div>
        </li>
      </ul>
    </div>
  );
};

export default Experience;
