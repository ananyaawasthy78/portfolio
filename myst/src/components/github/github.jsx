
// import React , {useEffect , useState} from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // const [data, setData] = useState([]);
    const data = useLoaderData();

  //  useEffect(() => {
  //   fetch('https://api.github.com/users/ananyaawasthy78') 
  //   .then(response => response.json())
  //   .then(data => setData(data));
  //  } , []);

        
   

  return (
    <div className="text-center m-4 bg-pink-600 text-white p-4 text-3xl">  GitHub followers: {data?.followers} 
    <img src={data.avatar_url} alt="Git picture" width={300} />
       </div>
  )
}

export default Github
export const getinfo = async () => {
  const response = await fetch('https://api.github.com/users/ananyaawasthy78');
  const data = await response.json();
  return data;
}