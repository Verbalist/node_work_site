function findEmployeeById(employee_id){
    console.log("findEmployeeById - Started!!!");

    //  Prepare JSON and settings

    var requestArray = {
        "employee_id" : employee_id
    };
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