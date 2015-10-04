$(document).ready({

})

function initResume(){
    var uri = window.location.href;
    console.log(uri.split("/").pop());
    var response = getResumeByIdEmployee(uri.split("/").pop())
    var template = $("#editResumeEmployee").html();
    console.log(response);
    var html = Mustache.render(template, response.resume);
    $("#edit_resume_from_wrapper").append(html);
}

function initProfile(){
    var uri = window.location.href;
    console.log(uri.split("/").slice(-2,-1)[0]);
    var response = getProfileByNameEmployee(uri.split("/").slice(-2,-1)[0])
    var template = $("#editProfileEmployee").html();
    console.log(response);
    var html = Mustache.render(template, response.profile);
    $("#profile_from_wrapper").append(html);
}

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
    
    var serializedArray = $("#resume_employee_addition_form").serializeArray();
    
    for (var i in serializedArray) {
        requestArray[serializedArray[i].name] = serializedArray[i].value;
    }


    var URL = "/addResume";

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPostEmployee(requestBody, URL, "POST",false).responseJSON;

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

function updateResumeEmployee(resume_id){
    console.log("updateResumeEmployee - Started!!!");

    var requestArray = {};
    
    var serializedArray = $("#resume_employee_settings_form").serializeArray();
    
    for (var i in serializedArray) {
        requestArray[serializedArray[i].name] = serializedArray[i].value;
    }


    var URL = "/updateResumes/" + resume_id;

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPostEmployee(requestBody, URL, "POST",false).responseJSON;

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
    
    var URL = "/resume/" + resume_id;

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPostEmployee(requestBody, URL, "GET", false).responseJSON;

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
    
    var URL = "/resumes";

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPostEmployee(requestBody, URL, "GET", false).responseJSON;

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
    
    var URL = "/deleteResumes/" + resume_id;

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPostEmployee(requestBody, URL, "POST", false).responseJSON;

    if (result !== undefined) {
        if (result.error_code != 0) {
            console.log("Error code = " + result.error_code);

        }
    } else {
        console.log("Server connection error");
    }

    return result;    
}


function getProfileByNameEmployee(name){
    console.log("getProfileEmployee - Started!!!");


    var requestArray = {};
    requestArray.name = name;
    
    var URL = "/profile";

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPostEmployee(requestBody, URL, "GET", false).responseJSON;

    if (result !== undefined) {
        if (result.error_code != 0) {
            console.log("Error code = " + result.error_code);
        }
    } else {
        console.log("Server connection error");
    }

    return result;
}

function updateProfileEmployee(employee_id){
    console.log("updateProfileEmployee - Started!!!");

    var requestArray = {};
    
    var serializedArray = $("#profile_employee_settings_form").serializeArray();
    
    for (var i in serializedArray) {
        requestArray[serializedArray[i].name] = serializedArray[i].value;
    }


    var URL = "/updateProfile/" + employee_id;

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPostEmployee(requestBody, URL, "POST", false).responseJSON;

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
    
    var URL = "/deleteCustomer";

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPostEmployee(requestBody, URL, "POST", false).responseJSON;

    if (result !== undefined) {
        if (result.error_code != 0) {
            console.log("Error code = " + result.error_code);

        }
    } else {
        console.log("Server connection error");
    }

    return result;    
}