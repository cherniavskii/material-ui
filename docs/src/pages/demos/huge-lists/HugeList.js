// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  },
});

const items = [];

for (let i = 0; i < 100; i++) {
  items.push(`item ${i}`);
}

class SimpleList extends Component {
  state = { opened: false };

  handleButtonClick = () => {
    this.setState({ opened: !this.state.opened });
  };

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <Button onClick={this.handleButtonClick}>Open List</Button>
        {this.state.opened &&
          <List>
            {items.map(item => <ListItem button key={item}>{item}</ListItem>)}
          </List>
        }
      </div>
    );
  }
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleList);
