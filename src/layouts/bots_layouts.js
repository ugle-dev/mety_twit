import React from 'react';
import SearchContainer from '../components/wrappers/search'
import CardsContainer from '../components/wrappers/card'

class BotsLayout extends React.Component{
    constructor( props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <SearchContainer />
                <CardsContainer />
            </div>
        )
    }
}

export default BotsLayout;