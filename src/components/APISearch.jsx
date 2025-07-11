import { useState } from 'react';

export default function APISearch() {
    const [query, setQuery] = useState('');
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query.trim()) {
            setError('Please enter a meals title');
            return;
        }

        setLoading(true);
        setError(null);
        setMeals([]);

        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            if (!response.ok) {
                throw new Error(`Failed to fetch meal data: ${response.statusText}`);
            }

            const data = await response.json();
            setMeals(data);
        } catch (err) {
            setError(err.message || 'Failed to fetch meal data');
            console.error('Fetch error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="meals" className="py-16 bg-gray-100 min-h-[71vh]">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Search Meals</h2>
                <div className="mx-auto">
                    <form onSubmit={handleSubmit} className="mb-8">
                        <div className='flex w-[50rem] mx-auto relative'>
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Enter meal title (e.g., Chicken)"
                                className="w-full py-2 px-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-0 bg-blue-500 text-white py-[9px] px-4 rounded hover:bg-blue-600 transition-colors"
                                disabled={loading}
                            >
                                {loading ? 'Searching...' : 'Search Meals'}
                            </button>
                        </div>
                    </form>

                    {error && (
                        <div className="bg-red-600 text-red-800 p-3 rounded text-center mb-4">
                            {error}
                        </div>
                    )}
                    {meals.meals !== null ? (
                        meals.length !== 0 ? (
                            <div className='p-4 grid place-items-center gap-4 grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]'>
                                {meals.meals.map((meal) => {
                                    return (
                                        <div key={meal.idMeal} className='p-2 bg-red-300 rounded-md bg- w-[20rem] flex gap-6 flex-col'>
                                            <div>
                                                <div><img src={meal.strMealThumb} className='w-full aspect-square object-cover rounded-lg' alt="img" /></div>
                                            </div>
                                            <h1 className='mb-4 text-2xl text-center font-bold text-ellipsis whitespace-nowrap overflow-hidden'>{meal.strMeal}</h1>
                                        </div>
                                    )
                                })}
                            </div>
                        ) : (
                            <div></div>
                        )
                    ) : (
                        <div className=''>
                            <div className='text-3xl bg-red-600 text-red-800 p-3 rounded text-center mb-4'>No Meal Found</div>
                        </div>

                    )}
                </div>
            </div>
        </section>
    );
}