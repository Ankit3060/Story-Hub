export default function Magnifier({ hoveredText }) {
    return (
      <div className="fixed top-16 right-10 bg-white p-4 shadow-lg rounded-lg w-120 dark:bg-gray-700">
        <h3 className="font-semibold text-orange-600 mb-2 dark:text-orange-400">Magnified Text</h3>
        <p className="text-2xl text-gray-800 dark:text-gray-200">{hoveredText}</p>
      </div>
    );
  }