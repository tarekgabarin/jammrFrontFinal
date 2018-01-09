import React, {Component} from 'react';
import PropTypes from 'prop-types';

import '../myStyles.css'

class ModalProfilePics extends Component {

    render(){

        if(!this.props.show) {
            return null;
        }

        return (

            <div className="modal is-active">
                <div className="modal-background">

                </div>
                <div className="modal-content">
                    {this.props.children}
                </div>
                <button className="modal-close is-large" aria-label="close">


                </button>
            </div>

        )

    }


}

ModalProfilePics.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
};

export default ModalProfilePics