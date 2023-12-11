# CloudmersiveConvertApiClient.MergeDocumentApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**mergeDocumentBatchJobCreate**](MergeDocumentApi.md#mergeDocumentBatchJobCreate) | **POST** /convert/merge/batch-job/create | Merge an array of Documents into a Single Document by Page as a Batch Job
[**mergeDocumentDocx**](MergeDocumentApi.md#mergeDocumentDocx) | **POST** /convert/merge/docx | Merge Two Word DOCX Together
[**mergeDocumentDocxMulti**](MergeDocumentApi.md#mergeDocumentDocxMulti) | **POST** /convert/merge/docx/multi | Merge Multple Word DOCX Together
[**mergeDocumentDocxMultiArray**](MergeDocumentApi.md#mergeDocumentDocxMultiArray) | **POST** /convert/merge/docx/multi/array | Merge Multple Word DOCX Together from an array
[**mergeDocumentGetAsyncJobStatus**](MergeDocumentApi.md#mergeDocumentGetAsyncJobStatus) | **GET** /convert/merge/batch-job/status | Get the status and result of a Merge Document Batch Job
[**mergeDocumentHtml**](MergeDocumentApi.md#mergeDocumentHtml) | **POST** /convert/merge/html | Merge Two HTML (HTM) Files Together
[**mergeDocumentHtmlMulti**](MergeDocumentApi.md#mergeDocumentHtmlMulti) | **POST** /convert/merge/html/multi | Merge Multple HTML (HTM) Files Together
[**mergeDocumentHtmlMultiArray**](MergeDocumentApi.md#mergeDocumentHtmlMultiArray) | **POST** /convert/merge/html/multi/array | Merge Multple HTML (HTM) Files Together from an array
[**mergeDocumentPdf**](MergeDocumentApi.md#mergeDocumentPdf) | **POST** /convert/merge/pdf | Merge Two PDF Files Together
[**mergeDocumentPdfMulti**](MergeDocumentApi.md#mergeDocumentPdfMulti) | **POST** /convert/merge/pdf/multi | Merge Multple PDF Files Together
[**mergeDocumentPdfMultiArray**](MergeDocumentApi.md#mergeDocumentPdfMultiArray) | **POST** /convert/merge/pdf/multi/array | Merge Multple PDF Files Together from an array
[**mergeDocumentPng**](MergeDocumentApi.md#mergeDocumentPng) | **POST** /convert/merge/png/vertical | Merge Two PNG Files Together
[**mergeDocumentPngMulti**](MergeDocumentApi.md#mergeDocumentPngMulti) | **POST** /convert/merge/png/vertical/multi | Merge Multple PNG Files Together
[**mergeDocumentPngMultiArray**](MergeDocumentApi.md#mergeDocumentPngMultiArray) | **POST** /convert/merge/png/vertical/multi/array | Merge Multple PNG Files Together from an array
[**mergeDocumentPptx**](MergeDocumentApi.md#mergeDocumentPptx) | **POST** /convert/merge/pptx | Merge Two PowerPoint PPTX Together
[**mergeDocumentPptxMulti**](MergeDocumentApi.md#mergeDocumentPptxMulti) | **POST** /convert/merge/pptx/multi | Merge Multple PowerPoint PPTX Together
[**mergeDocumentPptxMultiArray**](MergeDocumentApi.md#mergeDocumentPptxMultiArray) | **POST** /convert/merge/pptx/multi/array | Merge Multple PowerPoint PPTX Together from an array
[**mergeDocumentTxt**](MergeDocumentApi.md#mergeDocumentTxt) | **POST** /convert/merge/txt | Merge Two Text (TXT) Files Together
[**mergeDocumentTxtMulti**](MergeDocumentApi.md#mergeDocumentTxtMulti) | **POST** /convert/merge/txt/multi | Merge Multple Text (TXT) Files Together
[**mergeDocumentXlsx**](MergeDocumentApi.md#mergeDocumentXlsx) | **POST** /convert/merge/xlsx | Merge Two Excel XLSX Together
[**mergeDocumentXlsxMulti**](MergeDocumentApi.md#mergeDocumentXlsxMulti) | **POST** /convert/merge/xlsx/multi | Merge Multple Excel XLSX Together
[**mergeDocumentXlsxMultiArray**](MergeDocumentApi.md#mergeDocumentXlsxMultiArray) | **POST** /convert/merge/xlsx/multi/array | Merge Multple Excel XLSX Together from an Array


<a name="mergeDocumentBatchJobCreate"></a>
# **mergeDocumentBatchJobCreate**
> MergeBatchJobCreateResult mergeDocumentBatchJobCreate(input)

Merge an array of Documents into a Single Document by Page as a Batch Job

Merge an array of Documents (PDF supported), into a single document.  This API is designed for large jobs that could take a long time to create and so runs as a batch job that returns a Job ID that you can use with the GetAsyncJobStatus API to check on the status of the Job and ultimately get the output result.  This API automatically detects the document type and then performs the split by using the document type-specific API needed to perform the split.  This API is only available for Cloudmersive Managed Instance and Private Cloud deployments.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var input = new CloudmersiveConvertApiClient.DocumentArrayInput(); // DocumentArrayInput | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentBatchJobCreate(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**DocumentArrayInput**](DocumentArrayInput.md)|  | 

### Return type

[**MergeBatchJobCreateResult**](MergeBatchJobCreateResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="mergeDocumentDocx"></a>
# **mergeDocumentDocx**
> &#39;Blob&#39; mergeDocumentDocx(inputFile1, inputFile2)

Merge Two Word DOCX Together

Combine two Office Word Documents (docx) into one single Office Word document

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var inputFile2 = "/path/to/file.txt"; // File | Second input file to perform the operation on (more than 2 can be supplied).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentDocx(inputFile1, inputFile2, callback);
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

<a name="mergeDocumentDocxMulti"></a>
# **mergeDocumentDocxMulti**
> &#39;Blob&#39; mergeDocumentDocxMulti(inputFile1, inputFile2, opts)

Merge Multple Word DOCX Together

Combine multiple Office Word Documents (docx) into one single Office Word document

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var inputFile2 = "/path/to/file.txt"; // File | Second input file to perform the operation on.

var opts = { 
  'inputFile3': "/path/to/file.txt", // File | Third input file to perform the operation on.
  'inputFile4': "/path/to/file.txt", // File | Fourth input file to perform the operation on.
  'inputFile5': "/path/to/file.txt", // File | Fifth input file to perform the operation on.
  'inputFile6': "/path/to/file.txt", // File | Sixth input file to perform the operation on.
  'inputFile7': "/path/to/file.txt", // File | Seventh input file to perform the operation on.
  'inputFile8': "/path/to/file.txt", // File | Eighth input file to perform the operation on.
  'inputFile9': "/path/to/file.txt", // File | Ninth input file to perform the operation on.
  'inputFile10': "/path/to/file.txt" // File | Tenth input file to perform the operation on.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentDocxMulti(inputFile1, inputFile2, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile1** | **File**| First input file to perform the operation on. | 
 **inputFile2** | **File**| Second input file to perform the operation on. | 
 **inputFile3** | **File**| Third input file to perform the operation on. | [optional] 
 **inputFile4** | **File**| Fourth input file to perform the operation on. | [optional] 
 **inputFile5** | **File**| Fifth input file to perform the operation on. | [optional] 
 **inputFile6** | **File**| Sixth input file to perform the operation on. | [optional] 
 **inputFile7** | **File**| Seventh input file to perform the operation on. | [optional] 
 **inputFile8** | **File**| Eighth input file to perform the operation on. | [optional] 
 **inputFile9** | **File**| Ninth input file to perform the operation on. | [optional] 
 **inputFile10** | **File**| Tenth input file to perform the operation on. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="mergeDocumentDocxMultiArray"></a>
# **mergeDocumentDocxMultiArray**
> Object mergeDocumentDocxMultiArray(input)

Merge Multple Word DOCX Together from an array

Combine multiple Office Word Documents (docx), stored in an array, into one single Office Word document

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var input = new CloudmersiveConvertApiClient.DocumentArrayInput(); // DocumentArrayInput | Array of input files


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentDocxMultiArray(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**DocumentArrayInput**](DocumentArrayInput.md)| Array of input files | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/octet-stream

<a name="mergeDocumentGetAsyncJobStatus"></a>
# **mergeDocumentGetAsyncJobStatus**
> MergeJobStatusResult mergeDocumentGetAsyncJobStatus(asyncJobID)

Get the status and result of a Merge Document Batch Job

Returns the result of the Async Job - possible states can be STARTED or COMPLETED.  This API is only available for Cloudmersive Managed Instance and Private Cloud deployments.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var asyncJobID = "asyncJobID_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentGetAsyncJobStatus(asyncJobID, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asyncJobID** | **String**|  | 

### Return type

[**MergeJobStatusResult**](MergeJobStatusResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="mergeDocumentHtml"></a>
# **mergeDocumentHtml**
> &#39;Blob&#39; mergeDocumentHtml(inputFile1, inputFile2)

Merge Two HTML (HTM) Files Together

Combine two HTML (.HTM) files into a single text document, preserving the order of the input documents in the combined document by stacking them vertically.  The title will be taken from the first document.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var inputFile2 = "/path/to/file.txt"; // File | Second input file to perform the operation on (more than 2 can be supplied).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentHtml(inputFile1, inputFile2, callback);
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

<a name="mergeDocumentHtmlMulti"></a>
# **mergeDocumentHtmlMulti**
> &#39;Blob&#39; mergeDocumentHtmlMulti(inputFile1, inputFile2, opts)

Merge Multple HTML (HTM) Files Together

Combine multiple HTML (.HTM) files into a single text document, preserving the order of the input documents in the combined document by stacking them vertically.  The title will be taken from the first document.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var inputFile2 = "/path/to/file.txt"; // File | Second input file to perform the operation on.

var opts = { 
  'inputFile3': "/path/to/file.txt", // File | Third input file to perform the operation on.
  'inputFile4': "/path/to/file.txt", // File | Fourth input file to perform the operation on.
  'inputFile5': "/path/to/file.txt", // File | Fifth input file to perform the operation on.
  'inputFile6': "/path/to/file.txt", // File | Sixth input file to perform the operation on.
  'inputFile7': "/path/to/file.txt", // File | Seventh input file to perform the operation on.
  'inputFile8': "/path/to/file.txt", // File | Eighth input file to perform the operation on.
  'inputFile9': "/path/to/file.txt", // File | Ninth input file to perform the operation on.
  'inputFile10': "/path/to/file.txt" // File | Tenth input file to perform the operation on.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentHtmlMulti(inputFile1, inputFile2, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile1** | **File**| First input file to perform the operation on. | 
 **inputFile2** | **File**| Second input file to perform the operation on. | 
 **inputFile3** | **File**| Third input file to perform the operation on. | [optional] 
 **inputFile4** | **File**| Fourth input file to perform the operation on. | [optional] 
 **inputFile5** | **File**| Fifth input file to perform the operation on. | [optional] 
 **inputFile6** | **File**| Sixth input file to perform the operation on. | [optional] 
 **inputFile7** | **File**| Seventh input file to perform the operation on. | [optional] 
 **inputFile8** | **File**| Eighth input file to perform the operation on. | [optional] 
 **inputFile9** | **File**| Ninth input file to perform the operation on. | [optional] 
 **inputFile10** | **File**| Tenth input file to perform the operation on. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="mergeDocumentHtmlMultiArray"></a>
# **mergeDocumentHtmlMultiArray**
> Object mergeDocumentHtmlMultiArray(input)

Merge Multple HTML (HTM) Files Together from an array

Combine multiple HTML (.HTM) files, from an array, into a single text document, preserving the order of the input documents in the combined document by stacking them vertically.  The title will be taken from the first document.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var input = new CloudmersiveConvertApiClient.DocumentArrayInput(); // DocumentArrayInput | Array of input files


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentHtmlMultiArray(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**DocumentArrayInput**](DocumentArrayInput.md)| Array of input files | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/octet-stream

<a name="mergeDocumentPdf"></a>
# **mergeDocumentPdf**
> &#39;Blob&#39; mergeDocumentPdf(inputFile1, inputFile2)

Merge Two PDF Files Together

Combine two PDF files (pdf) into a single PDF document, preserving the order of the input documents in the combined document

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var inputFile2 = "/path/to/file.txt"; // File | Second input file to perform the operation on (more than 2 can be supplied).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentPdf(inputFile1, inputFile2, callback);
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

<a name="mergeDocumentPdfMulti"></a>
# **mergeDocumentPdfMulti**
> &#39;Blob&#39; mergeDocumentPdfMulti(inputFile1, inputFile2, opts)

Merge Multple PDF Files Together

Combine multiple PDF files (pdf) into a single PDF document, preserving the order of the input documents in the combined document

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var inputFile2 = "/path/to/file.txt"; // File | Second input file to perform the operation on.

var opts = { 
  'inputFile3': "/path/to/file.txt", // File | Third input file to perform the operation on.
  'inputFile4': "/path/to/file.txt", // File | Fourth input file to perform the operation on.
  'inputFile5': "/path/to/file.txt", // File | Fifth input file to perform the operation on.
  'inputFile6': "/path/to/file.txt", // File | Sixth input file to perform the operation on.
  'inputFile7': "/path/to/file.txt", // File | Seventh input file to perform the operation on.
  'inputFile8': "/path/to/file.txt", // File | Eighth input file to perform the operation on.
  'inputFile9': "/path/to/file.txt", // File | Ninth input file to perform the operation on.
  'inputFile10': "/path/to/file.txt" // File | Tenth input file to perform the operation on.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentPdfMulti(inputFile1, inputFile2, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile1** | **File**| First input file to perform the operation on. | 
 **inputFile2** | **File**| Second input file to perform the operation on. | 
 **inputFile3** | **File**| Third input file to perform the operation on. | [optional] 
 **inputFile4** | **File**| Fourth input file to perform the operation on. | [optional] 
 **inputFile5** | **File**| Fifth input file to perform the operation on. | [optional] 
 **inputFile6** | **File**| Sixth input file to perform the operation on. | [optional] 
 **inputFile7** | **File**| Seventh input file to perform the operation on. | [optional] 
 **inputFile8** | **File**| Eighth input file to perform the operation on. | [optional] 
 **inputFile9** | **File**| Ninth input file to perform the operation on. | [optional] 
 **inputFile10** | **File**| Tenth input file to perform the operation on. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="mergeDocumentPdfMultiArray"></a>
# **mergeDocumentPdfMultiArray**
> Object mergeDocumentPdfMultiArray(input)

Merge Multple PDF Files Together from an array

Combine multiple PDF files (pdf), as an array, into a single PDF document, preserving the order of the input documents in the combined document

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var input = new CloudmersiveConvertApiClient.DocumentArrayInput(); // DocumentArrayInput | Array of input files


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentPdfMultiArray(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**DocumentArrayInput**](DocumentArrayInput.md)| Array of input files | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/octet-stream

<a name="mergeDocumentPng"></a>
# **mergeDocumentPng**
> &#39;Blob&#39; mergeDocumentPng(inputFile1, inputFile2)

Merge Two PNG Files Together

Combine two PNG files into a single PNG document, preserving the order of the input documents in the combined document by stacking them vertically

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var inputFile2 = "/path/to/file.txt"; // File | Second input file to perform the operation on (more than 2 can be supplied).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentPng(inputFile1, inputFile2, callback);
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

<a name="mergeDocumentPngMulti"></a>
# **mergeDocumentPngMulti**
> &#39;Blob&#39; mergeDocumentPngMulti(inputFile1, inputFile2, opts)

Merge Multple PNG Files Together

Combine multiple PNG files into a single PNG document, preserving the order of the input documents in the combined document by stacking them vertically

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var inputFile2 = "/path/to/file.txt"; // File | Second input file to perform the operation on.

var opts = { 
  'inputFile3': "/path/to/file.txt", // File | Third input file to perform the operation on.
  'inputFile4': "/path/to/file.txt", // File | Fourth input file to perform the operation on.
  'inputFile5': "/path/to/file.txt", // File | Fifth input file to perform the operation on.
  'inputFile6': "/path/to/file.txt", // File | Sixth input file to perform the operation on.
  'inputFile7': "/path/to/file.txt", // File | Seventh input file to perform the operation on.
  'inputFile8': "/path/to/file.txt", // File | Eighth input file to perform the operation on.
  'inputFile9': "/path/to/file.txt", // File | Ninth input file to perform the operation on.
  'inputFile10': "/path/to/file.txt" // File | Tenth input file to perform the operation on.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentPngMulti(inputFile1, inputFile2, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile1** | **File**| First input file to perform the operation on. | 
 **inputFile2** | **File**| Second input file to perform the operation on. | 
 **inputFile3** | **File**| Third input file to perform the operation on. | [optional] 
 **inputFile4** | **File**| Fourth input file to perform the operation on. | [optional] 
 **inputFile5** | **File**| Fifth input file to perform the operation on. | [optional] 
 **inputFile6** | **File**| Sixth input file to perform the operation on. | [optional] 
 **inputFile7** | **File**| Seventh input file to perform the operation on. | [optional] 
 **inputFile8** | **File**| Eighth input file to perform the operation on. | [optional] 
 **inputFile9** | **File**| Ninth input file to perform the operation on. | [optional] 
 **inputFile10** | **File**| Tenth input file to perform the operation on. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="mergeDocumentPngMultiArray"></a>
# **mergeDocumentPngMultiArray**
> Object mergeDocumentPngMultiArray(input)

Merge Multple PNG Files Together from an array

Combine multiple PNG files, from an array, into a single PNG document, preserving the order of the input documents in the combined document by stacking them vertically

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var input = new CloudmersiveConvertApiClient.DocumentArrayInput(); // DocumentArrayInput | Array of input files


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentPngMultiArray(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**DocumentArrayInput**](DocumentArrayInput.md)| Array of input files | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/octet-stream

<a name="mergeDocumentPptx"></a>
# **mergeDocumentPptx**
> &#39;Blob&#39; mergeDocumentPptx(inputFile1, inputFile2)

Merge Two PowerPoint PPTX Together

Combine two Office PowerPoint presentations (pptx) into one single Office PowerPoint presentation

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var inputFile2 = "/path/to/file.txt"; // File | Second input file to perform the operation on (more than 2 can be supplied).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentPptx(inputFile1, inputFile2, callback);
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

<a name="mergeDocumentPptxMulti"></a>
# **mergeDocumentPptxMulti**
> &#39;Blob&#39; mergeDocumentPptxMulti(inputFile1, inputFile2, opts)

Merge Multple PowerPoint PPTX Together

Combine multiple Office PowerPoint presentations (pptx) into one single Office PowerPoint presentation

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var inputFile2 = "/path/to/file.txt"; // File | Second input file to perform the operation on.

var opts = { 
  'inputFile3': "/path/to/file.txt", // File | Third input file to perform the operation on.
  'inputFile4': "/path/to/file.txt", // File | Fourth input file to perform the operation on.
  'inputFile5': "/path/to/file.txt", // File | Fifth input file to perform the operation on.
  'inputFile6': "/path/to/file.txt", // File | Sixth input file to perform the operation on.
  'inputFile7': "/path/to/file.txt", // File | Seventh input file to perform the operation on.
  'inputFile8': "/path/to/file.txt", // File | Eighth input file to perform the operation on.
  'inputFile9': "/path/to/file.txt", // File | Ninth input file to perform the operation on.
  'inputFile10': "/path/to/file.txt" // File | Tenth input file to perform the operation on.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentPptxMulti(inputFile1, inputFile2, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile1** | **File**| First input file to perform the operation on. | 
 **inputFile2** | **File**| Second input file to perform the operation on. | 
 **inputFile3** | **File**| Third input file to perform the operation on. | [optional] 
 **inputFile4** | **File**| Fourth input file to perform the operation on. | [optional] 
 **inputFile5** | **File**| Fifth input file to perform the operation on. | [optional] 
 **inputFile6** | **File**| Sixth input file to perform the operation on. | [optional] 
 **inputFile7** | **File**| Seventh input file to perform the operation on. | [optional] 
 **inputFile8** | **File**| Eighth input file to perform the operation on. | [optional] 
 **inputFile9** | **File**| Ninth input file to perform the operation on. | [optional] 
 **inputFile10** | **File**| Tenth input file to perform the operation on. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="mergeDocumentPptxMultiArray"></a>
# **mergeDocumentPptxMultiArray**
> Object mergeDocumentPptxMultiArray(input)

Merge Multple PowerPoint PPTX Together from an array

Combine multiple Office PowerPoint presentations (pptx), from an array, into one single Office PowerPoint presentation

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var input = new CloudmersiveConvertApiClient.DocumentArrayInput(); // DocumentArrayInput | Array of input files


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentPptxMultiArray(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**DocumentArrayInput**](DocumentArrayInput.md)| Array of input files | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/octet-stream

<a name="mergeDocumentTxt"></a>
# **mergeDocumentTxt**
> Object mergeDocumentTxt(inputFile1, inputFile2)

Merge Two Text (TXT) Files Together

Combine two Text (.TXT) files into a single text document, preserving the order of the input documents in the combined document by stacking them vertically.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var inputFile2 = "/path/to/file.txt"; // File | Second input file to perform the operation on (more than 2 can be supplied).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentTxt(inputFile1, inputFile2, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile1** | **File**| First input file to perform the operation on. | 
 **inputFile2** | **File**| Second input file to perform the operation on (more than 2 can be supplied). | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="mergeDocumentTxtMulti"></a>
# **mergeDocumentTxtMulti**
> &#39;Blob&#39; mergeDocumentTxtMulti(inputFile1, inputFile2, opts)

Merge Multple Text (TXT) Files Together

Combine multiple Text (.TXT) files into a single text document, preserving the order of the input documents in the combined document by stacking them vertically.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var inputFile2 = "/path/to/file.txt"; // File | Second input file to perform the operation on.

var opts = { 
  'inputFile3': "/path/to/file.txt", // File | Third input file to perform the operation on.
  'inputFile4': "/path/to/file.txt", // File | Fourth input file to perform the operation on.
  'inputFile5': "/path/to/file.txt", // File | Fifth input file to perform the operation on.
  'inputFile6': "/path/to/file.txt", // File | Sixth input file to perform the operation on.
  'inputFile7': "/path/to/file.txt", // File | Seventh input file to perform the operation on.
  'inputFile8': "/path/to/file.txt", // File | Eighth input file to perform the operation on.
  'inputFile9': "/path/to/file.txt", // File | Ninth input file to perform the operation on.
  'inputFile10': "/path/to/file.txt" // File | Tenth input file to perform the operation on.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentTxtMulti(inputFile1, inputFile2, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile1** | **File**| First input file to perform the operation on. | 
 **inputFile2** | **File**| Second input file to perform the operation on. | 
 **inputFile3** | **File**| Third input file to perform the operation on. | [optional] 
 **inputFile4** | **File**| Fourth input file to perform the operation on. | [optional] 
 **inputFile5** | **File**| Fifth input file to perform the operation on. | [optional] 
 **inputFile6** | **File**| Sixth input file to perform the operation on. | [optional] 
 **inputFile7** | **File**| Seventh input file to perform the operation on. | [optional] 
 **inputFile8** | **File**| Eighth input file to perform the operation on. | [optional] 
 **inputFile9** | **File**| Ninth input file to perform the operation on. | [optional] 
 **inputFile10** | **File**| Tenth input file to perform the operation on. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="mergeDocumentXlsx"></a>
# **mergeDocumentXlsx**
> &#39;Blob&#39; mergeDocumentXlsx(inputFile1, inputFile2)

Merge Two Excel XLSX Together

Combine two Office Excel spreadsheets (xlsx) into a single Office Excel spreadsheet

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var inputFile2 = "/path/to/file.txt"; // File | Second input file to perform the operation on (more than 2 can be supplied).


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentXlsx(inputFile1, inputFile2, callback);
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

<a name="mergeDocumentXlsxMulti"></a>
# **mergeDocumentXlsxMulti**
> &#39;Blob&#39; mergeDocumentXlsxMulti(inputFile1, inputFile2, opts)

Merge Multple Excel XLSX Together

Combine multiple Office Excel spreadsheets (xlsx) into a single Office Excel spreadsheet

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var inputFile2 = "/path/to/file.txt"; // File | Second input file to perform the operation on.

var opts = { 
  'inputFile3': "/path/to/file.txt", // File | Third input file to perform the operation on.
  'inputFile4': "/path/to/file.txt", // File | Fourth input file to perform the operation on.
  'inputFile5': "/path/to/file.txt", // File | Fifth input file to perform the operation on.
  'inputFile6': "/path/to/file.txt", // File | Sixth input file to perform the operation on.
  'inputFile7': "/path/to/file.txt", // File | Seventh input file to perform the operation on.
  'inputFile8': "/path/to/file.txt", // File | Eighth input file to perform the operation on.
  'inputFile9': "/path/to/file.txt", // File | Ninth input file to perform the operation on.
  'inputFile10': "/path/to/file.txt" // File | Tenth input file to perform the operation on.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentXlsxMulti(inputFile1, inputFile2, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile1** | **File**| First input file to perform the operation on. | 
 **inputFile2** | **File**| Second input file to perform the operation on. | 
 **inputFile3** | **File**| Third input file to perform the operation on. | [optional] 
 **inputFile4** | **File**| Fourth input file to perform the operation on. | [optional] 
 **inputFile5** | **File**| Fifth input file to perform the operation on. | [optional] 
 **inputFile6** | **File**| Sixth input file to perform the operation on. | [optional] 
 **inputFile7** | **File**| Seventh input file to perform the operation on. | [optional] 
 **inputFile8** | **File**| Eighth input file to perform the operation on. | [optional] 
 **inputFile9** | **File**| Ninth input file to perform the operation on. | [optional] 
 **inputFile10** | **File**| Tenth input file to perform the operation on. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="mergeDocumentXlsxMultiArray"></a>
# **mergeDocumentXlsxMultiArray**
> Object mergeDocumentXlsxMultiArray(input)

Merge Multple Excel XLSX Together from an Array

Combine multiple Office Excel spreadsheets (xlsx), as an array, into a single Office Excel spreadsheet

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.MergeDocumentApi();

var input = new CloudmersiveConvertApiClient.DocumentArrayInput(); // DocumentArrayInput | Array of input files


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.mergeDocumentXlsxMultiArray(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**DocumentArrayInput**](DocumentArrayInput.md)| Array of input files | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/octet-stream

