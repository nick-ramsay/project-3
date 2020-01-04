import axios from "axios";

const apiURL = process.env.NODE_ENV === 'production'? '' : '//localhost:3001'

export default {
    createAccount: function (newAccountInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/create-account", data: newAccountInfo})
    },
    login: function(credentials) {
        return axios({method:"post", url: apiURL + "/api/crafter/login", data: credentials})
    },
    //START: Customer API calls...
    getCustomers: function () {
        console.log("Called get customers API");
        return axios({method:"get", url: apiURL + "/api/crafter/get-customers"});
    },
    createCustomer: function (newCustomerInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/create-customer", data: newCustomerInfo})
    },
    //END: ... Customer API Calls
    //START: Inventory API Calls...

    createInventoryItem: function (newInventoryItemInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/create-inventory-item", data: newInventoryItemInfo})
    }

    //END: ... Inventory API Calls
    /*
    getBookResults: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key="+keys.google_books.apiKey)
    },
    getSavedBooks: function() {
        console.log("Called get saved books API!");
        return axios.get(apiUrl + "/api/books/saved");
    },
    deleteBook: function(deletedBook) {
        console.log("Called delete book API!");
        return axios({method:"delete", url: apiUrl + "/api/books/delete/" + deletedBook});
    },
    saveBook: function(bookData) {
        console.log(bookData);
        return axios({method:"post", url: apiUrl + "/api/books", data: bookData })
    }
    */
};