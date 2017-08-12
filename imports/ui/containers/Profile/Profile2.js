import React from 'react';
import { Meteor } from 'meteor/meteor';
import Gravatar from 'react-gravatar';
import {List, ListItem} from 'material-ui/List';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Close from 'material-ui/svg-icons/navigation/close';
import Check from 'material-ui/svg-icons/navigation/check';
import Star from 'material-ui/svg-icons/toggle/star';


import './styles.css';

const Profile = ({ userLogged }) => {
  return (
    <div className="profile-page">  
      <div className="profile-wrapper">
        <Card>
          <div className="profile-main-box">
            <Gravatar size={100} email={userLogged.emails[0].address} />
            <CardHeader
              title={userLogged.profile.name}
              subtitle={userLogged.emails[0].address}
            />
          </div>
          <div className="profile-meta-box">
            <List>
              <ListItem disabled={true} primaryText="Wins" secondaryText={userLogged.profile.wins || '0'} leftIcon={<Check />} />
              <ListItem disabled={true} primaryText="Losses" secondaryText={userLogged.profile.losses || '0'} leftIcon={<Close />} />
              {/*<ListItem disabled={true} primaryText="Good Points" secondaryText="12" leftIcon={<Star />} />*/}    
            </List>
          </div>
            <div className="profile-bio-box">
              <CardText>
                <p>{userLogged.profile.bio}</p>
              </CardText>
            </div>
        </Card>
      </div>
    </div>
  )
}

export default Profile;