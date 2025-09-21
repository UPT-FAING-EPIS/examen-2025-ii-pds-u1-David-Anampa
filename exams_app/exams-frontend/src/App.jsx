import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow p-8">
        <h2 className="text-2xl font-semibold mb-4">Bienvenido, Admin 👋</h2>
        <p className="text-gray-600">
          Aquí podrás gestionar los exámenes, estudiantes y resultados de forma sencilla.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-bold">📑 Exámenes</h3>
            <p className="text-gray-500">Crea y administra tus exámenes en línea.</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-bold">👩‍🎓 Estudiantes</h3>
            <p className="text-gray-500">Revisa y gestiona la información de estudiantes.</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition">
            <h3 className="text-lg font-bold">📊 Resultados</h3>
            <p className="text-gray-500">Consulta estadísticas y reportes fácilmente.</p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 text-center py-4 text-gray-500">
        © 2025 Exams App – Desarrollado por David Anampa
      </footer>
    </div>
  )
}

export default App
