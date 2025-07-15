import { getFirestore, doc, setDoc, getDoc, getDocs, collection } from "firebase/firestore";
import app from "../lib/firebase.config";

const db = getFirestore(app);

const Firestore = { 
    writeDoc: (...args) => {
        const [input, collection_name] = args;
        return new Promise((resolve, reject) => {
            const randomIndex = Math.floor(Math.random() * 1000000);
            try {
                const docRef = doc(db, collection_name, randomIndex.toString());
                setDoc(docRef, input).then(() => {
                    resolve("Document written successfully");
                }).catch((error) => {
                    reject("Error writing document: " + error);
                });
            } catch(e) {
                reject("Error: " + e);
            }
        });
    },

    readDoc: (collection_name, doc_id) => {
        return new Promise((resolve, reject) => {
            try {
                const docRef = doc(db, collection_name, doc_id);
                getDoc(docRef).then((doc) => {
                    if (doc.exists()) {
                        resolve(doc.data());
                    } else {
                        reject("Document not found");
                    }
                }).catch((error) => {
                    reject("Error reading document: " + error);
                });
            } catch(e) {
                reject("Error: " + e);
            }
        });
    },

    readAllDocs: (collection_name) => {
        return new Promise((resolve, reject) => {
            try {
                const querySnapshot = getDocs(collection(db, collection_name));
                querySnapshot.then((querySnapshot) => {
                    const docs = [];
                    querySnapshot.forEach((doc) => {
                        docs.push({
                            id: doc.id,
                            ...doc.data()
                        });
                    });
                    resolve(docs);
                }).catch((error) => {
                    reject("Error reading documents: " + error);
                });
            } catch(e) {
                reject("Error: " + e);
            }
        });
    }
};

export default Firestore;