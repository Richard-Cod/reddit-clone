import {firestoreAction  } from 'vuexfire'

import db from '@/db';

const state = {
    subreddits:[],

}


const actions = {
    getAll : firestoreAction ( ({bindFirestoreRef}) => {
       alert("icdcdcidci")
        try {
        console.log("the result issss");
        console.log(bindFirestoreRef);
        bindFirestoreRef('subreddits', db.collection('subreddits'));
       } catch (error) {
           console.log("erreur");
           console.log(error);
       }
    })
}

export default {
    namespaced:true,
    state,
    actions,
}