import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchFromApi } from '../utils/FetchFromApi'


const Feed = () => {

  const [selectedCategory,setSelectedCategory]=useState('New')
  console.log(selectedCategory,'This category is being fetched')
  

  const [videos, setVideos] = useState(null);
  console.log(videos);


  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    
    }, [selectedCategory]);

 
  return (

    <div className="sidebar-main-content flex justify-between gap-10 w-[100vw]">
    <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
    <Videos videos={videos}/>
    
    </div>
       
  )
}

export default Feed
