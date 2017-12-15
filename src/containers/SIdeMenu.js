import React, {Component} from 'react';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

/*

My account - <i id='Browse Users' class="material-icons">&#xE853;</i>



Saved users - <i class="material-icons">&#xE924;</i>

Current conversation - <i class="material-icons">&#xE0B7;</i>

List of conversations - <i class="material-icons">&#xE0BA;</i>

Browse users - <i class="material-icons">&#xE7FB;</i>

My search preferences - <i class="material-icons">&#xE8B6;</i>


 */

class SideMenu extends Component {

    render(){



        return (

        <div>
            <Menu>
            <MenuItem primaryText="Tarek Gabarin" leftIcon={<i className="material-icons">&#xE853;</i>}/>

                <Divider />



            </Menu>
        </div>

        )


    }


}