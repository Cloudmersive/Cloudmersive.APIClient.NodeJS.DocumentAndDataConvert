# CloudmersiveConvertApiClient.CompareDocumentApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compareDocumentDocx**](CompareDocumentApi.md#compareDocumentDocx) | **POST** /convert/compare/docx | Compare Two Word DOCX


<a name="compareDocumentDocx"></a>
# **compareDocumentDocx**
> &#39;Blob&#39; compareDocumentDocx(inputFile1, inputFile2)

Compare Two Word DOCX

Compare two Office Word Documents (docx) files and highlight the differences

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.CompareDocumentApi();

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var inputFile2 = "/path/to/file.txt"; // File | Second input file to perform the operation on (more than 2 can be supplied).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.compareDocumentDocx(inputFile1, inputFile2, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile1** | **File**| First input file to perform the operation on. | 
 **inputFile2** | **File**| Second input file to perform the operation on (more than 2 can be supplied). | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

