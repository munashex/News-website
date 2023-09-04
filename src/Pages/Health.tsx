import { useState, useEffect } from 'react';
import axios from 'axios';

interface NewsProps {
  source: { name: string };
  title: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  description: string;
  content: string;
}

function Health() {
  const [headlines, setHeadlines] = useState<NewsProps[]>([]);
  const [loading, setLoading] = useState(true);

  const getHeadlines = async () => {
    let headlinesUrl =
      'https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=b254967dd62e4b51b3d79d2c8f245083';
    try {
      const response = await axios.get(headlinesUrl);
      setHeadlines(response.data.articles);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getHeadlines();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Health News</h1>

      {/* Headlines news */}
      {loading ? (
        <div className="animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-gray-300 h-60 rounded-lg"></div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          {headlines.slice(1, 2).map((item) => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col md:flex-row items-center border rounded-lg p-4 mb-4 hover:shadow-md"
              key={item.url}
            >
              {item.urlToImage && (
                <img
                  src={item.urlToImage}
                  alt={item.title}
                  className="w-full md:w-1/3 rounded-lg"
                />
              )}
              <div className={item.urlToImage ? 'md:ml-4 flex-grow' : 'flex-grow'}>
                <h2 className="text-xl font-semibold hover:text-[red]">
                  {item.title}
                </h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
                <p className="text-gray-500 mt-2">
                  Source: {item.source.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Main news */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {headlines.map((item) => (
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
    </div>
  );
}

export default Health;