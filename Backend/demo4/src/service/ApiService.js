import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/user';
const CROP_API_BASE_URL = 'http://localhost:8080/crops';

class ApiService {

  

    fetchCropsByUserId(userId) {
        return axios.get(CROP_API_BASE_URL + '/' + userId);
    }
    fetchCropsById(cropId) {
        return axios.get(CROP_API_BASE_URL + '/edit/' + cropId);
    }
    addCrop(userId,crop) {
        console.log(crop);
        return axios.post(""+CROP_API_BASE_URL+ '/add-crops/'+userId,crop );
    }
    deleteCrop(cropId) {
        return axios.delete(CROP_API_BASE_URL + '/' + cropId);
    }
    editCrop(crop) {
        return axios.put(CROP_API_BASE_URL + '/' + crop.id, crop);
    }


    addUser(user) {
        console.log(user.role);
        return axios.post(""+USER_API_BASE_URL+ '/register', user);
    }
    loginUser(user) {
        console.log(user);
        console.log("In lgin request");
        return axios.post(""+USER_API_BASE_URL+ '/login', user);
    }

  
}

export default new ApiService();