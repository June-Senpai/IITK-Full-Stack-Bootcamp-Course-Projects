const Table = () => {
  return (
    <main>
      <h1>Table</h1>
      <table className="border-2 border-black">
        <thead>
          <tr className="border-b-2 border-black bg-blue-200">
            <th className="px-4 py-2">No</th>
            <th className="px-4 py-2">Name of the student</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Contact</th>
            <th className="px-4 py-2">Course</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className="px-4 py-2">1</th>
            <td className="px-4 py-2 text-center">John</td>
            <td className="px-4 py-2">New York</td>
            <td className="px-4 py-2">john@gmail.com</td>
            <td className="px-4 py-2">Math</td>
          </tr>
          <tr>
            <th className="px-4 py-2">2</th>
            <td className="px-4 py-2 text-center">Jane</td>
            <td className="px-4 py-2">New York</td>
            <td className="px-4 py-2">jane@gmail.com</td>
            <td className="px-4 py-2">Math</td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
export default Table
