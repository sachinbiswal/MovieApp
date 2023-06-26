import { createContext, useState } from "react";

export const AuthContext = createContext();

export function CustomProvider({ children }) {
    
    const [movies, setmovies] = useState([])
    const [movieName, setmovieName] = useState("harry potter")
    const [searchMovie, setsearchMovie] = useState(movieName)
    const [error, seterror] = useState("")

    return (
        <AuthContext.Provider value={{
            movies, setmovies, movieName, setmovieName, searchMovie, setsearchMovie
            , seterror, error
        }}>
            {children}
        </AuthContext.Provider>
    )
}