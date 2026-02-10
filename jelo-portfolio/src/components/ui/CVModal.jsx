import { X } from "lucide-react";

const CVModal = ({ isOpen, onClose, pdfPath }) => {

  if (!isOpen) return null;


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
      style={{ animation: "fadeIn 0.3s ease-out" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden"
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

        <div className="w-full h-[calc(100%-128px)] overflow-auto bg-gray-900 flex items-center justify-center p-4">
            <iframe
              src={pdfPath}
              className="w-full h-[80vh] rounded-lg shadow-2xl"
              title="Resume Preview"
            />
        </div>
      </div>
    </div>
  );
};

export default CVModal;