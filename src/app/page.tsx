import Link from "next/link";
import Productcard from "./components/Productcard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <Productcard/>
    </main>
    
  )
}



