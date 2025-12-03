export default function WorkcationCard() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
            <main className="w-full max-w-sm text-center">

                {/* Logo */}
                <div className="mb-4 flex items-center gap-2 justify-center">
                    <img src="/opdracht-09-tailwind/src/images/image-work.png"
                        alt="1"
                        className="w-8 h-8 object-contain" />
                    <span className="text-indigo-600 font-semibold text-lg">
                        Workcation
                    </span>
                </div>

                {/* Image */}
                <div className="mb-6">
                    <div className="relative overflow-hidden rounded-xl shadow-lg">
                        <img
                            src="https://source.unsplash.com/600x400/?beach,remote-work"
                            alt="Person relaxing at the beach while working remotely"
                            className="w-full h-48 object-cover"
                        />
                    </div>
                </div>

                {/* Headline */}
                <h1 className="text-left text-2xl font-extrabold leading-tight text-gray-900 mb-3">
                    You can work from anywhere.{" "}
                    <a href="#" className="text-indigo-600 hover:underline">
                        Take advantage of it.
                    </a>
                </h1>

                <p className="text-left text-sm text-gray-500">
                    Workcation helps you find work-friendly rentals in beautiful
                    locations so you can enjoy great weather even when you're not on vacation.
                </p>

                <div className="mt-6 text-left">
                    <a
                        href="#"
                        className="inline-block bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-md shadow-md hover:bg-indigo-700"
                    >
                        Book Your Escape
                    </a>
                </div>
            </main>
        </div>
    );
}

