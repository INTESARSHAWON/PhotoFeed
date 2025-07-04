import PhotoList from "@/components/PhotoList";
import { getDictionary } from "./dictionaries";

// dictionary(bangla to english) purposes
// export default async function Home({params: {lang}}) {
//   const dictionary = await getDictionary(lang);
export default async function Home() {
  console.log(process.env.BASE_API_URL);

  const response = await fetch(`${process.env.BASE_API_URL}/photos`);
  const photos = await response.json();
  
  return (
    // <div>{dictionary.followers}</div>
    <PhotoList photos={photos} />
  );
}