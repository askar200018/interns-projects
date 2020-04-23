export type GenreType = "action" | "adventure" | "biography" | "comedy" | "crime"
	| "drama" | "history" | "mystery" | "scifi" | "sport" | "thriller";

export interface Genre {
  id: number,
  genre: GenreType
}