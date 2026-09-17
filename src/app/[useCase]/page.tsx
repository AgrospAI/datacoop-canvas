import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Canvas from "@/components/Canvas";
import { getUseCaseById, getAllUseCaseIds } from "@/data/useCases";

interface UseCasePageProps {
  params: Promise<{ useCase: string }>;
}

export async function generateStaticParams() {
  const ids = getAllUseCaseIds();
  return ids.map((id) => ({ useCase: id }));
}

export async function generateMetadata({ params }: UseCasePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const useCase = getUseCaseById(resolvedParams.useCase);
  
  if (!useCase) {
    return { title: "Use Case Not Found" };
  }
  
  return {
    title: `${useCase.title} | DataCoop Canvas`,
    description: useCase.description,
  };
}

const UseCasePage = async ({ params }: UseCasePageProps) => {
  const resolvedParams = await params;
  const useCase = getUseCaseById(resolvedParams.useCase);
  
  if (!useCase) {
    notFound();
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              ← Back to all use cases
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">{useCase.title}</h1>
            <div className="w-20" />
          </div>
          <p className="mt-2 text-gray-600">{useCase.description}</p>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Canvas useCaseData={useCase.data} />
      </main>
    </div>
  );
};

export default UseCasePage;