import { FaYoutube, FaFacebook, FaInstagram, FaDiscord, FaGithub, FaWhatsapp } from 'react-icons/fa';

function App() {
  return (
    <>
      <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/ahad.jpg')"
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>

        <div className="relative flex flex-col items-center justify-center min-h-screen p-4 bg-transparent">
          <div className="text-center mb-6">
            <img 
              src="/images/ahad.ico" 
              alt="Ahad Icon" 
              className="w-24 h-24 rounded-full border-4 border-gray-300 object-cover"
            />
            <p className="font-bold text-xl text-white mt-4 -ml-8">@codespacecadet</p>
          </div>

          <div className="w-full max-w-xs">
            <p className="text-center mb-4 text-white text-gray-700">Click on the links below to connect with me:</p>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://youtube.com/@codespacecadet?si=UdFs1SyHptNvrUwk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-red-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-red-700 transition"
                >
                  <FaYoutube className="mr-3" /> YouTube
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/share/16EvinmePg/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
                >
                  <FaFacebook className="mr-3" /> Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/codespacecadet?igsh=MXE0ZWlybjQ5amxm&utm_source=qr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-pink-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-pink-600 transition"
                >
                  <FaInstagram className="mr-3" /> Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://discord.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-gray-800 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-gray-900 transition"
                >
                  <FaDiscord className="mr-3" /> Discord
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/backendfrontflip" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-gray-900 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-black transition"
                >
                  <FaGithub className="mr-3" /> GitHub
                </a>
              </li>
              <li>
                <a 
                  href="https://www.frontendmentor.io/profile/backendfrontflip" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-gray-900 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-black transition"
                >
                  <img src="/images/favicon-32x32.png" className="mr-3 w-6" alt="Frontend Mentor"/> Frontend Mentor
                </a>
              </li>
            </ul>

            <p className="text-center mt-6 text-gray-700 text-white">Join my WhatsApp community for future updates:</p>
            <a 
              href="https://whatsapp.com/channel/0029Vb0vcoe9hXF7iWy5qA0y" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full mt-4 bg-green-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-green-600 transition"
            >
              <FaWhatsapp className="mr-3" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
