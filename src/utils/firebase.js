import app from 'firebase/app';
import config from '../config/firebase';
import 'firebase/auth';

export default class FireBase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }
}