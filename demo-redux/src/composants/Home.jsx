import { useSelector } from "react-redux";
import Article from "./Article";

export const Home = () => {
    const  articles = useSelector((state) => { return state.articleReducer })

    return <>
        { articles.map((article , index) => <Article key={index} article={article} />)} 
    </>
}