import Link from "next/link";
export default function Home() {
  return (
    <>
    <div className="w-full min-h-svh bg-gray-100">
      <div className="py-10 px-10">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold">Contacts</h1>
          <div className="flex gap-2">
          <Link href={"/contacts/create"}>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add Contact
          </button>
          </Link>
          <Link href={"/contacts"}>
          <button 
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            All data
          </button>
          </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
