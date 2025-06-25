
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen px-4 py-10 text-gray-900 bg-white">
      <div className="max-w-3xl mx-auto space-y-12">
        <div className="text-center space-y-2">
          <Image
            src="/IMG_3987.jpg"
            alt="Yana Maltseva"
            width={180}
            height={180}
            className="rounded-full mx-auto"
          />
          <h1 className="text-4xl font-bold text-indigo-600">Yana Maltseva</h1>
          <p className="text-xl">Growth Marketing Leader</p>
          <p className="text-gray-600">
            Marketing that performs in tune — from raw idea to full-stack growth
          </p>
          <a
            href="mailto:yana.maltseva.marketing@gmail.com"
            className="inline-block mt-4 px-6 py-2 text-white bg-indigo-500 rounded-full hover:bg-indigo-600"
          >
            Let’s Connect
          </a>
        </div>
      </div>
    </main>
  );
}
