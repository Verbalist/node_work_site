$(document).ready({})


function showResumeSettings(){
    console.log("showResumeSettings - Started!!!");    
}

function showResumes(){
    console.log("showResumes - Started!!!");    
}

function showProfileSettings(){
    console.log("showProfileSettings - Started!!!");    
}


function addResumeEmployee(){
    console.log("addresumeemployee - started!!!");

    var requestArray = {};
    
    var serializedArray = $("#add_resume_employee_form").serializeArray();
    
    for (var i in serializedArray) {
        requestArray[serializedArray[i].name] = serializedArray[i].value;
    }


    var url = "/employee/addResumes";

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPost(requestBody, URL, false).responseJSON;

    var serverErrorLabel = $('<label/>', {
                    id: 'server_connection_error',
                        "class": 'user-server-error'
                });

    if (result !== undefined) {
        if (result.error_code != 0) {
            console.log("error code = " + result.error_code);

            switch (result.error_code) {
                    case 403:
                        serverErrorLabel.text("add resume error ");
                        serverErrorLabel.appendto('#add_resume_employee_error_wrapper');
                        break;
            }

        }
    } else {
        console.log("server connection error");
    }

    return result;
}

function updateResumeEmployee(resume_id){
    console.log("updateResumeEmployee - Started!!!");

    var requestArray = {};
    
    var serializedArray = $("#resume_employee_settings_form").serializeArray();
    
    for (var i in serializedArray) {
        requestArray[serializedArray[i].name] = serializedArray[i].value;
    }


    var URL = "/employee/updateResumes/" + resume_id;

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

function getResumeByIdEmployee(resume_id){

    console.log("getResumeByIdEmployee - Started!!!");

    var requestArray = {};
    
    var URL = "/employee/resumes/" + resume_id;

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
    
    var URL = "/employee/resumes";

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
    
    var URL = "/employee/deleteResumes/" + resume_id;

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


function getProfileEmployee(){
    console.log("getProfileEmployee - Started!!!");


    var requestArray = {};
    
    var URL = "/employee/profile";

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

function updateProfileEmployee(){
    console.log("updateProfileEmployee - Started!!!");

    var requestArray = {};
    
    var serializedArray = $("#profile_employee_settings_form").serializeArray();
    
    for (var i in serializedArray) {
        requestArray[serializedArray[i].name] = serializedArray[i].value;
    }


    var URL = "/employee/updateProfile";

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

function deleteEmployee(){

    console.log("deleteEmployee - Started!!!");

    var requestArray = {};
    
    var URL = "/employee/deleteCustomer";

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