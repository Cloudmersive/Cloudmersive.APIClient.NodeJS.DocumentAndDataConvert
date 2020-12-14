# CloudmersiveConvertApiClient.ViewerToolsApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**viewerToolsCreateSimple**](ViewerToolsApi.md#viewerToolsCreateSimple) | **POST** /convert/viewer/create/web/simple | Create a web-based viewer


<a name="viewerToolsCreateSimple"></a>
# **viewerToolsCreateSimple**
> ViewerResponse viewerToolsCreateSimple(inputFile, opts)

Create a web-based viewer

Creates an HTML embed code for a simple web-based viewer of a document; supports Office document types and PDF.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ViewerToolsApi();

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.

var opts = { 
  'width': 56, // Number | Optional; width of the output viewer in pixels
  'height': 56 // Number | Optional; height of the output viewer in pixels
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.viewerToolsCreateSimple(inputFile, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 
 **width** | **Number**| Optional; width of the output viewer in pixels | [optional] 
 **height** | **Number**| Optional; height of the output viewer in pixels | [optional] 

### Return type

[**ViewerResponse**](ViewerResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

