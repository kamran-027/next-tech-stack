import client from "../db/index";

interface IResponse {
  name: string;
  email: string;
  password: string | null;
}

async function getUserDetails(): Promise<IResponse | null> {
  const user = await client.user.findFirst();
  return user;
}

export default async function Home() {
  const userData: IResponse | null = await getUserDetails();

  return (
    <div className="flex items-center h-screen justify-center bg-blue-100">
      <div className="flex flex-col justify-center items-center gap-y-2 p-4 bg-cyan-300 rounded-lg border-2 border-yellow-300">
        <div className="flex items-center gap-x-2">
          <div className="font-bold text-xl">NAME: </div>
          <div className="text-xl font-sans text-purple-800 uppercase">
            {userData?.name}
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="font-bold text-xl">EMAIL: </div>
          <div className="text-lg font-serif text-red-800">
            {userData?.email}
          </div>
        </div>
      </div>
    </div>
  );
}
