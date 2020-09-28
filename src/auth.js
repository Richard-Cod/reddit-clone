import firebase from 'firebase';
import store from './store';

import db from '@/db';

firebase.auth().onAuthStateChanged(async (user) => {
    //console.log(user);
    if (user) {
      // User is signed in.
      const userToCreate = {
        id: user.uid,
        name:user.displayName,
        image:user.photoURL,
        created_at : new Date(),
    }
        //console.log(userToCreate);
        store.commit('auth/setUser',userToCreate)

        try {
            const res = await db.collection('users').doc(userToCreate.id).set(userToCreate);
            console.log("res ",res);
        } catch (error) {
            console.log("erreur");
            console.log(error);
        }

    } else {
        store.commit('auth/setUser',null)
    }
  });
  