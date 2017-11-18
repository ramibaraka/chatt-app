import axios from 'axios';


class apiClient {

    static getUsers() {
        return fetch('http://localhost:3001/users').then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getMessageList(id) {
        return fetch('http://localhost:3001/messagelists/' + id).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getInboxItems(userID) {
        return fetch('http://localhost:3001/inboxitems' + "/" + userID).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}

export default apiClient;