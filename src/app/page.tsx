import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-auto p-8 text-center">
      <div className="max-w-3xl flex flex-col items-center">
        <div className="mb-6">
          <Image
            src="/logo.png"
            alt="AIToolbox Logo"
            width={150}
            height={150}
            className="rounded-xl"
            priority
          />
        </div>
        
        <h1 className="text-5xl font-bold mb-4 text-primary">AIToolbox</h1>
        
        <h2 className="text-2xl font-medium mb-8 text-muted-foreground">
          A multi-functional AI tool platform
        </h2>
        
        <p className="text-lg mb-10 max-w-2xl mx-auto text-muted-foreground">
          Lorem ipsum dolor, sit amet, consectetur at audonsan ult imedo loreequr. Ddnec ultrimes, 
          consequat lectus larcut. Pellentesque seda puvinar miauris vitamet tec, feimentum ac.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a 
            href="/chatbot" 
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Chatbot
          </a>
          <a 
            href="/email-writer" 
            className="px-8 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg hover:bg-gray-200 transition-colors"
          >
            Email Writer
          </a>
        </div>
      </div>
    </div>
  );
}
