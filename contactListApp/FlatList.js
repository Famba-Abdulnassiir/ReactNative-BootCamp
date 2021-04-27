import React from 'react';
import {FlatList} from 'react-native';
import contacts from './contacts'

import Row from './Row';


const renderItem = ({ item }) => (<Row {...item} />)

//Note if in the same component as the master please use data = {this.state.contacts}
//we use properties (props if we are out of the main module).

const Flatlist = props => (
  <FlatList renderItem={renderItem} data={props.contacts} />
)


export default Flatlist;
