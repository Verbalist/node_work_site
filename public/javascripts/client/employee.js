$(document).ready({})

function addResumeEmployee(){
    console.log("addResumeEmployee - Started!!!");

    var requestArray = {};
    
    var URL = "/addResumeEmployee";

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPost(requestBody, URL, false).responseJSON;

    var serverErrorLabel = $('<label/>', {
                    id: 'server_connection_error',
                    "class": 'user-server-error'
                });

    if (result !== undefined) {
        if (result.error_code != 0) {
            console.log("Error code = " + result.error_code);

            switch (result.error_code) {
                    case 403:
                        serverErrorLabel.text("Add resume error ");
                        serverErrorLabel.appendTo('#add_resume_employee_error_wrapper');
                        break;
            }

        }
    } else {
        console.log("Server connection error");
    }

    return result;

}


function updateResumeEmployee(){
    console.log("updateResumeEmployee - Started!!!");

    var requestArray = {};
    
    var URL = "/updateResumeEmployee";

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPost(requestBody, URL, false).responseJSON;

    var serverErrorLabel = $('<label/>', {
                    id: 'server_connection_error',
                    "class": 'user-server-error'
                });

    if (result !== undefined) {
        if (result.error_code != 0) {
            console.log("Error code = " + result.error_code);

            switch (result.error_code) {
                    case 403:
                        serverErrorLabel.text("Update resume error ");
                        serverErrorLabel.appendTo('#update_resume_employee_error_wrapper');
                        break;
            }

        }
    } else {
        console.log("Server connection error");
    }

    return result;
}

function showResumeSettings(){

    console.log("showResumeSettings - Started!!!");

    
    
}

function getResumeByIdEmployee(resume_id){

    console.log("getResumeByIdEmployee - Started!!!");

    var requestArray = {};
    
    var URL = "/getResumeByIdEmployee";

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPost(requestBody, URL, false).responseJSON;

    if (result !== undefined) {
        if (result.error_code != 0) {
            console.log("Error code = " + result.error_code);

        }
    } else {
        console.log("Server connection error");
    }

    return result;
}

function getResumesEmployee(){
    console.log("getResumesEmployee - Started!!!");


    var requestArray = {};
    
    var URL = "/getResumesEmployee";

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPost(requestBody, URL, false).responseJSON;

    if (result !== undefined) {
        if (result.error_code != 0) {
            console.log("Error code = " + result.error_code);
        }
    } else {
        console.log("Server connection error");
    }

    return result;

}

function deleteResumeEmployee(resume_id){

    console.log("deleteResumeEmployee - Started!!!");

    var requestArray = {};
    
    var URL = "/deleteResumeEmployee";

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPost(requestBody, URL, false).responseJSON;

    if (result !== undefined) {
        if (result.error_code != 0) {
            console.log("Error code = " + result.error_code);

        }
    } else {
        console.log("Server connection error");
    }

    return result;    

}

function findEmployeeById(employee_id){
    console.log("findEmployeeById - Started!!!");

    //  Prepare JSON and settings

    var requestArray = {};

    requestArray.employee_id = employee_id;
    
    var URL = "/findEmployeeById";

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPost(requestBody, URL, false).responseJSON;

    if (result !== undefined) {
        if (result.error_code != 0) {
            console.log("Error code = " + result.error_code);
        }
    } else {
        console.log("Server connection error");
    }

    return result;

}
