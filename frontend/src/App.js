import React, { useState } from "react";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey((prev) => prev + 1); // Trigger image refresh
  };

  const handleToggleFullscreen = () => {
    const videoElement = document.getElementById("video-stream");
    if (!document.fullscreenElement) {
      videoElement.requestFullscreen().catch((err) => console.error(err));
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 p-4 shadow-lg">
        <h1 className="text-2xl font-bold text-center">Face Mesh Viewer</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-6 flex flex-col items-center">
        {/* Video Stream */}
        <div
          id="video-container"
          className="w-full md:w-3/4 lg:w-1/2 aspect-video border-4 border-gray-700 rounded-md overflow-hidden"
        >
          <img
            id="video-stream"
            key={refreshKey}
            src={`http://127.0.0.1:8000/video-stream?${refreshKey}`}
            alt="Face Mesh Stream"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Controls */}
        <div className="mt-4 flex justify-center space-x-4">
          <button
            onClick={handleRefresh}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
          >
            Refresh Stream
          </button>
          <button
            onClick={handleToggleFullscreen}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          >
            Toggle View
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 p-4">
        <p className="text-center text-gray-400">© 2024 Face Mesh Viewer</p>
      </footer>
    </div>
  );
}

export default App;
