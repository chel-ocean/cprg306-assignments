import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

const getItems = async (userID) => {
    const items = [];
    const itemsRef = collection(db, `users/${userID}/items`);
    const querySnapshot = await getDocs(itemsRef);
    querySnapshot.forEach((doc) => {
        items.push({id: doc.id, ...doc.data()});
    });
    return items;
}

const addItem = async (userID, item) => {
    const itemRef = await addDoc(collection(db, `users/${userID}/items`), item);
    return itemRef.id;
}