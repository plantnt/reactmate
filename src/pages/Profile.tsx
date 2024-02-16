export default function Profile() {
    return (
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-48 object-cover rounded-full mx-auto"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                User Name
              </div>
              <p className="mt-2 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              </p>
              <div className="mt-4 flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Abrir Foro
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                  Ver Productos
                </button>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                  Modificar Perfil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }