// export interface Search {
//     id: number,
//     title: string,
//     poster_path: string;
// }

export interface SearchParameters {
        searchQuery: string,
        adult: boolean,
        page: number,
        total_pages: string,
        poster_path: string
}