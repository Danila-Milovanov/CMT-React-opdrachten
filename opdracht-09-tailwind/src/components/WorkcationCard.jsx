export default function WorkcationCard() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <main className="w-full max-w-xs text-center">

                {/*Logo*/}
                <div className="mb-4 flex items-center gap-2 justify-center">
                    <svg className="w-6 h-6 text-indigo-600"
                         viewBox="0 0 24 24"
                         fill="currentColor"
                         aria-hidden="true"
                    >
                        <path d="M3 11l9-7 9 7v8a1 1 0 0 1-1 1h-5v-5H9v5H4a1 1 0 0 1-1-1v-8z" />
                    </svg>
                    <span className="text-indigo-600 font-semibold text-lg">
                        Workcation
                    </span>
                </div>



                {/*Image*/}
                <div className="mb-6">
                    <div className="relative overflow-hidden rounded-x1 shadow-lg">
                        <img
                            src="/"
                            alt="Person chilling at the beach x-x"
                            className="w-full h-48 object-cover"
                        
                        />
                    </div>
                </div>



                {/*Headline*/}
                <h1 className="text-left text-2xl sm:text-3xl font-extrabold leading-tight text-gray-900 mb-3">
                    You can work from anywhere.{" "}
                    <a href="#" className="text-indigo-600 hover:underline">
                        Take advantage of it.
                    </a>
                </h1>


                {/*Paragraph*/}
                <p className="text-left text-sm text-gray-500">
                    Workcation helps you find work-friendly rentals in beautiful
                    locations so you can enjoy some nice weather even when you're not on vacation.
                </p>


                {/*Button*/}
                <div className="mt-6 text-left">
                    <a  href="#"
                        className="inline-block bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    
                    >
                        Book YOUR ESCAPE
                    </a>
                </div>
            </main>
        </div>
    )
}