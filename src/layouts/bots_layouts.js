import React from 'react';
import FullWidthGrid from '../components/wrappers/search'

class BotsLayout extends React.Component{
    constructor( props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <FullWidthGrid />
            </div>
        )
    }
}

export default BotsLayout;