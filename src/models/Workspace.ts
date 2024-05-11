import Realm, {ObjectSchema} from 'realm';

class Workspace extends Realm.Object<Workspace> {
  name!: string;
  static schema: ObjectSchema = {
    name: 'Profile',
    properties: {
      _id: {type: 'objectId', default: () => new Realm.BSON.ObjectId()},
      name: {type: 'string', indexed: 'full-text'},
    },
    primaryKey: '_id',
  };
}

export default Workspace;
