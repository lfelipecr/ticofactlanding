import { useEffect } from "react";

export default function Signup() {
  useEffect(() => {
    // Redirigir a la página de signup externa
    window.location.href = "https://login.factico.net/signup";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <p className="text-gray-600 mb-4">Redirigiendo a registro...</p>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    </div>
  );
}
