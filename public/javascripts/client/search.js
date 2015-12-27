function showSearchPositions(){
	console.log("showPositions - Started!!!");    
    var url = window.location.href;
    var split_url = url.split("/");
    console.log(split_url[split_url.length-2]);
    page_number = 1;//$('#page_number')[0].value;
    positions_per_page = 100;//$('#positions_per_page')[0].value;
    start = (page_number-1)*positions_per_page;
    limit = positions_per_page;
    var response = getPositionsSearch(limit, start);
    var template = $("#showPositionsEmployer").html();
    for(var elem in response.positions){
        var html = Mustache.render(template, response.positions[elem]);
        $("#positions_list_wrapper").append(html);
    }
}



function getResumesSearch(imit,start){
    console.log("getResumesSearch - Started!!!");


    var requestArray = {};
    requestArray.limit = limit;
    requestArray.start = start;
    
    var URL = "/resumes";

    var requestBody = 'json=' + encodeURIComponent(JSON.stringify(requestArray));

    //  Send request

    var result = doRequestAjaxPostSearch(requestBody, URL, "POST", false).responseJSON;

    if (result !== undefined) {
        if (result.error_code != 0) {
            console.log("Error code = " + result.error_code);
        }
    } else {
        console.log("Server connection error");
    }

    return result;
}