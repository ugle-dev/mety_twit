import React from 'react';
import BotContainer from '../components/wrappers/bot';
import BotTwitsContainer from '../components/wrappers/botTwits';
import Grid from '@material-ui/core/Grid';

class BotsDetailLayout extends React.Component{
    constructor( props) {
        super(props);
        this.state = {
            tabValue: 0
        };
    }

    handleTabChange = (event, newValue) => {
        this.setState( { tabValue: newValue });
    };
    

    render() {
        return (
            <div>
                <Grid container spacing={ 3 }>
                    <BotContainer
                      botName = 'Serbay'
                      successCount = '5'
                      failCount = '5'
                    />
                    <BotTwitsContainer
                        handleTabChange= { this.handleTabChange }
                        tabValue = { this.state.tabValue }
                    />
                </Grid>
                
            </div>
        );
    }
}

export default BotsDetailLayout;