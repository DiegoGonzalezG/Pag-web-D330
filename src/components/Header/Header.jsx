import Navbar from "../Navbar/Navbar";

export default function HeaderComponent() {
    const Logo = '/logoP.png';
    
    // Función para manejar la acción de búsqueda (si es necesario)
    const handleSearch = (e) => {
        e.preventDefault();
        const query = e.target.search.value;
        console.log("Buscando:", query);
        // Aquí podrías implementar la lógica de búsqueda
    };

    return (
        <div className="bg-[rgb(46,48,187)] py-[10px] w-[100vw]">
            <div className="flex h-[190px] items-center justify-between">
                {/* Logo */}
                <div><img src={Logo} alt="Logo Pedigree 1°" /></div>

               

                    {/* Buscador */}
                    <form onSubmit={handleSearch} className="flex items-center space-x-2">
                        <input
                            type="text"
                            name="search"
                            placeholder="Buscar..."
                            className="px-4 py-2 rounded-full text-black"
                        />
                        <button type="submit" className="bg-white text-blue-600 rounded-full px-4 py-2">
                            Buscar
                        </button>
                    </form>

                      {/* Navbar */}
                <div className="flex items-center space-x-4">
                    <Navbar />
                </div>
            </div>
        </div>
    );
}

