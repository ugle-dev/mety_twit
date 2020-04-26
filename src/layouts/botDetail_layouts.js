import React from 'react';
import BotContainer from '../components/wrappers/bot'

class BotsDetailLayout extends React.Component{
    constructor( props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <BotContainer />
            </div>
        )
    }
}

export default BotsDetailLayout;