import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import { Grid, Grow, Typography } from '@material-ui/core';
import useStyles from './styles.js';

const infoCards = [
    { color: '#121212', title: 'Recently posted News', info: 'General, Sports, Fashion', text: 'Show me the recent news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, Play station 5, Smartphones', text: 'what\'s up with Play Station 5 '},
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time', text: 'Give me the news from CNN ' },
];


const NewsCards = ({ articles, activeArticle }) => {
    const classes = useStyles(); // useStyle is used as a hook to define classes

    if(!articles.length){
        return (
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {infoCards.map((infoCard) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{ backgroundColor: infoCard.color }}>

                                <Typography variant="h5">{infoCard.title}</Typography>
                                {
                                    infoCard.info
                                        ? (<Typography variant="h6">
                                            <strong>
                                                {infoCard.title.split (' ')[2]}:
                                                <br /><br />
                                            </strong>

                                            {infoCard.info}
                                        </Typography>)
                                        :
                                        null
                                }
                                <br />
                                <Typography variant="h6">Attempt by saying: <br />
                                    <i>
                                        {infoCard.text}
                                    </i>
                                </Typography>

                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        );
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {articles.map((article, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                        <NewsCard article={article} activeArticle={activeArticle} i={i} />
                    </Grid>
                ))}
            </Grid>
        </Grow>
    )
}

export default NewsCards;