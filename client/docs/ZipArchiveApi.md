# CloudmersiveConvertApiClient.ZipArchiveApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**zipArchiveZipCreate**](ZipArchiveApi.md#zipArchiveZipCreate) | **POST** /convert/archive/zip/create | Compress files to create a new zip archive
[**zipArchiveZipCreateAdvanced**](ZipArchiveApi.md#zipArchiveZipCreateAdvanced) | **POST** /convert/archive/zip/create/advanced | Compress files and folders to create a new zip archive with advanced options
[**zipArchiveZipCreateEncrypted**](ZipArchiveApi.md#zipArchiveZipCreateEncrypted) | **POST** /convert/archive/zip/create/encrypted | Compress files to create a new, encrypted and password-protected zip archive
[**zipArchiveZipCreateQuarantine**](ZipArchiveApi.md#zipArchiveZipCreateQuarantine) | **POST** /convert/archive/zip/create/quarantine | Create an encrypted zip file to quarantine a dangerous file
[**zipArchiveZipDecrypt**](ZipArchiveApi.md#zipArchiveZipDecrypt) | **POST** /convert/archive/zip/decrypt | Decrypt and remove password protection on a zip file
[**zipArchiveZipEncryptAdvanced**](ZipArchiveApi.md#zipArchiveZipEncryptAdvanced) | **POST** /convert/archive/zip/encrypt/advanced | Encrypt and password protect a zip file
[**zipArchiveZipExtract**](ZipArchiveApi.md#zipArchiveZipExtract) | **POST** /convert/archive/zip/extract | Extract, decompress files and folders from a zip archive


<a name="zipArchiveZipCreate"></a>
# **zipArchiveZipCreate**
> &#39;Blob&#39; zipArchiveZipCreate(inputFile1, opts)

Compress files to create a new zip archive

Create a new zip archive by compressing input files.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ZipArchiveApi();

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var opts = { 
  'inputFile2': "/path/to/file.txt", // File | Second input file to perform the operation on.
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
apiInstance.zipArchiveZipCreate(inputFile1, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile1** | **File**| First input file to perform the operation on. | 
 **inputFile2** | **File**| Second input file to perform the operation on. | [optional] 
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

<a name="zipArchiveZipCreateAdvanced"></a>
# **zipArchiveZipCreateAdvanced**
> Object zipArchiveZipCreateAdvanced(request)

Compress files and folders to create a new zip archive with advanced options

Create a new zip archive by compressing input files, folders and leverage advanced options to control the structure of the resulting zip archive.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ZipArchiveApi();

var request = new CloudmersiveConvertApiClient.CreateZipArchiveRequest(); // CreateZipArchiveRequest | Input request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.zipArchiveZipCreateAdvanced(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreateZipArchiveRequest**](CreateZipArchiveRequest.md)| Input request | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/octet-stream

<a name="zipArchiveZipCreateEncrypted"></a>
# **zipArchiveZipCreateEncrypted**
> &#39;Blob&#39; zipArchiveZipCreateEncrypted(password, inputFile1, opts)

Compress files to create a new, encrypted and password-protected zip archive

Create a new zip archive by compressing input files, and also applies encryption and password protection to the zip.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ZipArchiveApi();

var password = "password_example"; // String | Password to place on the Zip file; the longer the password, the more secure

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var opts = { 
  'encryptionAlgorithm': "encryptionAlgorithm_example", // String | Encryption algorithm to use; possible values are AES-256 (recommended), AES-128, and PK-Zip (not recommended; legacy, weak encryption algorithm). Default is AES-256.
  'inputFile2': "/path/to/file.txt", // File | Second input file to perform the operation on.
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
apiInstance.zipArchiveZipCreateEncrypted(password, inputFile1, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password** | **String**| Password to place on the Zip file; the longer the password, the more secure | 
 **inputFile1** | **File**| First input file to perform the operation on. | 
 **encryptionAlgorithm** | **String**| Encryption algorithm to use; possible values are AES-256 (recommended), AES-128, and PK-Zip (not recommended; legacy, weak encryption algorithm). Default is AES-256. | [optional] 
 **inputFile2** | **File**| Second input file to perform the operation on. | [optional] 
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

<a name="zipArchiveZipCreateQuarantine"></a>
# **zipArchiveZipCreateQuarantine**
> Object zipArchiveZipCreateQuarantine(password, inputFile1, opts)

Create an encrypted zip file to quarantine a dangerous file

Create a new zip archive by compressing input files, and also applies encryption and password protection to the zip, for the purposes of quarantining the underlyikng file.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ZipArchiveApi();

var password = "password_example"; // String | Password to place on the Zip file; the longer the password, the more secure

var inputFile1 = "/path/to/file.txt"; // File | First input file to perform the operation on.

var opts = { 
  'encryptionAlgorithm': "encryptionAlgorithm_example" // String | Encryption algorithm to use; possible values are AES-256 (recommended), AES-128, and PK-Zip (not recommended; legacy, weak encryption algorithm). Default is AES-256.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.zipArchiveZipCreateQuarantine(password, inputFile1, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **password** | **String**| Password to place on the Zip file; the longer the password, the more secure | 
 **inputFile1** | **File**| First input file to perform the operation on. | 
 **encryptionAlgorithm** | **String**| Encryption algorithm to use; possible values are AES-256 (recommended), AES-128, and PK-Zip (not recommended; legacy, weak encryption algorithm). Default is AES-256. | [optional] 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/octet-stream

<a name="zipArchiveZipDecrypt"></a>
# **zipArchiveZipDecrypt**
> Object zipArchiveZipDecrypt(inputFile, zipPassword)

Decrypt and remove password protection on a zip file

Decrypts and removes password protection from an encrypted zip file with the specified password

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ZipArchiveApi();

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.

var zipPassword = "zipPassword_example"; // String | Required; Password for the input archive


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.zipArchiveZipDecrypt(inputFile, zipPassword, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 
 **zipPassword** | **String**| Required; Password for the input archive | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="zipArchiveZipEncryptAdvanced"></a>
# **zipArchiveZipEncryptAdvanced**
> Object zipArchiveZipEncryptAdvanced(encryptionRequest)

Encrypt and password protect a zip file

Encrypts and password protects an existing zip file with the specified password and encryption algorithm

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ZipArchiveApi();

var encryptionRequest = new CloudmersiveConvertApiClient.ZipEncryptionAdvancedRequest(); // ZipEncryptionAdvancedRequest | Encryption request


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.zipArchiveZipEncryptAdvanced(encryptionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **encryptionRequest** | [**ZipEncryptionAdvancedRequest**](ZipEncryptionAdvancedRequest.md)| Encryption request | 

### Return type

**Object**

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="zipArchiveZipExtract"></a>
# **zipArchiveZipExtract**
> ZipExtractResponse zipArchiveZipExtract(inputFile)

Extract, decompress files and folders from a zip archive

Extracts a zip archive by decompressing files, and folders.

### Example
```javascript
var CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');
var defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConvertApiClient.ZipArchiveApi();

var inputFile = "/path/to/file.txt"; // File | Input file to perform the operation on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.zipArchiveZipExtract(inputFile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputFile** | **File**| Input file to perform the operation on. | 

### Return type

[**ZipExtractResponse**](ZipExtractResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json, text/json, application/xml, text/xml

