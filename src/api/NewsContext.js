import React, {useState, useEffect, createContext} from "react";
import axios from "axios";

export const NewsContext = createContext()

export const NewsProvider = ({children}) => {
    const [news, setNews] = useState([])
    
    useEffect( async() => {
        const response = await axios.get('https://api.spaceflightnewsapi.net/v3/articles');
        setNews(response.data)
    },[])

    return (
        <NewsContext.Provider value={news}>
            {children}
        </NewsContext.Provider>
    )
}

//https://api.thenewsapi.com/v1/news/top?api_token=zoF0vLrnZn9v8owS6Ev4xxsOUUG4SWMA62JZvGbG

//https://api.thenewsapi.com/v1/news/headlines?locale=us&language=en&api_token=zoF0vLrnZn9v8owS6Ev4xxsOUUG4SWMA62JZvGbG

//hubspot:= eu1-5aaa-5f63-4c66-8b9b-b8d5675a2c7d