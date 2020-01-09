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
    editCustomer: function (editedCustomerInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/edit-customer", data: editedCustomerInfo})
    },
    cancelCustomer: function (cancelledCustomerInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/cancel-customer", data: cancelledCustomerInfo})
    },
    reactivateCustomer: function (reactivateCustomerInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/reactivate-customer", data: reactivateCustomerInfo})
    },
    //END: ... Customer API Calls
    //START: Inventory API Calls...

    createInventoryItem: function (newInventoryItemInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/create-inventory-item", data: newInventoryItemInfo})
    },
    editInventory: function (editedInventoryInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/edit-inventory", data: editedInventoryInfo})
    },
    inventoryTransaction: function (inventoryInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/inventory-transaction", data: inventoryInfo})
    },
    getInventory: function () {
        console.log("Called get-inventory API");
        return axios({method:"get", url: apiURL + "/api/crafter/get-inventory"});
    },
    cancelInventory: function (cancelledInventoryInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/cancel-inventory", data: cancelledInventoryInfo})
    },
    reactivateInventory: function (reactivateInventoryInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/reactivate-inventory", data: reactivateInventoryInfo})
    },

    //END: ... Inventory API Calls

    //START: Transaction API calls

    postTransaction: function (transactionInfo) {
        return axios({method:"post", url: apiURL + "/api/crafter/post-transaction", data: transactionInfo})
    },

    //END: Transaction API Calls

    //START: Transaction API calls

    createProject: function (projectInfo) {
        console.log("Called create project API");
        return axios({method:"post", url: apiURL + "/api/crafter/create-project", data: projectInfo})
    },
    getProjects: function () {
        console.log("Called get-project API");
        return axios({method:"get", url: apiURL + "/api/crafter/get-projects"});
    }

    //END: Transaction API Calls
};