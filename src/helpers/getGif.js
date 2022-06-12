export const getGif = async(category) => {
    
        const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=tIyXkWk2DydGoGjxY9w9GY7k7o0pefJu`;
        const resp = await fetch(apiUrl);
        const {data} = await resp.json();
        const getGifData = data.map((gif)=> {
            return {
                id:gif.id,
                title:gif.title,
                url:gif.images.downsized.url
            }
        })
        return getGifData;          
        
    }