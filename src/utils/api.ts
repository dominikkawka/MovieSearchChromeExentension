const API_KEY = ''
//Yes I'm aware of the security risk.


export interface MovieSearchData {
   poster_path: string,
   popularity: number,
   title: string,
   vote_average: number,
   id: number,
   genres: [{
      name: string
   }]
}

export async function fetchMovieSearchData(title:string): 
Promise<MovieSearchData> {
   const result = await fetch (`https://api.themoviedb.org/3/movie/${title}?api_key=${API_KEY}&language=en-US`)
   if (!result.ok) {
      throw new Error ("Insert movie")
   }
 
   const data: MovieSearchData = await result.json()
   return data
}