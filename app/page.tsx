import axios from "axios";

interface IResponse {
  name: string;
  email: string;
  address: {
    city: string;
    state: string;
    houseNumber: string;
  };
}

async function getUserDetails(): Promise<IResponse> {
  const resp = await axios.get(
    // "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
    "http://localhost:3000/api/user"
  );
  return resp.data;
}

export default async function Home() {
  const userData: IResponse = await getUserDetails();

  return (
    <div className="flex items-center h-screen justify-center bg-blue-100">
      <div className="flex flex-col justify-center items-center gap-y-2 p-4 bg-cyan-300 rounded-lg border-2 border-yellow-300">
        <div className="flex items-center gap-x-2">
          <div className="font-bold text-xl">NAME: </div>
          <div className="text-xl font-sans text-purple-800 uppercase">
            {userData.name}
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="font-bold text-xl">EMAIL: </div>
          <div className="text-lg font-serif text-red-800">
            {userData.email}
          </div>
        </div>
      </div>
    </div>
  );
}
