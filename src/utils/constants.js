
const GOOGLE_API_KEY = "AIzaSyA2PunYGfTF_IzwkXnstj6vzSESrOnf81s" ; 


export const YOUTUBE_API_KEY = "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&maxResults=50&chart=mostPopular&regionCode=IN&key="+ GOOGLE_API_KEY;


export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&type=suggest&q=`