import Link from "next/link";
import { useCases } from "@/data/useCases";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">DataCoop Canvas</h1>
          <p className="mt-2 text-gray-600">
            Explore data space use cases for the agri-food sector
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {useCases.map((useCase) => (
            <Link
              key={useCase.id}
              href={`/${useCase.id}`}
              className="group bg-white rounded-lg border border-gray-200 p-6 hover:border-blue-500 hover:shadow-md transition-all duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {useCase.title}
              </h2>
              <p className="mt-2 text-gray-600">{useCase.description}</p>
              <span className="mt-4 inline-block text-sm text-blue-600 font-medium group-hover:underline">
                View details →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;