/*https://rickandmortyapi.com/documentation#character-schema*/
/*Key	Type	Description
id	int	The id of the character.
name	string	The name of the character.
status	string	The status of the character ('Alive', 'Dead' or 'unknown').
species	string	The species of the character.
type	string	The type or subspecies of the character.
gender	string	The gender of the character ('Female', 'Male', 'Genderless' or 'unknown').
origin	object	Name and link to the character's origin location.
location	object	Name and link to the character's last known location endpoint.
image	string (url)	Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars.
episode	array (urls)	List of episodes in which this character appeared.
url	string (url)	Link to the character's own URL endpoint.
created	string	Time at which the character was created in the database.
 */

export type characterT = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

/*https://rickandmortyapi.com/documentation#location-schema*/
/*Key	Type	Description
id	int	The id of the location.
name	string	The name of the location.
type	string	The type of the location.
dimension	string	The dimension in which the location is located.
residents	array (urls)	List of characters who have been last seen in the location.
url	string (url)	Link to the location's own endpoint.
created	string	Time at which the location was created in the database.
 */
export type locationT = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

/*https://rickandmortyapi.com/documentation#episode-schema*/
/*
Key	Type	Description
id	int	The id of the episode.
name	string	The name of the episode.
air_date	string	The air date of the episode.
episode	string	The code of the episode.
characters	array (urls)	List of characters who have been seen in the episode.
url	string (url)	Link to the episode's own endpoint.
created	string	Time at which the episode was created in the database.
 */
export type episodeT = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

/*https://rickandmortyapi.com/documentation#info-and-pagination*/
/*Key	Type	Description
count	int	The length of the response
pages	int	The amount of pages
next	string (url)	Link to the next page (if it exists)
prev	string (url)	Link to the previous page (if it exists) */

export type InfoT = {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
};

//para cada type we need su result
export type ApiResultCharactersT = {
  info: InfoT;
  results: characterT[];
};

export type ApiResultEpisodesT = {
  info: InfoT;
  results: episodeT[];
};

export type ApiResultLocationsT = {
  info: InfoT;
  results: locationT[];
};
