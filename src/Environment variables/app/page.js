import { API_BASE_URL } from "@/config/constants"

export default function Page() {
  console.log(process.env.NODE_ENV); // to check if it is in development or production mode
  
  return (
    <main>
      <h1>Environment variables in next js</h1>

      {API_BASE_URL}
    </main>
  );
}
