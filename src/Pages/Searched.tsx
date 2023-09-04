import { useParams } from "react-router-dom" 
import axios from 'axios'  
import { useState, useEffect } from "react"

interface NewsProps {
    source: { name: string };
    title: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    description: string;
    content: string;
  }

  

function Searched() { 
    const {id} = useParams()  

    
    const [news, setNews] = useState<NewsProps[]>([])  
    const [loading, setLoading] = useState(false) 


   const getSearched = async (newsId: any)  => {
    try {
     setLoading(true) 
     const response = await axios.get(`https://newsapi.org/v2/everything?q=${newsId}&sortBy=popularity&apiKey=b254967dd62e4b51b3d79d2c8f245083`)
     setNews(response.data.articles) 
     setLoading(false)
    }catch(err) {
        console.log(err) 
        setLoading(false)
    }
   }

   useEffect(() => {
    getSearched(id)
   }, [id]) 

   

  return (
    <div>
        {loading ? ( 
       <div className="animate-pulse">
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2">
         {[1, 2, 3, 4, 5, 6].map((index) => (
           <div key={index} className="bg-gray-300 h-60 rounded-lg"></div>
         ))}
       </div>
     </div>
        )  
        : 
         ( 
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-2"> 
        {news.map((item) => (
            <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="border rounded-lg hover:shadow-md"
            key={item.url}
          >
            {item.urlToImage && (
              <img
                src={item.urlToImage}
                alt={item.title}
                className="w-full rounded-t-lg"
              />
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold hover:text-[red]">
                {item.title}
              </h2>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <p className="text-gray-500 mt-2">Source: {item.source.name}</p>
            </div>
          </a>
        ))}
         </div> 
         )}
    </div>
  )
}

export default Searched