function doGet(e) {
    return HtmlService.createHtmlOutput("Request received.");
  }
  
  function doPost(e) {
    var sheet = SpreadsheetApp.openById("1AbcD-EfGhIjKlMnO1234-PQRSTUVWxYZ").getActiveSheet();
    var name = e.parameter.name;
    var email = e.parameter.email;
    var message = e.parameter.message;
  
    sheet.appendRow([name, email, message]);
    
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" })).setMimeType(ContentService.MimeType.JSON);
  }
