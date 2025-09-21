function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">📘 Exams App</h1>
      <ul className="flex gap-6">
        <li><a href="#" className="hover:underline">Inicio</a></li>
        <li><a href="#" className="hover:underline">Exámenes</a></li>
        <li><a href="#" className="hover:underline">Estudiantes</a></li>
        <li><a href="#" className="hover:underline">Admin</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
