# CloudmersiveConvertApiClient.ConvertDataApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**convertDataCsvToJson**](ConvertDataApi.md#convertDataCsvToJson) | **POST** /convert/csv/to/json | Convert CSV to JSON conversion
[**convertDataCsvToXml**](ConvertDataApi.md#convertDataCsvToXml) | **POST** /convert/csv/to/xml | Convert CSV to XML conversion
[**convertDataJsonStringToXml**](ConvertDataApi.md#convertDataJsonStringToXml) | **POST** /convert/json-string/to/xml | Convert JSON String to XML conversion
[**convertDataJsonToXml**](ConvertDataApi.md#convertDataJsonToXml) | **POST** /convert/json/to/xml | Convert JSON Object to XML conversion
[**convertDataXlsToJson**](ConvertDataApi.md#convertDataXlsToJson) | **POST** /convert/xls/to/json | Convert Excel (97-2003) XLS to JSON conversion
[**convertDataXlsxToJson**](ConvertDataApi.md#convertDataXlsxToJson) | **POST** /convert/xlsx/to/json | Convert Excel XLSX to JSON conversion
[**convertDataXlsxToXml**](ConvertDataApi.md#convertDataXlsxToXml) | **POST** /convert/xlsx/to/xml | Convert Excel XLSX to XML conversion
[**convertDataXmlEditAddAttributeWithXPath**](ConvertDataApi.md#convertDataXmlEditAddAttributeWithXPath) | **POST** /convert/xml/edit/xpath/add-attribute | Adds an attribute to all XML nodes matching XPath expression
[**convertDataXmlEditAddChildWithXPath**](ConvertDataApi.md#convertDataXmlEditAddChildWithXPath) | **POST** /convert/xml/edit/xpath/add-child | Adds an XML node as a child to XML nodes matching XPath expression
[**convertDataXmlEditRemoveAllChildNodesWithXPath**](ConvertDataApi.md#convertDataXmlEditRemoveAllChildNodesWithXPath) | **POST** /convert/xml/edit/xpath/remove-all-children | Removes, deletes all children of nodes matching XPath expression, but does not remove the nodes
[**convertDataXmlEditReplaceWithXPath**](ConvertDataApi.md#convertDataXmlEditReplaceWithXPath) | **POST** /convert/xml/edit/xpath/replace | Replaces XML nodes matching XPath expression with new node
[**convertDataXmlEditSetValueWithXPath**](ConvertDataApi.md#convertDataXmlEditSetValueWithXPath) | **POST** /convert/xml/edit/xpath/set-value | Sets the value contents of XML nodes matching XPath expression
[**convertDataXmlFilterWithXPath**](ConvertDataApi.md#convertDataXmlFilterWithXPath) | **POST** /convert/xml/select/xpath | Filter, select XML nodes using XPath expression, get results
[**convertDataXmlQueryWithXQuery**](ConvertDataApi.md#convertDataXmlQueryWithXQuery) | **POST** /convert/xml/query/xquery | Query an XML file using XQuery query, get results
[**convertDataXmlQueryWithXQueryMulti**](ConvertDataApi.md#convertDataXmlQueryWithXQueryMulti) | **POST** /convert/xml/query/xquery/multi | Query multiple XML files using XQuery query, get results
[**convertDataXmlRemoveWithXPath**](ConvertDataApi.md#convertDataXmlRemoveWithXPath) | **POST** /convert/xml/edit/xpath/remove | Remove, delete XML nodes and items matching XPath expression
[**convertDataXmlToJson**](ConvertDataApi.md#convertDataXmlToJson) | **POST** /convert/xml/to/json | Convert XML to JSON conversion
[**convertDataXmlTransformWithXsltToXml**](ConvertDataApi.md#convertDataXmlTransformWithXsltToXml) | **POST** /convert/xml/transform/xslt/to/xml | Transform XML document file with XSLT into a new XML document


<a name="convertDataCsvToJson"></a>
# **convertDataCsvToJson**
> Object convertDataCsvToJson(inputFile, opts)

Convert CSV to JSON conversion

Convert a CSV file to a JSON object array

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.

var opts = { 
  'columnNamesFromFirstRow': true // Boolean | Optional; If true, the first row will be used as the labels for the columns; if false, columns will be named Column0, Column1, etc.  Default is true.  Set to false if you are not using column headings, or have an irregular column structure.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataCsvToJson(inputFile, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 
 **columnNamesFromFirstRow** | **Boolean**| Optional; If true, the first row will be used as the labels for the columns; if false, columns will be named Column0, Column1, etc.  Default is true.  Set to false if you are not using column headings, or have an irregular column structure. | [optional] 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="convertDataCsvToXml"></a>
# **convertDataCsvToXml**
> &#39;Blob&#39; convertDataCsvToXml(inputFile, opts)

Convert CSV to XML conversion

Convert a CSV file to a XML file

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.

var opts = { 
  'columnNamesFromFirstRow': true // Boolean | Optional; If true, the first row will be used as the labels for the columns; if false, columns will be named Column0, Column1, etc.  Default is true.  Set to false if you are not using column headings, or have an irregular column structure.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataCsvToXml(inputFile, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 
 **columnNamesFromFirstRow** | **Boolean**| Optional; If true, the first row will be used as the labels for the columns; if false, columns will be named Column0, Column1, etc.  Default is true.  Set to false if you are not using column headings, or have an irregular column structure. | [optional] 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="convertDataJsonStringToXml"></a>
# **convertDataJsonStringToXml**
> Object convertDataJsonStringToXml(jsonString)

Convert JSON String to XML conversion

Convert a JSON object into XML

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var jsonString = "jsonString_example"; // String | Input JSON String to convert to XML


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataJsonStringToXml(jsonString, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonString** | **String**| Input JSON String to convert to XML | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

<a name="convertDataJsonToXml"></a>
# **convertDataJsonToXml**
> &#39;Blob&#39; convertDataJsonToXml(jsonObject)

Convert JSON Object to XML conversion

Convert a JSON object into XML

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var jsonObject = null; // Object | Input JSON Object to convert to XML


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataJsonToXml(jsonObject, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonObject** | **Object**| Input JSON Object to convert to XML | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/xml

<a name="convertDataXlsToJson"></a>
# **convertDataXlsToJson**
> Object convertDataXlsToJson(inputFile)

Convert Excel (97-2003) XLS to JSON conversion

Convert an Excel (97-2003) XLS file to a JSON object array

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataXlsToJson(inputFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="convertDataXlsxToJson"></a>
# **convertDataXlsxToJson**
> &#39;Blob&#39; convertDataXlsxToJson(inputFile)

Convert Excel XLSX to JSON conversion

Convert an Excel XLSX file to a JSON object array

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataXlsxToJson(inputFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="convertDataXlsxToXml"></a>
# **convertDataXlsxToXml**
> &#39;Blob&#39; convertDataXlsxToXml(inputFile)

Convert Excel XLSX to XML conversion

Convert an Excel XLSX file to a XML file

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataXlsxToXml(inputFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/octet-stream

<a name="convertDataXmlEditAddAttributeWithXPath"></a>
# **convertDataXmlEditAddAttributeWithXPath**
> XmlAddAttributeWithXPathResult convertDataXmlEditAddAttributeWithXPath(inputFile, xPathExpression, xmlAttributeName, xmlAttributeValue)

Adds an attribute to all XML nodes matching XPath expression

Return the reuslts of editing an XML document by adding an attribute to all of the nodes that match an input XPath expression.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var inputFile = "/path/to/file.txt"; // File | Input XML file to perform the operation on.

var xPathExpression = "xPathExpression_example"; // String | Valid XML XPath query expression

var xmlAttributeName = "xmlAttributeName_example"; // String | Name of the XML attribute to add

var xmlAttributeValue = "xmlAttributeValue_example"; // String | Value of the XML attribute to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataXmlEditAddAttributeWithXPath(inputFile, xPathExpression, xmlAttributeName, xmlAttributeValue, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input XML file to perform the operation on. | 
 **xPathExpression** | **String**| Valid XML XPath query expression | 
 **xmlAttributeName** | **String**| Name of the XML attribute to add | 
 **xmlAttributeValue** | **String**| Value of the XML attribute to add | 

### Return type

[**XmlAddAttributeWithXPathResult**](XmlAddAttributeWithXPathResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="convertDataXmlEditAddChildWithXPath"></a>
# **convertDataXmlEditAddChildWithXPath**
> XmlAddChildWithXPathResult convertDataXmlEditAddChildWithXPath(inputFile, xPathExpression, xmlNodeToAdd)

Adds an XML node as a child to XML nodes matching XPath expression

Return the reuslts of editing an XML document by adding an XML node as a child to all of the nodes that match an input XPath expression.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var inputFile = "/path/to/file.txt"; // File | Input XML file to perform the operation on.

var xPathExpression = "xPathExpression_example"; // String | Valid XML XPath query expression

var xmlNodeToAdd = "xmlNodeToAdd_example"; // String | XML Node to add as a child


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataXmlEditAddChildWithXPath(inputFile, xPathExpression, xmlNodeToAdd, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input XML file to perform the operation on. | 
 **xPathExpression** | **String**| Valid XML XPath query expression | 
 **xmlNodeToAdd** | **String**| XML Node to add as a child | 

### Return type

[**XmlAddChildWithXPathResult**](XmlAddChildWithXPathResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="convertDataXmlEditRemoveAllChildNodesWithXPath"></a>
# **convertDataXmlEditRemoveAllChildNodesWithXPath**
> XmlRemoveAllChildrenWithXPathResult convertDataXmlEditRemoveAllChildNodesWithXPath(inputFile, xPathExpression)

Removes, deletes all children of nodes matching XPath expression, but does not remove the nodes

Return the reuslts of editing an XML document by removing all child nodes of the nodes that match an input XPath expression.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var inputFile = "/path/to/file.txt"; // File | Input XML file to perform the operation on.

var xPathExpression = "xPathExpression_example"; // String | Valid XML XPath query expression


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataXmlEditRemoveAllChildNodesWithXPath(inputFile, xPathExpression, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input XML file to perform the operation on. | 
 **xPathExpression** | **String**| Valid XML XPath query expression | 

### Return type

[**XmlRemoveAllChildrenWithXPathResult**](XmlRemoveAllChildrenWithXPathResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="convertDataXmlEditReplaceWithXPath"></a>
# **convertDataXmlEditReplaceWithXPath**
> XmlReplaceWithXPathResult convertDataXmlEditReplaceWithXPath(inputFile, xPathExpression, xmlNodeReplacement)

Replaces XML nodes matching XPath expression with new node

Return the reuslts of editing an XML document by replacing all of the nodes that match an input XPath expression with a new XML node expression.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var inputFile = "/path/to/file.txt"; // File | Input XML file to perform the operation on.

var xPathExpression = "xPathExpression_example"; // String | Valid XML XPath query expression

var xmlNodeReplacement = "xmlNodeReplacement_example"; // String | XML Node replacement content


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataXmlEditReplaceWithXPath(inputFile, xPathExpression, xmlNodeReplacement, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input XML file to perform the operation on. | 
 **xPathExpression** | **String**| Valid XML XPath query expression | 
 **xmlNodeReplacement** | **String**| XML Node replacement content | 

### Return type

[**XmlReplaceWithXPathResult**](XmlReplaceWithXPathResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="convertDataXmlEditSetValueWithXPath"></a>
# **convertDataXmlEditSetValueWithXPath**
> XmlSetValueWithXPathResult convertDataXmlEditSetValueWithXPath(inputFile, xPathExpression, xmlValue)

Sets the value contents of XML nodes matching XPath expression

Return the reuslts of editing an XML document by setting the contents of all of the nodes that match an input XPath expression.  Supports elements and attributes.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var inputFile = "/path/to/file.txt"; // File | Input XML file to perform the operation on.

var xPathExpression = "xPathExpression_example"; // String | Valid XML XPath query expression

var xmlValue = "xmlValue_example"; // String | XML Value to set into the matching XML nodes


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataXmlEditSetValueWithXPath(inputFile, xPathExpression, xmlValue, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input XML file to perform the operation on. | 
 **xPathExpression** | **String**| Valid XML XPath query expression | 
 **xmlValue** | **String**| XML Value to set into the matching XML nodes | 

### Return type

[**XmlSetValueWithXPathResult**](XmlSetValueWithXPathResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="convertDataXmlFilterWithXPath"></a>
# **convertDataXmlFilterWithXPath**
> XmlFilterWithXPathResult convertDataXmlFilterWithXPath(xPathExpression, inputFile)

Filter, select XML nodes using XPath expression, get results

Return the reuslts of filtering, selecting an XML document with an XPath expression

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var xPathExpression = "xPathExpression_example"; // String | Valid XML XPath query expression

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataXmlFilterWithXPath(xPathExpression, inputFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xPathExpression** | **String**| Valid XML XPath query expression | 
 **inputFile** | **File**| Input file to perform the operation on. | 

### Return type

[**XmlFilterWithXPathResult**](XmlFilterWithXPathResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="convertDataXmlQueryWithXQuery"></a>
# **convertDataXmlQueryWithXQuery**
> XmlQueryWithXQueryResult convertDataXmlQueryWithXQuery(inputFile, xQuery)

Query an XML file using XQuery query, get results

Return the reuslts of querying a single XML document with an XQuery expression.  Supports XQuery 3.1 and earlier.  This API is optimized for a single XML document as input.  Provided XML document is automatically loaded as the default context; to access elements in the document, simply refer to them without a document reference, such as bookstore/book

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var inputFile = "/path/to/file.txt"; // File | Input XML file to perform the operation on.

var xQuery = "xQuery_example"; // String | Valid XML XQuery 3.1 or earlier query expression; multi-line expressions are supported


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataXmlQueryWithXQuery(inputFile, xQuery, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input XML file to perform the operation on. | 
 **xQuery** | **String**| Valid XML XQuery 3.1 or earlier query expression; multi-line expressions are supported | 

### Return type

[**XmlQueryWithXQueryResult**](XmlQueryWithXQueryResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="convertDataXmlQueryWithXQueryMulti"></a>
# **convertDataXmlQueryWithXQueryMulti**
> XmlQueryWithXQueryMultiResult convertDataXmlQueryWithXQueryMulti(inputFile1, xQuery, opts)

Query multiple XML files using XQuery query, get results

Return the reuslts of querying an XML document with an XQuery expression.  Supports XQuery 3.1 and earlier.  This API is optimized for multiple XML documents as input.  You can refer to the contents of a given document by name, for example doc(\&quot;books.xml\&quot;) or doc(\&quot;restaurants.xml\&quot;) if you included two input files named books.xml and restaurants.xml.  If input files contain no file name, they will default to file names input1.xml, input2.xml and so on.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var inputFile1 = "/path/to/file.txt"; // File | First input XML file to perform the operation on.

var xQuery = "xQuery_example"; // String | Valid XML XQuery 3.1 or earlier query expression; multi-line expressions are supported

var opts = { 
  'inputFile2': "/path/to/file.txt", // File | Second input XML file to perform the operation on.
  'inputFile3': "/path/to/file.txt", // File | Third input XML file to perform the operation on.
  'inputFile4': "/path/to/file.txt", // File | Fourth input XML file to perform the operation on.
  'inputFile5': "/path/to/file.txt", // File | Fifth input XML file to perform the operation on.
  'inputFile6': "/path/to/file.txt", // File | Sixth input XML file to perform the operation on.
  'inputFile7': "/path/to/file.txt", // File | Seventh input XML file to perform the operation on.
  'inputFile8': "/path/to/file.txt", // File | Eighth input XML file to perform the operation on.
  'inputFile9': "/path/to/file.txt", // File | Ninth input XML file to perform the operation on.
  'inputFile10': "/path/to/file.txt" // File | Tenth input XML file to perform the operation on.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataXmlQueryWithXQueryMulti(inputFile1, xQuery, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile1** | **File**| First input XML file to perform the operation on. | 
 **xQuery** | **String**| Valid XML XQuery 3.1 or earlier query expression; multi-line expressions are supported | 
 **inputFile2** | **File**| Second input XML file to perform the operation on. | [optional] 
 **inputFile3** | **File**| Third input XML file to perform the operation on. | [optional] 
 **inputFile4** | **File**| Fourth input XML file to perform the operation on. | [optional] 
 **inputFile5** | **File**| Fifth input XML file to perform the operation on. | [optional] 
 **inputFile6** | **File**| Sixth input XML file to perform the operation on. | [optional] 
 **inputFile7** | **File**| Seventh input XML file to perform the operation on. | [optional] 
 **inputFile8** | **File**| Eighth input XML file to perform the operation on. | [optional] 
 **inputFile9** | **File**| Ninth input XML file to perform the operation on. | [optional] 
 **inputFile10** | **File**| Tenth input XML file to perform the operation on. | [optional] 

### Return type

[**XmlQueryWithXQueryMultiResult**](XmlQueryWithXQueryMultiResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="convertDataXmlRemoveWithXPath"></a>
# **convertDataXmlRemoveWithXPath**
> XmlRemoveWithXPathResult convertDataXmlRemoveWithXPath(xPathExpression, inputFile)

Remove, delete XML nodes and items matching XPath expression

Return the reuslts of editing an XML document by removing all of the nodes that match an input XPath expression

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var xPathExpression = "xPathExpression_example"; // String | Valid XML XPath query expression

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataXmlRemoveWithXPath(xPathExpression, inputFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xPathExpression** | **String**| Valid XML XPath query expression | 
 **inputFile** | **File**| Input file to perform the operation on. | 

### Return type

[**XmlRemoveWithXPathResult**](XmlRemoveWithXPathResult.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="convertDataXmlToJson"></a>
# **convertDataXmlToJson**
> Object convertDataXmlToJson(inputFile)

Convert XML to JSON conversion

Convert an XML string or file into JSON

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataXmlToJson(inputFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="convertDataXmlTransformWithXsltToXml"></a>
# **convertDataXmlTransformWithXsltToXml**
> &#39;Blob&#39; convertDataXmlTransformWithXsltToXml(inputFile, transformFile)

Transform XML document file with XSLT into a new XML document

Convert an XML string or file into JSON

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ConvertDataApi();

var inputFile = "/path/to/file.txt"; // File | Input XML file to perform the operation on.

var transformFile = "/path/to/file.txt"; // File | Input XSLT file to use to transform the input XML file.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.convertDataXmlTransformWithXsltToXml(inputFile, transformFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input XML file to perform the operation on. | 
 **transformFile** | **File**| Input XSLT file to use to transform the input XML file. | 

### Return type

**&#39;Blob&#39;**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

