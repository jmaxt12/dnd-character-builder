import React, { Component } from 'react';

import Race from '../components/Race/Race';

class CharacterBuilder extends Component {
    state = {

    }
    render() { 
        return ( 
            <div>
                <h1>Character Builder</h1>
                <Race />
            </div>
         );
    }
}
 
export default CharacterBuilder;