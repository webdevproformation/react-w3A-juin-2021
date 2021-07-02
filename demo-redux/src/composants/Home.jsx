import { useSelector , useDispatch } from "react-redux";
import Article from "./Article";
import { useEffect } from "react";
import {  getArticles } from "../actions/article.action";

export const Home = () => { 
    const  articles = useSelector((state) => { return state.articleReducer })
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getArticles());
    }, [dispatch])

    return <>
        { articles.map((article , index) => <Article key={index} article={article} />)} 
    </>
}