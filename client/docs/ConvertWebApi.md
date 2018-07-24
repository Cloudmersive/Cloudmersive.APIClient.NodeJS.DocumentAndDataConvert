# CloudmersiveConvertApiClient.ConvertWebApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convertWebHtmlToPdf**](ConvertWebApi.md#convertWebHtmlToPdf) | **POST** /convert/web/html/to/pdf | Convert HTML string to PDF
[**convertWebUrlToPdf**](ConvertWebApi.md#convertWebUrlToPdf) | **POST** /convert/web/url/to/pdf | Convert a URL to PDF
[**convertWebUrlToScreenshot**](ConvertWebApi.md#convertWebUrlToScreenshot) | **POST** /convert/web/url/to/screenshot | Take screenshot of URL


<a name="convertWebHtmlToPdf"></a>
# **convertWebHtmlToPdf**
> Object convertWebHtmlToPdf(input)

Convert HTML string to PDF

Fully renders a website and returns a PDF of the HTML.  Javascript, HTML5, CSS and other advanced features are all supported.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertWebApi();

var input = new CloudmersiveConvertApiClient.HtmlToPdfRequest(); // HtmlToPdfRequest | HTML to PDF request parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertWebHtmlToPdf(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**HtmlToPdfRequest**](HtmlToPdfRequest.md)| HTML to PDF request parameters | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="convertWebUrlToPdf"></a>
# **convertWebUrlToPdf**
> Object convertWebUrlToPdf(input)

Convert a URL to PDF

Fully renders a website and returns a PDF of the full page.  Javascript, HTML5, CSS and other advanced features are all supported.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertWebApi();

var input = new CloudmersiveConvertApiClient.ScreenshotRequest(); // ScreenshotRequest | URL to PDF request parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertWebUrlToPdf(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**ScreenshotRequest**](ScreenshotRequest.md)| URL to PDF request parameters | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="convertWebUrlToScreenshot"></a>
# **convertWebUrlToScreenshot**
> Object convertWebUrlToScreenshot(input)

Take screenshot of URL

Fully renders a website and returns a PNG screenshot of the full page image.  Javascript, HTML5, CSS and other advanced features are all supported.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertWebApi();

var input = new CloudmersiveConvertApiClient.ScreenshotRequest(); // ScreenshotRequest | Screenshot request parameters


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertWebUrlToScreenshot(input, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **input** | [**ScreenshotRequest**](ScreenshotRequest.md)| Screenshot request parameters | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

