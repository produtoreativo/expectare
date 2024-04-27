import Realm, {BSON, ObjectSchema} from 'realm';

class Profile extends Realm.Object<Profile> {
  _id!: BSON.ObjectId;
  name!: string;
  static schema: ObjectSchema = {
    name: 'Profile',
    properties: {
      _id: 'objectId',
      name: {type: 'string', indexed: 'full-text'},
    },
    primaryKey: '_id',
  };
}

export default Profile;
