import axios from 'axios';

export default {
    generateUsers: function(){
        return axios.get(
            "https://randomuser.me/api/?results=20&?inc=id,name,email,phone,location"
        );
    }
};