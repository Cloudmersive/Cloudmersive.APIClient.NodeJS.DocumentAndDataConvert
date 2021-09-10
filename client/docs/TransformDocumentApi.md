# CloudmersiveConvertApiClient.TransformDocumentApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**transformDocumentDocxReplace**](TransformDocumentApi.md#transformDocumentDocxReplace) | **POST** /convert/transform/docx/replace-all | Replace string in Word DOCX document, return result
[**transformDocumentDocxReplaceEditSession**](TransformDocumentApi.md#transformDocumentDocxReplaceEditSession) | **POST** /convert/transform/docx/replace-all/edit-session | Replace string in Word DOCX document, return edit session
[**transformDocumentDocxTableFillIn**](TransformDocumentApi.md#transformDocumentDocxTableFillIn) | **POST** /convert/transform/docx/table/fill/data | Fill in data in a table in a Word DOCX document, return result
[**transformDocumentDocxTableFillInEditSession**](TransformDocumentApi.md#transformDocumentDocxTableFillInEditSession) | **POST** /convert/transform/docx/table/fill/data/edit-session | Fill in data in a table in a Word DOCX document, return edit session
[**transformDocumentDocxTableFillInMulti**](TransformDocumentApi.md#transformDocumentDocxTableFillInMulti) | **POST** /convert/transform/docx/table/fill/data/multi | Fill in data in multiple tables in a Word DOCX document, return result
[**transformDocumentPptxReplace**](TransformDocumentApi.md#transformDocumentPptxReplace) | **POST** /convert/transform/pptx/replace-all | Replace string in PowerPoint PPTX presentation, return result


<a name="transformDocumentDocxReplace"></a>
# **transformDocumentDocxReplace**
> &#39;Blob&#39; transformDocumentDocxReplace(matchString, replaceString, opts)

Replace string in Word DOCX document, return result

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

<a name="transformDocumentDocxReplaceEditSession"></a>
# **transformDocumentDocxReplaceEditSession**
> DocumentTransformEditSession transformDocumentDocxReplaceEditSession(matchString, replaceString, opts)

Replace string in Word DOCX document, return edit session

Replace all instances of a string in an Office Word Document (docx).  Returns an edit session URL so that you can chain together multiple edit operations without having to send the entire document contents back and forth multiple times.  Call the Finish Editing API to retrieve the final document once editing is complete.

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
apiInstance.transformDocumentDocxReplaceEditSession(matchString, replaceString, opts, callback);
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

[**DocumentTransformEditSession**](DocumentTransformEditSession.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="transformDocumentDocxTableFillIn"></a>
# **transformDocumentDocxTableFillIn**
> &#39;Blob&#39; transformDocumentDocxTableFillIn(request)

Fill in data in a table in a Word DOCX document, return result

Replace placeholder rows ina  table in an Office Word Document (docx) using one or more templates

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

var request = new CloudmersiveConvertApiClient.DocxTableTableFillRequest(); // DocxTableTableFillRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transformDocumentDocxTableFillIn(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**DocxTableTableFillRequest**](DocxTableTableFillRequest.md)|  | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/octet-stream

<a name="transformDocumentDocxTableFillInEditSession"></a>
# **transformDocumentDocxTableFillInEditSession**
> DocumentTransformEditSession transformDocumentDocxTableFillInEditSession(request)

Fill in data in a table in a Word DOCX document, return edit session

Replace placeholder rows ina  table in an Office Word Document (docx) using one or more templates.  Returns an edit session URL so that you can chain together multiple edit operations without having to send the entire document contents back and forth multiple times.  Call the Finish Editing API to retrieve the final document once editing is complete.

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

var request = new CloudmersiveConvertApiClient.DocxTableTableFillRequest(); // DocxTableTableFillRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transformDocumentDocxTableFillInEditSession(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**DocxTableTableFillRequest**](DocxTableTableFillRequest.md)|  | 

### Return type

[**DocumentTransformEditSession**](DocumentTransformEditSession.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="transformDocumentDocxTableFillInMulti"></a>
# **transformDocumentDocxTableFillInMulti**
> &#39;Blob&#39; transformDocumentDocxTableFillInMulti(request)

Fill in data in multiple tables in a Word DOCX document, return result

Replace placeholder rows in multiple tables in an Office Word Document (docx) using one or more templates

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

var request = new CloudmersiveConvertApiClient.DocxTableTableFillMultiRequest(); // DocxTableTableFillMultiRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.transformDocumentDocxTableFillInMulti(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**DocxTableTableFillMultiRequest**](DocxTableTableFillMultiRequest.md)|  | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="transformDocumentPptxReplace"></a>
# **transformDocumentPptxReplace**
> &#39;Blob&#39; transformDocumentPptxReplace(matchString, replaceString, opts)

Replace string in PowerPoint PPTX presentation, return result

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

