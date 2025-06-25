export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-underground-dark text-white p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold text-underground-graffiti mb-4">
          Contactanos
        </h1>
        <p className="mb-2">📧 Email: <a href="ventas@gst3d.com" className="underline text-underground-neon">ventas@gst3d.com</a></p>
        <p className="mb-2">📱 WhatsApp: <a href="https://wa.me/3764834630" target="_blank" className="underline text-underground-neon">+3764834630</a></p>
        <p className="mt-6 text-sm text-underground-humo">Respondemos de lunes a viernes de 8 a 16hs.</p>
      </div>
    </div>
  );
}
