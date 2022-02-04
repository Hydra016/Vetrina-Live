import React from "react";
import Layout from "./Layout";
import Header from "./Header";
import Content from './Content';
import useStyles from '../hooks/useStyles';
import { NewsProvider } from "../api/NewsContext";

const App = () => {
    const { header, content } = useStyles();
    return (
        <NewsProvider>
        <Layout>
            <Header className={header}/>
            <Content className={content} />
        </Layout>
        </NewsProvider>
    )
}

export default App;