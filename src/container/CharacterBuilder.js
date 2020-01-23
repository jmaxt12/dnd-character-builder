import React, { Component } from 'react';

import Race from '../components/Race/Race';
import DndClass from '../components/DndClass/DndClass';

class CharacterBuilder extends Component {
    state = {

    }
    render() { 
        return ( 
            <div>
                <h1>Character Builder</h1>
                <Race />
                <DndClass />
            </div>
         );
    }
}
 
export default CharacterBuilder;