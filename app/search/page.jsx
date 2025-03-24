// app/search/page.jsx
import { fetchSearchResults } from "@/utils/fetchSearchResults";

export default async function SearchPage({ searchParams }) {
  const { q } = searchParams; // Access the search query from the URL

  // Fetch search results
  const searchResults = await fetchSearchResults(q || "");

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-3xl font-bold mb-6">
        Search Results for "{q || "..."}"
      </h1>
      <div className="space-y-4">
        {searchResults.length > 0 ? (
          searchResults.map((result) => (
            <div
              key={result.id}
              className="bg-gray-800 p-4 rounded-lg flex items-center space-x-6"
            >
              {/* Product Image */}
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={result.image}
                  alt={result.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              {/* Product Details */}
              <div>
                <h2 className="text-xl font-semibold">{result.title}</h2>
                <p className="text-gray-400">{result.description}</p>
                <p className="text-yellow-500 font-bold">
                  ${result.price.toFixed(2)}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400">
            {q ? "No results found." : "Enter a search term to see results."}
          </p>
        )}
      </div>
    </div>
  );
}