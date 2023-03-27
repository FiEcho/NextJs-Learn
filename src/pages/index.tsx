import Input from "@/components/Input";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react"



export default function Home() {
  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const _handleSubmit = () =>{
    console.log(name, password,email);
  }

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <div className="flex h-screen flex-col bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
              <div className="flex flex-1  h-2/5 md:h-1/3 m-4 w-auto justify-center items-center">
                <div className="bg-white/20 rounded-md shadow-md hover:shadow-xl transitio ease-in-out duration-300 w-2/3 ">
                  <Loading/>
                </div>
              </div>
            </div>;
  }

  return (
    <>
    <div className="flex h-screen flex-col bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500">
      <div className="flex flex-1 flex-col h-2/5 md:h-1/3 m-4 w-auto justify-center items-center">
        <div className="bg-white/20 rounded-md shadow-md hover:shadow-xl transitio ease-in-out duration-300 w-2/3 ">
          <div className=" m-10 text-center flex flex-col cursor-pointer">
            <h1 className="text-3xl font-bold text-white">
              Welcome 
            </h1>
              <div className="w-full">
                <label htmlFor="name" className="float-left font-semibold text-white ">Name</label>
                <input
                type="text"
                className="w-full p-2 px-5  rounded-lg mt-2 border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" name="name" value={name} onChange={e => setName(e.target.value)}/>
              </div>

              <div className="w-full">
                <label htmlFor="email" className="float-left font-semibold text-white ">Email</label>
                <input
                type="email"
                className="w-full p-2 px-5 rounded-lg mt-2 border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
              </div>

              <div className="w-full" >
                <label htmlFor="password" className="float-left font-semibold text-white ">Password</label>
              <input
                  type="password"
                  className="w-full p-2 px-5 rounded-lg mt-2 border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50" name="user" value={password} onChange={e => setPassword(e.target.value)}/>
            </div>
              <button className="bg-red-500 hover:bg-red-800 w-28 transition ease-in-out duration-300 p-2 shadow-lg rounded-lg text-white font-semibold mt-2" onClick={() => _handleSubmit()}>Submit</button>
            </div>
        </div>
      </div>
    </div>
    </>
  )
}
