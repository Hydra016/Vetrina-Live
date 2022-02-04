import React, {useState, useEffect, createContext} from "react";
import axios from "axios";

export const NewsContext = createContext()

export const NewsProvider = ({children}) => {
    const [news, setNews] = useState([])
    
    useEffect( async() => {
        const response = await axios.get('https://newsapi.org/v2/everything?q=riga&apiKey=39f0ca53660c4ccf83f483a17165b25d');
        setNews(response.data.articles)
    },[])

    return (
        <NewsContext.Provider value={news}>
            {children}
        </NewsContext.Provider>
    )
}