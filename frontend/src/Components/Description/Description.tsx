
import React from 'react';
import './Description-style.css'


import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';


class Description extends React.Component<any, any>{

        constructor(props:any){

            super(props);
            this.state= {
                clicked: false,
                count : 0
            }
        }

    render() {
        return(
            <div className="overflow">
                <IconButton id="like" onClick={() => this.setState({clicked : this.state.clicked ? false : true})} aria-label="heart">
            {this.state.clicked ? <FavoriteIcon color ="secondary" fontSize="large"/> : 
                                <FavoriteBorderIcon color ="secondary" fontSize="large" /> }      

                </IconButton>
               {this.state.clicked ? this.state.count + 1 : this.state.count}
               
               <br/>
               
                <p id= "inline"> <strong>Name of person</strong> </p>
                <br/>
               
                <p id= "inline" className="description">This is where the description of the user will go into.</p>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, quaerat quasi. Dicta vel molestias repellat rem. Ea quas illum impedit libero provident architecto sapiente nam aliquam, obcaecati, cumque reprehenderit nulla?
            </div>

        )
       

    }
}
export default Description