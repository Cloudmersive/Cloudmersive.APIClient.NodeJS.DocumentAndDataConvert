# CloudmersiveConvertApiClient.EditHtmlApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**editHtmlHtmlAppendHeaderTag**](EditHtmlApi.md#editHtmlHtmlAppendHeaderTag) | **POST** /convert/edit/html/head/append/tag | Append an HTML tag to the HEAD section of an HTML Document
[**editHtmlHtmlAppendHeading**](EditHtmlApi.md#editHtmlHtmlAppendHeading) | **POST** /convert/edit/html/append/heading | Append a Heading to an HTML Document
[**editHtmlHtmlAppendImageFromUrl**](EditHtmlApi.md#editHtmlHtmlAppendImageFromUrl) | **POST** /convert/edit/html/append/image/from-url | Append an Image to an HTML Document from a URL
[**editHtmlHtmlAppendImageInline**](EditHtmlApi.md#editHtmlHtmlAppendImageInline) | **POST** /convert/edit/html/append/image/inline | Append a Base64 Inline Image to an HTML Document
[**editHtmlHtmlAppendParagraph**](EditHtmlApi.md#editHtmlHtmlAppendParagraph) | **POST** /convert/edit/html/append/paragraph | Append a Paragraph to an HTML Document
[**editHtmlHtmlCreateBlankDocument**](EditHtmlApi.md#editHtmlHtmlCreateBlankDocument) | **POST** /convert/edit/html/create/blank | Create a Blank HTML Document
[**editHtmlHtmlGetLanguage**](EditHtmlApi.md#editHtmlHtmlGetLanguage) | **POST** /convert/edit/html/head/get/language | Gets the language for the HTML document
[**editHtmlHtmlGetLinks**](EditHtmlApi.md#editHtmlHtmlGetLinks) | **POST** /convert/edit/html/extract/links | Extract resolved link URLs from HTML File
[**editHtmlHtmlGetRelCanonical**](EditHtmlApi.md#editHtmlHtmlGetRelCanonical) | **POST** /convert/edit/html/head/get/rel-canonical-url | Gets the rel canonical URL for the HTML document
[**editHtmlHtmlGetSitemap**](EditHtmlApi.md#editHtmlHtmlGetSitemap) | **POST** /convert/edit/html/head/get/sitemap-url | Gets the sitemap URL for the HTML document
[**editHtmlHtmlSetLanguage**](EditHtmlApi.md#editHtmlHtmlSetLanguage) | **POST** /convert/edit/html/head/set/language | Sets the language for the HTML document
[**editHtmlHtmlSetRelCanonical**](EditHtmlApi.md#editHtmlHtmlSetRelCanonical) | **POST** /convert/edit/html/head/set/rel-canonical-url | Sets the rel canonical URL for the HTML document
[**editHtmlHtmlSetSitemapUrl**](EditHtmlApi.md#editHtmlHtmlSetSitemapUrl) | **POST** /convert/edit/html/head/set/sitemap-url | Sets the sitemap URL for the HTML document


<a name="editHtmlHtmlAppendHeaderTag"></a>
# **editHtmlHtmlAppendHeaderTag**
> &#39;Blob&#39; editHtmlHtmlAppendHeaderTag(htmlTag, opts)

Append an HTML tag to the HEAD section of an HTML Document

Appends an HTML tag to the HEAD section of an HTML document.

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

var htmlTag = "htmlTag_example"; // String | The HTML tag to append.

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Optional: Input file to perform the operation on.
  'inputFileUrl': "inputFileUrl_example" // String | Optional: URL of a file to operate on as input.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editHtmlHtmlAppendHeaderTag(htmlTag, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **htmlTag** | **String**| The HTML tag to append. | 
 **inputFile** | **File**| Optional: Input file to perform the operation on. | [optional] 
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

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
  'inputFileUrl': "inputFileUrl_example", // String | Optional: URL of a file to operate on as input.
  'headingSize': 56, // Number | Optional: The heading size number. Default is 1. Accepts values between 1 and 6.
  'cssStyle': "cssStyle_example" // String | Optional: The CSS style for the heading.
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
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input. | [optional] 
 **headingSize** | **Number**| Optional: The heading size number. Default is 1. Accepts values between 1 and 6. | [optional] 
 **cssStyle** | **String**| Optional: The CSS style for the heading. | [optional] 

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
  'inputFileUrl': "inputFileUrl_example", // String | Optional: URL of a file to operate on as input.
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
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input. | [optional] 
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
  'inputFileUrl': "inputFileUrl_example", // String | Optional: URL of a file to operate on as input.
  'imageFile': "/path/to/file.txt", // File | Optional: Image file to be appended as base64 inline image.
  'imageUrl': "imageUrl_example", // String | Optional: Image URL to be appended as base64 inline image.
  'cssStyle': "cssStyle_example", // String | Optional: CSS style for the image.
  'imageExtension': "imageExtension_example" // String | Optional: The extension (JPG, PNG, GIF, etc.) of the image file. Recommended if uploading an imageFile directly, instead of using imageUrl. If no extension can be determined, will default to JPG.
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
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input. | [optional] 
 **imageFile** | **File**| Optional: Image file to be appended as base64 inline image. | [optional] 
 **imageUrl** | **String**| Optional: Image URL to be appended as base64 inline image. | [optional] 
 **cssStyle** | **String**| Optional: CSS style for the image. | [optional] 
 **imageExtension** | **String**| Optional: The extension (JPG, PNG, GIF, etc.) of the image file. Recommended if uploading an imageFile directly, instead of using imageUrl. If no extension can be determined, will default to JPG. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
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
  'inputFileUrl': "inputFileUrl_example", // String | Optional: URL of a file to operate on as input.
  'cssStyle': "cssStyle_example" // String | Optional: The CSS style for the paragraph.
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
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input. | [optional] 
 **cssStyle** | **String**| Optional: The CSS style for the paragraph. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="editHtmlHtmlCreateBlankDocument"></a>
# **editHtmlHtmlCreateBlankDocument**
> &#39;Blob&#39; editHtmlHtmlCreateBlankDocument(opts)

Create a Blank HTML Document

Returns a blank HTML Document format file.  The file is blank, with no contents by default.  Use the optional input parameters to add various starting elements.  Use additional editing commands such as Append Header, Append Paragraph or Append Image from URL to populate the document.

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
  'title': "title_example", // String | Optional: The title of the HTML document
  'cssUrl': "cssUrl_example", // String | Optional: A CSS style URL to be added to the document.
  'cssInline': "cssInline_example", // String | Optional: An inline CSS style to be added to the document.
  'javascriptUrl': "javascriptUrl_example", // String | Optional: Javascript URL to be added to the document.
  'javascriptInline': "javascriptInline_example" // String | Optional: Inline Javascript to be added to the document.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editHtmlHtmlCreateBlankDocument(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **title** | **String**| Optional: The title of the HTML document | [optional] 
 **cssUrl** | **String**| Optional: A CSS style URL to be added to the document. | [optional] 
 **cssInline** | **String**| Optional: An inline CSS style to be added to the document. | [optional] 
 **javascriptUrl** | **String**| Optional: Javascript URL to be added to the document. | [optional] 
 **javascriptInline** | **String**| Optional: Inline Javascript to be added to the document. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="editHtmlHtmlGetLanguage"></a>
# **editHtmlHtmlGetLanguage**
> HtmlGetLanguageResult editHtmlHtmlGetLanguage(opts)

Gets the language for the HTML document

Retrieves the language code (e.g. \&quot;en\&quot; or \&quot;de\&quot;) of an HTML document.

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
  'inputFileUrl': "inputFileUrl_example" // String | Optional: URL of a file to operate on as input.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editHtmlHtmlGetLanguage(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Optional: Input file to perform the operation on. | [optional] 
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input. | [optional] 

### Return type

[**HtmlGetLanguageResult**](HtmlGetLanguageResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="editHtmlHtmlGetLinks"></a>
# **editHtmlHtmlGetLinks**
> HtmlGetLinksResponse editHtmlHtmlGetLinks(opts)

Extract resolved link URLs from HTML File

Extracts the resolved link URLs, fully-qualified if possible, from an input HTML file.

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
  'inputFileUrl': "inputFileUrl_example", // String | Optional: URL of a file to operate on as input.
  'baseUrl': "baseUrl_example" // String | Optional: Base URL of the page, such as https://mydomain.com
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editHtmlHtmlGetLinks(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Optional: Input file to perform the operation on. | [optional] 
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input. | [optional] 
 **baseUrl** | **String**| Optional: Base URL of the page, such as https://mydomain.com | [optional] 

### Return type

[**HtmlGetLinksResponse**](HtmlGetLinksResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="editHtmlHtmlGetRelCanonical"></a>
# **editHtmlHtmlGetRelCanonical**
> HtmlGetRelCanonicalUrlResult editHtmlHtmlGetRelCanonical(opts)

Gets the rel canonical URL for the HTML document

Gets the rel canonical URL of an HTML document.

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
  'inputFileUrl': "inputFileUrl_example" // String | Optional: URL of a file to operate on as input.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editHtmlHtmlGetRelCanonical(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Optional: Input file to perform the operation on. | [optional] 
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input. | [optional] 

### Return type

[**HtmlGetRelCanonicalUrlResult**](HtmlGetRelCanonicalUrlResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="editHtmlHtmlGetSitemap"></a>
# **editHtmlHtmlGetSitemap**
> HtmlGetSitemapUrlResult editHtmlHtmlGetSitemap(opts)

Gets the sitemap URL for the HTML document

Gets the sitemap link URL of an HTML document.

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
  'inputFileUrl': "inputFileUrl_example" // String | Optional: URL of a file to operate on as input.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editHtmlHtmlGetSitemap(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Optional: Input file to perform the operation on. | [optional] 
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input. | [optional] 

### Return type

[**HtmlGetSitemapUrlResult**](HtmlGetSitemapUrlResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="editHtmlHtmlSetLanguage"></a>
# **editHtmlHtmlSetLanguage**
> &#39;Blob&#39; editHtmlHtmlSetLanguage(languageCode, opts)

Sets the language for the HTML document

Sets the language code of an HTML document.

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

var languageCode = "languageCode_example"; // String | The HTML langauge code to set.

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Optional: Input file to perform the operation on.
  'inputFileUrl': "inputFileUrl_example" // String | Optional: URL of a file to operate on as input.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editHtmlHtmlSetLanguage(languageCode, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **languageCode** | **String**| The HTML langauge code to set. | 
 **inputFile** | **File**| Optional: Input file to perform the operation on. | [optional] 
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="editHtmlHtmlSetRelCanonical"></a>
# **editHtmlHtmlSetRelCanonical**
> &#39;Blob&#39; editHtmlHtmlSetRelCanonical(canonicalUrl, opts)

Sets the rel canonical URL for the HTML document

Sets the rel canonical URL of an HTML document.  This is useful for telling search engines and other indexers which pages are duplicates of eachother; any pages with the rel&#x3D;canonical tag will be treated as duplicates of the canonical URL.

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

var canonicalUrl = "canonicalUrl_example"; // String | The HTML canonical URL to set.

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Optional: Input file to perform the operation on.
  'inputFileUrl': "inputFileUrl_example" // String | Optional: URL of a file to operate on as input.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editHtmlHtmlSetRelCanonical(canonicalUrl, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **canonicalUrl** | **String**| The HTML canonical URL to set. | 
 **inputFile** | **File**| Optional: Input file to perform the operation on. | [optional] 
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="editHtmlHtmlSetSitemapUrl"></a>
# **editHtmlHtmlSetSitemapUrl**
> &#39;Blob&#39; editHtmlHtmlSetSitemapUrl(sitemapUrl, opts)

Sets the sitemap URL for the HTML document

Sets the sitemap URL of an HTML document.

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

var sitemapUrl = "sitemapUrl_example"; // String | The HTML sitemap URL to set.

var opts = { 
  'inputFile': "/path/to/file.txt", // File | Optional: Input file to perform the operation on.
  'inputFileUrl': "inputFileUrl_example" // String | Optional: URL of a file to operate on as input.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editHtmlHtmlSetSitemapUrl(sitemapUrl, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sitemapUrl** | **String**| The HTML sitemap URL to set. | 
 **inputFile** | **File**| Optional: Input file to perform the operation on. | [optional] 
 **inputFileUrl** | **String**| Optional: URL of a file to operate on as input. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

