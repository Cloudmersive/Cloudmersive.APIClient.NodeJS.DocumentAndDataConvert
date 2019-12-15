# CloudmersiveConvertApiClient.UpdateDocxTableRowRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputFileBytes** | **Blob** | Optional: Bytes of the input file to operate on | [optional] 
**inputFileUrl** | **String** | Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public). | [optional] 
**rowToUpdate** | [**DocxTableRow**](DocxTableRow.md) | Table row contents you would like to update the row with | [optional] 
**tableRowIndex** | **Number** | 0-based index of the Table Row to update | [optional] 
**existingTablePath** | **String** | Required; the path to the existing table to modify | [optional] 


