import Link from "next/link";

const imgUrls = [
  'https://utfs.io/f/4fdb4841-0c83-4dbe-95c7-fcf61d288a36-cketl1.png',
  'https://utfs.io/f/7aa12d32-7d9b-44d0-a1d2-8f4224597b34-6rvmw4.png',
  'https://utfs.io/f/100c56a3-e62b-44da-90cf-bf2793f026b6-8yd20t.jpeg',
]

const mockImg = imgUrls.map((url, idx) => ({
  id: idx + 1,
  url,
}))

export default function HomePage() {

  return (
    <main>
      <div className="flex flex-wrap gap-4">{
        mockImg.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image"/>
          </div>
        ))
      }</div>
      Hello World (this website in progress)
    </main>
  );
}
