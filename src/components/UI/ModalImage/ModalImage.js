import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const ModalImage = props => (
    <Aux>
        <h3>{props.imageDesc}</h3>
        <img src={props.imageLink} alt={props.imageDesc}/>
    </Aux>
);
export default ModalImage;