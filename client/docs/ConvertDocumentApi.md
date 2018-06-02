# Convertapi.ConvertDocumentApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convertDocumentAutodetectToPdf**](ConvertDocumentApi.md#convertDocumentAutodetectToPdf) | **POST** /convert/autodetect/to/pdf | Convert Document to PDF
[**convertDocumentDocxToPdf**](ConvertDocumentApi.md#convertDocumentDocxToPdf) | **POST** /convert/docx/to/pdf | Word DOCX to PDF
[**convertDocumentPptxToPdf**](ConvertDocumentApi.md#convertDocumentPptxToPdf) | **POST** /convert/pptx/to/pdf | PowerPoint PPTX to PDF
[**convertDocumentXlsxToCsv**](ConvertDocumentApi.md#convertDocumentXlsxToCsv) | **POST** /convert/xlsx/to/csv | Excel XLSX to CSV
[**convertDocumentXlsxToPdf**](ConvertDocumentApi.md#convertDocumentXlsxToPdf) | **POST** /convert/xlsx/to/pdf | Excel XLSX to PDF


<a name="convertDocumentAutodetectToPdf"></a>
# **convertDocumentAutodetectToPdf**
> File convertDocumentAutodetectToPdf(inputFile)

Convert Document to PDF

Automatically detect file type and convert it to PDF.

### Example
```javascript
var Convertapi = require('convertapi');

var apiInstance = new Convertapi.ConvertDocumentApi();

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDocumentAutodetectToPdf(inputFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/pdf

<a name="convertDocumentDocxToPdf"></a>
# **convertDocumentDocxToPdf**
> File convertDocumentDocxToPdf(inputFile)

Word DOCX to PDF

Convert Office Word Documents (docx) to standard PDF

### Example
```javascript
var Convertapi = require('convertapi');

var apiInstance = new Convertapi.ConvertDocumentApi();

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDocumentDocxToPdf(inputFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/pdf

<a name="convertDocumentPptxToPdf"></a>
# **convertDocumentPptxToPdf**
> File convertDocumentPptxToPdf(inputFile)

PowerPoint PPTX to PDF

Convert Office PowerPoint Documents (pptx) to standard PDF

### Example
```javascript
var Convertapi = require('convertapi');

var apiInstance = new Convertapi.ConvertDocumentApi();

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDocumentPptxToPdf(inputFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/pdf

<a name="convertDocumentXlsxToCsv"></a>
# **convertDocumentXlsxToCsv**
> File convertDocumentXlsxToCsv(inputFile)

Excel XLSX to CSV

Convert Office Excel Workbooks (xlsx) to standard Comma-Separated Values (CSV) format.

### Example
```javascript
var Convertapi = require('convertapi');

var apiInstance = new Convertapi.ConvertDocumentApi();

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDocumentXlsxToCsv(inputFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/csv

<a name="convertDocumentXlsxToPdf"></a>
# **convertDocumentXlsxToPdf**
> File convertDocumentXlsxToPdf(inputFile)

Excel XLSX to PDF

Convert Office Excel Workbooks (xlsx) to standard PDF.  Converts all worksheets in the workbook to PDF.

### Example
```javascript
var Convertapi = require('convertapi');

var apiInstance = new Convertapi.ConvertDocumentApi();

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDocumentXlsxToPdf(inputFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/pdf

