const API_KEY = ''
//Yes I'm aware of the security risk.


export interface MovieSearchData {
   results: [{
      title: string,
      poster_path: string,
      popularity: number,
      vote_average: number,
      genre_ids: number
   }],
   total_results: number
}

export async function fetchMovieSearchData(title:string): 
Promise<MovieSearchData> {
   const result = await fetch (`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&page=1&include_adult=false`)
   if (!result.ok) {
      throw new Error ("Insert movie")
   }
 
   const data: MovieSearchData = await result.json()
   return data
}