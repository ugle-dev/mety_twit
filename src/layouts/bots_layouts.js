import React from 'react';
import BotCard from '../components/wrappers/card'

class BotsLayout extends React.Component{
    constructor( props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <BotCard 
                name='Serbay ACAR'
                failCount='4'
                successCount='4'/>
            </div>
        )
    }
}

export default BotsLayout;