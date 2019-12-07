# CloudmersiveConvertApiClient.RemoveDocxPagesRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputFileBytes** | **Blob** | Optional: Bytes of the input file to operate on | [optional] 
**inputFileUrl** | **String** | Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public). | [optional] 
**startDeletePageNumber** | **Number** | Page number (1-based) to start deleting pages; inclusive | [optional] 
**endDeletePageNumber** | **Number** | Page number (1-based) to stop deleting pages; inclusive | [optional] 


