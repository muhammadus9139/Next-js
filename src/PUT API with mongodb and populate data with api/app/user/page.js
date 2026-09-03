import DeleteUser from "@/util/DeleteUser";
import Link from "next/link";

async function getUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}

export default async function Page() {
  const users = await getUsers();

  return (
    <div className="container column-layout">
      <h1>User list</h1>
      {users.map((item) => (
        <div key={item.id} className="user-row">
          <Link href={`/user/${item.id}`} className="user-name-link">
            {item.name}
          </Link>
          <Link href={`/user/edit/${item.id}`} className="edit-link">
            Edit
          </Link>
          <DeleteUser id={item.id}/>
        </div>
      ))}
    </div>
  );
}
