import { X, ZoomIn, ZoomOut, Download } from "lucide-react";
import { useState } from "react";

const CVModal = ({ isOpen, onClose, pdfPath }) => {
  const [scale, setScale] = useState(100);

  if (!isOpen) return null;

  const zoomIn = () => setScale((prev) => Math.min(prev + 20, 200));
  const zoomOut = () => setScale((prev) => Math.max(prev - 20, 50));

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfPath;
    link.download = "Dimaano-Jann-Angelo-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
      style={{ animation: "fadeIn 0.3s ease-out" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[95vh] bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <h3 className="text-xl font-bold flex items-center gap-2">
            Resume Preview
          </h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white hover:bg-opacity-20 rounded-full transition-all duration-300"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex items-center justify-between p-3 bg-gray-800 border-b border-gray-700 text-white">
          <div className="flex items-center gap-2">
            <span className="px-4 py-2 bg-gray-700 rounded-lg font-semibold text-sm">
              Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={zoomOut} className="p-2 hover:bg-gray-700 rounded-lg transition">
              <ZoomOut size={20} />
            </button>
            <span className="px-3 py-1 bg-gray-700 rounded-lg font-semibold">
              {scale}%
            </span>
            <button onClick={zoomIn} className="p-2 hover:bg-gray-700 rounded-lg transition">
              <ZoomIn size={20} />
            </button>
            <button
              onClick={handleDownload}
              className="ml-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition flex items-center gap-2 font-semibold"
            >
              <Download size={18} />
              Download
            </button>
          </div>
        </div>

        <div className="w-full h-[calc(100%-128px)] overflow-auto bg-gray-900 flex items-center justify-center p-4">
          <div style={{ width: `${scale}%`, transition: "width 0.3s ease" }}>
            <iframe
              src={pdfPath}
              className="w-full rounded-lg shadow-2xl"
              style={{ minHeight: "70vh", border: "none" }}
              title="Resume Preview"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVModal;