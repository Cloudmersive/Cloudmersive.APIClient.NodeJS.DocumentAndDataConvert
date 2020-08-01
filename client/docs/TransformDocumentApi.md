# CloudmersiveConvertApiClient.TransformDocumentApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transformDocumentDocxReplace**](TransformDocumentApi.md#transformDocumentDocxReplace) | **POST** /convert/transform/docx/replace-all | Replace string in Word DOCX document
[**transformDocumentPptxReplace**](TransformDocumentApi.md#transformDocumentPptxReplace) | **POST** /convert/transform/pptx/replace-all | Replace string in PowerPoint PPTX presentation


<a name="transformDocumentDocxReplace"></a>
# **transformDocumentDocxReplace**
> &#39;Blob&#39; transformDocumentDocxReplace(matchString, replaceString, opts)

Replace string in Word DOCX document

Replace all instances of a string in an Office Word Document (docx)

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.TransformDocumentApi();

var matchString = "matchString_example"; // String | String to search for and match against, to be replaced

var replaceString = "replaceString_example"; // String | String to replace the matched values with

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Optional: Input file to perform the operation on.
  'inputFileUrl': "inputFileUrl_example", // String | Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API (part of EditDocumentApi) to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public).
  'matchCase': true // Boolean | Optional: True if the case should be matched, false for case insensitive match. Default is false.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transformDocumentDocxReplace(matchString, replaceString, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **matchString** | **String**| String to search for and match against, to be replaced | 
 **replaceString** | **String**| String to replace the matched values with | 
 **inputFile** | **File**| Optional: Input file to perform the operation on. | [optional] 
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API (part of EditDocumentApi) to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public). | [optional] 
 **matchCase** | **Boolean**| Optional: True if the case should be matched, false for case insensitive match. Default is false. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

<a name="transformDocumentPptxReplace"></a>
# **transformDocumentPptxReplace**
> &#39;Blob&#39; transformDocumentPptxReplace(matchString, replaceString, opts)

Replace string in PowerPoint PPTX presentation

Replace all instances of a string in an Office PowerPoint Document (pptx)

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.TransformDocumentApi();

var matchString = "matchString_example"; // String | String to search for and match against, to be replaced

var replaceString = "replaceString_example"; // String | String to replace the matched values with

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Optional: Input file to perform the operation on.
  'inputFileUrl': "inputFileUrl_example", // String | Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API (part of EditDocumentApi) to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public).
  'matchCase': true // Boolean | Optional: True if the case should be matched, false for case insensitive match. Default is false.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transformDocumentPptxReplace(matchString, replaceString, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **matchString** | **String**| String to search for and match against, to be replaced | 
 **replaceString** | **String**| String to replace the matched values with | 
 **inputFile** | **File**| Optional: Input file to perform the operation on. | [optional] 
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API (part of EditDocumentApi) to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public). | [optional] 
 **matchCase** | **Boolean**| Optional: True if the case should be matched, false for case insensitive match. Default is false. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

