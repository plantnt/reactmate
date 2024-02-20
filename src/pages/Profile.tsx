export default function Profile() {
    return (
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <br></br><br></br>
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-48 object-cover rounded-lg mx-auto"
                src="https://via.placeholder.com/150"
                alt="Profile"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-bold">
                donjuan700
              </div>
              <p className="text-indigo-700 flex">VENDEDOR<img width="15px" src="src/assets/cartIcon.png"></img></p>
              <p className="mt-2 text-gray-600">
                Esta es la página destinada para mostrar los datos introducidos en el registro
                como un usuario completo, desde la vista del usuario primario en su propia página
              </p>
              <br></br>
              <div className="mt-4 flex justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Abrir Foro
                </button>       
                  <a href="http://localhost:3000/"><button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Ver Productos</button></a>
                <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                  Opciones... desplegable</button>
              </div>
            </div>
            <div className="p-4 text-gray-600">Fecha de registro: 20 Febrero 2024</div>
          </div>
        </div>
      </div>
    );
  }