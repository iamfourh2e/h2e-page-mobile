import Meteor from 'react-native-meteor';

export const meteorStatus = () => Meteor.status().status === 'connected';