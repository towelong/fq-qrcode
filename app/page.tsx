import EntryInput from "@/components/EntryInput";
// import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  // const token = cookies().get('token')
  // if (token) {
  redirect("/subscribe");
  // }
  return (
    <main>
      <EntryInput />
    </main>
  );
}
