import React, { useEffect } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';

const alanKey = 'a5a3ee1740e2b08a73941d06d3eedebe2e956eca572e1d8b807a3e2338fdd0dc/stage';
const App = () => {

    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: ({ command, articles }) => {
                if(command === 'newHeadlines') {
                    console.log(articles);
                }
            }
        })
    }, []);

    return (
        <div>
            <h1>AI News Application</h1>
        </div>
    )
}

export default App;