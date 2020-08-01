# CloudmersiveConvertApiClient.EditHtmlApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editHtmlHtmlAppendHeading**](EditHtmlApi.md#editHtmlHtmlAppendHeading) | **POST** /convert/edit/html/append/heading | Append a Heading to an HTML Document
[**editHtmlHtmlAppendImageFromUrl**](EditHtmlApi.md#editHtmlHtmlAppendImageFromUrl) | **POST** /convert/edit/html/append/image/from-url | Append an Image to an HTML Document from a URL
[**editHtmlHtmlAppendImageInline**](EditHtmlApi.md#editHtmlHtmlAppendImageInline) | **POST** /convert/edit/html/append/image/inline | Append a Base64 Inline Image to an HTML Document
[**editHtmlHtmlAppendParagraph**](EditHtmlApi.md#editHtmlHtmlAppendParagraph) | **POST** /convert/edit/html/append/paragraph | Append a Paragraph to an HTML Document


<a name="editHtmlHtmlAppendHeading"></a>
# **editHtmlHtmlAppendHeading**
> &#39;Blob&#39; editHtmlHtmlAppendHeading(headingText, opts)

Append a Heading to an HTML Document

Appends a heading to the end of an HTML document.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.EditHtmlApi();

var headingText = "headingText_example"; // String | The text content to be used in the header.

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Optional: Input file to perform the operation on.
  'inputFileUrl': "inputFileUrl_example", // String | Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API (part of EditDocumentApi) to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public).
  'headingSize': 56 // Number | Optional: The heading size number. Default is 1.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editHtmlHtmlAppendHeading(headingText, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **headingText** | **String**| The text content to be used in the header. | 
 **inputFile** | **File**| Optional: Input file to perform the operation on. | [optional] 
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API (part of EditDocumentApi) to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public). | [optional] 
 **headingSize** | **Number**| Optional: The heading size number. Default is 1. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="editHtmlHtmlAppendImageFromUrl"></a>
# **editHtmlHtmlAppendImageFromUrl**
> &#39;Blob&#39; editHtmlHtmlAppendImageFromUrl(imageUrl, opts)

Append an Image to an HTML Document from a URL

Appends an image to the end of an HTML document using a URL.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.EditHtmlApi();

var imageUrl = "imageUrl_example"; // String | The URL for the image.

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Optional: Input file to perform the operation on.
  'inputFileUrl': "inputFileUrl_example", // String | Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API (part of EditDocumentApi) to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public).
  'cssStyle': "cssStyle_example" // String | Optional: CSS style for the image.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editHtmlHtmlAppendImageFromUrl(imageUrl, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageUrl** | **String**| The URL for the image. | 
 **inputFile** | **File**| Optional: Input file to perform the operation on. | [optional] 
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API (part of EditDocumentApi) to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public). | [optional] 
 **cssStyle** | **String**| Optional: CSS style for the image. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="editHtmlHtmlAppendImageInline"></a>
# **editHtmlHtmlAppendImageInline**
> &#39;Blob&#39; editHtmlHtmlAppendImageInline(opts)

Append a Base64 Inline Image to an HTML Document

Appends a base64 inline image to the end of an HTML document from an input file or URL.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.EditHtmlApi();

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Optional: Input file to perform the operation on.
  'inputFileUrl': "inputFileUrl_example", // String | Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API (part of EditDocumentApi) to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public).
  'imageFile': "/path/to/file.txt", // File | Optional: Image file to be appended as base64 inline image.
  'imageUrl': "imageUrl_example", // String | Optional: Image URL to be appended as base64 inline image.
  'cssStyle': "cssStyle_example", // String | Optional: CSS style for the image.
  'imageExtension': "imageExtension_example" // String | Optional: The extension (JPG, PNG, GIF, etc.) of the image file. Recommended if uploading a file directly, such as with a byte array. If no extension can be determined, will default to JPG.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editHtmlHtmlAppendImageInline(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Optional: Input file to perform the operation on. | [optional] 
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API (part of EditDocumentApi) to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public). | [optional] 
 **imageFile** | **File**| Optional: Image file to be appended as base64 inline image. | [optional] 
 **imageUrl** | **String**| Optional: Image URL to be appended as base64 inline image. | [optional] 
 **cssStyle** | **String**| Optional: CSS style for the image. | [optional] 
 **imageExtension** | **String**| Optional: The extension (JPG, PNG, GIF, etc.) of the image file. Recommended if uploading a file directly, such as with a byte array. If no extension can be determined, will default to JPG. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="editHtmlHtmlAppendParagraph"></a>
# **editHtmlHtmlAppendParagraph**
> &#39;Blob&#39; editHtmlHtmlAppendParagraph(paragraphText, opts)

Append a Paragraph to an HTML Document

Appends a paragraph to the end of an HTML document.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.EditHtmlApi();

var paragraphText = "paragraphText_example"; // String | The text content to be used in the paragraph.

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Optional: Input file to perform the operation on.
  'inputFileUrl': "inputFileUrl_example" // String | Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API (part of EditDocumentApi) to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public).
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editHtmlHtmlAppendParagraph(paragraphText, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paragraphText** | **String**| The text content to be used in the paragraph. | 
 **inputFile** | **File**| Optional: Input file to perform the operation on. | [optional] 
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API (part of EditDocumentApi) to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public). | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

