import React, {Component} from 'react';

import '../custom-style.css'


class MessageAvatar extends Component {

    render(){


        return (



                    <div className="navbar-item is-inline-flex">

                        <figure className="margin-right-image-fix image is-32x32">

                            <img style={{borderRadius: '50%'}} src="https://www.synbio.cam.ac.uk/images/avatar-generic.jpg/image" alt=""/>

                        </figure>

                        <span className="has-text-white">Image Avatar</span>


                    </div>







        )


    }

}

export default MessageAvatar