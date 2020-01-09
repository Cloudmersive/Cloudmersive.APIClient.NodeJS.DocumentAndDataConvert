# CloudmersiveConvertApiClient.SetXlsxCellByIdentifierRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputFileBytes** | **Blob** | Optional: Bytes of the input file to operate on | [optional] 
**inputFileUrl** | **String** | Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public). | [optional] 
**worksheetToUpdate** | [**XlsxWorksheet**](XlsxWorksheet.md) | Optional; Worksheet (tab) within the spreadsheet to update; leave blank to default to the first worksheet | [optional] 
**cellIdentifier** | **String** | The Excel cell identifier (e.g. A1, B2, C33, etc.) of the cell to update | [optional] 
**cellValue** | [**XlsxSpreadsheetCell**](XlsxSpreadsheetCell.md) | New Cell value to update/overwrite into the Excel XLSX spreadsheet | [optional] 


