import React, { useState, useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import wordsToNumbers from "words-to-numbers";
import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from './styles.js';


const alanKey = 'a5a3ee1740e2b08a73941d06d3eedebe2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {

    const [newsArticles, setNewsArticles] = useState([]);
    const [activeArticle, setActiveArticle] = useState(-1);
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles, number }) => {
                if(command === 'newHeadlines') {
                    setNewsArticles(articles);
                    setActiveArticle(-1)
                } else if (command === 'highlight') {
                    setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
                } else if (command === 'open') {
                    // for words will be four in words to numbers
                    const parsedNumber = number.length > 2 ? wordsToNumbers(number, { fuzzy: true }) : number;
                    const article = articles[parsedNumber -1];

                    if(parsedNumber > 20) {
                        alanBtn().playText('Please try again.')
                    } else if (article) {
                        window.open(article.url, '_blank');
                        // alanBtn().playText('Opening ... ');
                    } else {
                        // alanBtn().playText('Opening ... ');
                        window.open(articles[number].url, '_blank');
                    }
                }
            }
        })
    }, []);

    return (
        <div>
            <div className={classes.logoContainer}>
                <img src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/vraagoyqfwbbicfuxujj" alt="AI Logo" className={classes.alanLogo} />
            </div>
            <h1 className={classes.voice}>AI Voice Assistance</h1>
            <NewsCards articles ={newsArticles} activeArticle={activeArticle}/>
        </div>
    )
}

export default App;