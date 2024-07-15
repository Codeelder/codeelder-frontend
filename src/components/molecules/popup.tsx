import { X } from "lucide-react";

export const Popup = ({ show, onClose }: any) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-bgPrimary bg-opacity-50 z-50">
      <div className="relative bg-secondary p-5 rounded shadow-lg w-72 max-w-md mx-auto popup-container">
        <h2 className="text-2xl font-bold mb-4">Selamat Datang!</h2>
        <p>
          Terima Kasih sudah mengunjungi Codeelder, saat ini Portofolio kami
          sedang dalam tahap pengembangan, pantau terus sosial media kami untuk
          update selanjutnya!.
        </p>
        <span className="animate-ping absolute -right-3 -top-3 rounded-full w-10 h-10 bg-zinc-700 opacity-75"></span>
        <button className="absolute bg-zinc-700 rounded-full p-1 -right-2 -top-2" onClick={onClose}>
          <X></X>
        </button>
      </div>
    </div>
  );
};
