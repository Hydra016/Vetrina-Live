import React from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import stock from '../../img/Image.png';
import useStyles from '../../hooks/useStyles';

const NewsItem = ({ news }) => {
    const { newsLink, newsImg, newsItemContainer, newsDesc } = useStyles();
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return (
        <Link href={news.url} target='blank'>
            <Grid 
            container
            className={newsItemContainer}>
                <Grid container xs={4}>
                    <img className={newsImg} src={news.urlToImage} />
                </Grid>
                <Grid container xs={8} justifyContent='center'>
                    <Grid 
                    container
                    direction='column'
                    justifyContent='space-between'
                    style={{height: '100%', width: '80%'}}
                    >
                        <Grid item>
                            <Typography style={{color: '#21B8F9', fontSize: '11px'}}>
                                {news.author ? news.author : 'Lionel Messi'}
                            </Typography>
                        </Grid>
                        <Grid item className={newsDesc}>
                            <Typography style={{color: '#103B66', fontSize: '15px'}} >
                            {news.title}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={{color: '#103B66', fontSize: '12px', textDecoration: 'underline'}}>
                            Posted on: {news.publishedAt.slice(8,10)} . {months[news.publishedAt.slice(6,7) - 1]} . {news.publishedAt.slice(0,4)}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            </Link>
    )
}

export default NewsItem;