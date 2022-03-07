# API Documentation
> The API we are going to use is:  
## iTunesSearchAPI
[Reference](https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html)

The base URL we will  be using is:  
`https://itunes.apple.com/search?parameterkeyvalue`  
Where parameterKeyValue can be one or more parameter key and value pairs indicating the details of your query.  
To construct a parameter key and value pair, you must concatenate each parameter key with an equal sign (=) and a value string. For example: `key1=value1`. To create a string of parameter key and value pairs, you must concatenate each pair using an ampersand (&). For example: `key1=value1&key2=value2&key3=value3`.   

Keys and values to use in this project:  

`term`  The URL-encoded text string you want to search for. For example: `jack+johnson`.  
`country` The two-letter country code for the store you want to search. We will be using `US`   
`media` The media type you want to search for. We will be using `ebook` and `movie`   
`entity`  The type of results you want returned, relative to the specified media type. We will be using `ebook` and `movie`  
`limit` The number of search results you want the iTunes Store to return. Default 50.

## Searches used int this project   

### Get list of books
`https://itunes.apple.com/search?term=javascript&media=ebook&entity=ebook&country=US`  
This will return a JSON object with two fields:  
1.- `resultCount: 50` An integer indicating the number query's result. Default 50 results, this quantity works fine for our project.  
2.- `results` An array of objects with the books information, fot this project useful fields are:  
`artworkUrl100` url to the book's image  
`trackId` UniqueID   
`trackName` Name   
`artistName` Author  

### Get book's information
`https://itunes.apple.com/lookup?id=1194112162`   
This will return a JSON object with two fields:   
1.- `resultCount: 1` An integer indication the number query's result. It should be 1.  
2.- `results` An array of objects with the books information, for this project useful fields are:  
`trackId` UniqueID   
`artworkUrl100` url to the book's image  
`trackName` Name   
`artistName` Author  
`genres`  An array with the genres   
`description` Book's description   
`price` Book's Price  
`averageUserRating` 



## Get list of songs  
`https://itunes.apple.com/search?term=beatles&media=music&country=US`   
This will return a JSON object with two fields:   
1.- `resultCount: 50` An integer indication the number query's result. It should be 1.  
2.- `results` An array of objects with the books information, for this project useful fields are:  
`trackId` UniqueID   
`artworkUrl100` url to the album's image  
`trackName`  song's name  
`artistName`   

### Get song's information
`https://itunes.apple.com/lookup?id=1474815898`   
This will return a JSON object with two fields:   
1.- `resultCount: 50` An integer indication the number query's result. It should be 1.  
2.- `results` An array of objects with the books information, for this project useful fields are:  
`trackId` UniqueID   
`artworkUrl100` url to the book's image  
`trackName` Name   
`artistName` The Beatles  
`collectionName`  Album's name
`previewUrl`  URL for m4a song's file
`trackPrice` Book's Price 
`releaseDate`  
`primaryGenreName`

