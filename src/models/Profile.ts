import Realm, {ObjectSchema} from 'realm';

class Profile extends Realm.Object<Profile> {
  // _id!: BSON.ObjectId;
  name!: string;
  email!: string;
  static schema: ObjectSchema = {
    name: 'Profile',
    properties: {
      _id: {type: 'objectId', default: () => new Realm.BSON.ObjectId()},
      name: {type: 'string', indexed: 'full-text'},
      email: {type: 'string', indexed: 'full-text'},
    },
    primaryKey: '_id',
  };
}

export default Profile;
