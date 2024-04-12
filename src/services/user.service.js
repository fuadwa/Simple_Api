import userDao from '../models/data/users.data';
import { insert } from '../models/data/users.data';



const getUser = (details) => {
    userDao.get(details);
};
const getAllUsers=()=>{
    userDao.getAll();
}
const addUser = (details) => {
    userDao.insert(details);
};
const updateUser = (userId,details) => {
    return userDao.update(userId,details);
};
const removeUser = (details) => {
    userDao.remove(details);
};

export default {
    getUser,
    getAllUsers,
    addUser,
    updateUser,
    removeUser

}