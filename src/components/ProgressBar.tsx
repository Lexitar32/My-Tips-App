export const ProgressBar = ({ milestone }: { milestone: string }) => {
  const milestones = ["Beginner", "Intermediate", "Pro", "Advanced"];
  const currentStep = milestones.indexOf(milestone);

  return (
    <div className="flex items-center">
      {milestones.map((step, index) => (
        <div key={step} className="flex items-center">
          {/* Circle */}
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full ${
              index <= currentStep
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-500"
            }`}
          >
            {index < currentStep ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : index === currentStep ? (
              <span className="w-2.5 h-2.5 bg-white rounded-full" />
            ) : null}
          </div>

          {/* Connector */}
          {index < milestones.length - 1 && (
            <div
              className={`w-16 h-1 ${
                index < currentStep ? "bg-black" : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};
