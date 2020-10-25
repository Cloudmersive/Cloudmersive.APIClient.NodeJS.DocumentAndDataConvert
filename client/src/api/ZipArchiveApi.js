/**
 * convertapi
 * Convert API lets you effortlessly convert file formats and types.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateZipArchiveRequest', 'model/ZipEncryptionAdvancedRequest', 'model/ZipExtractResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateZipArchiveRequest'), require('../model/ZipEncryptionAdvancedRequest'), require('../model/ZipExtractResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.ZipArchiveApi = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.CreateZipArchiveRequest, root.CloudmersiveConvertApiClient.ZipEncryptionAdvancedRequest, root.CloudmersiveConvertApiClient.ZipExtractResponse);
  }
}(this, function(ApiClient, CreateZipArchiveRequest, ZipEncryptionAdvancedRequest, ZipExtractResponse) {
  'use strict';

  /**
   * ZipArchive service.
   * @module api/ZipArchiveApi
   * @version 2.5.8
   */

  /**
   * Constructs a new ZipArchiveApi. 
   * @alias module:api/ZipArchiveApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the zipArchiveZipCreate operation.
     * @callback module:api/ZipArchiveApi~zipArchiveZipCreateCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Compress files to create a new zip archive
     * Create a new zip archive by compressing input files.
     * @param {File} inputFile1 First input file to perform the operation on.
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile2 Second input file to perform the operation on.
     * @param {File} opts.inputFile3 Third input file to perform the operation on.
     * @param {File} opts.inputFile4 Fourth input file to perform the operation on.
     * @param {File} opts.inputFile5 Fifth input file to perform the operation on.
     * @param {File} opts.inputFile6 Sixth input file to perform the operation on.
     * @param {File} opts.inputFile7 Seventh input file to perform the operation on.
     * @param {File} opts.inputFile8 Eighth input file to perform the operation on.
     * @param {File} opts.inputFile9 Ninth input file to perform the operation on.
     * @param {File} opts.inputFile10 Tenth input file to perform the operation on.
     * @param {module:api/ZipArchiveApi~zipArchiveZipCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.zipArchiveZipCreate = function(inputFile1, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'inputFile1' is set
      if (inputFile1 === undefined || inputFile1 === null) {
        throw new Error("Missing the required parameter 'inputFile1' when calling zipArchiveZipCreate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'inputFile1': inputFile1,
        'inputFile2': opts['inputFile2'],
        'inputFile3': opts['inputFile3'],
        'inputFile4': opts['inputFile4'],
        'inputFile5': opts['inputFile5'],
        'inputFile6': opts['inputFile6'],
        'inputFile7': opts['inputFile7'],
        'inputFile8': opts['inputFile8'],
        'inputFile9': opts['inputFile9'],
        'inputFile10': opts['inputFile10']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/archive/zip/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the zipArchiveZipCreateAdvanced operation.
     * @callback module:api/ZipArchiveApi~zipArchiveZipCreateAdvancedCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Compress files and folders to create a new zip archive with advanced options
     * Create a new zip archive by compressing input files, folders and leverage advanced options to control the structure of the resulting zip archive.
     * @param {module:model/CreateZipArchiveRequest} request Input request
     * @param {module:api/ZipArchiveApi~zipArchiveZipCreateAdvancedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.zipArchiveZipCreateAdvanced = function(request, callback) {
      var postBody = request;

      // verify the required parameter 'request' is set
      if (request === undefined || request === null) {
        throw new Error("Missing the required parameter 'request' when calling zipArchiveZipCreateAdvanced");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/octet-stream'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/convert/archive/zip/create/advanced', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the zipArchiveZipCreateEncrypted operation.
     * @callback module:api/ZipArchiveApi~zipArchiveZipCreateEncryptedCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Compress files to create a new, encrypted and password-protected zip archive
     * Create a new zip archive by compressing input files, and also applies encryption and password protection to the zip.
     * @param {String} password Password to place on the Zip file; the longer the password, the more secure
     * @param {File} inputFile1 First input file to perform the operation on.
     * @param {Object} opts Optional parameters
     * @param {String} opts.encryptionAlgorithm Encryption algorithm to use; possible values are AES-256 (recommended), AES-128, and PK-Zip (not recommended; legacy, weak encryption algorithm). Default is AES-256.
     * @param {File} opts.inputFile2 Second input file to perform the operation on.
     * @param {File} opts.inputFile3 Third input file to perform the operation on.
     * @param {File} opts.inputFile4 Fourth input file to perform the operation on.
     * @param {File} opts.inputFile5 Fifth input file to perform the operation on.
     * @param {File} opts.inputFile6 Sixth input file to perform the operation on.
     * @param {File} opts.inputFile7 Seventh input file to perform the operation on.
     * @param {File} opts.inputFile8 Eighth input file to perform the operation on.
     * @param {File} opts.inputFile9 Ninth input file to perform the operation on.
     * @param {File} opts.inputFile10 Tenth input file to perform the operation on.
     * @param {module:api/ZipArchiveApi~zipArchiveZipCreateEncryptedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.zipArchiveZipCreateEncrypted = function(password, inputFile1, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'password' is set
      if (password === undefined || password === null) {
        throw new Error("Missing the required parameter 'password' when calling zipArchiveZipCreateEncrypted");
      }

      // verify the required parameter 'inputFile1' is set
      if (inputFile1 === undefined || inputFile1 === null) {
        throw new Error("Missing the required parameter 'inputFile1' when calling zipArchiveZipCreateEncrypted");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'password': password,
        'encryptionAlgorithm': opts['encryptionAlgorithm']
      };
      var formParams = {
        'inputFile1': inputFile1,
        'inputFile2': opts['inputFile2'],
        'inputFile3': opts['inputFile3'],
        'inputFile4': opts['inputFile4'],
        'inputFile5': opts['inputFile5'],
        'inputFile6': opts['inputFile6'],
        'inputFile7': opts['inputFile7'],
        'inputFile8': opts['inputFile8'],
        'inputFile9': opts['inputFile9'],
        'inputFile10': opts['inputFile10']
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/archive/zip/create/encrypted', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the zipArchiveZipDecrypt operation.
     * @callback module:api/ZipArchiveApi~zipArchiveZipDecryptCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Decrypt and remove password protection on a zip file
     * Decrypts and removes password protection from an encrypted zip file with the specified password
     * @param {File} inputFile Input file to perform the operation on.
     * @param {String} zipPassword Required; Password for the input archive
     * @param {module:api/ZipArchiveApi~zipArchiveZipDecryptCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.zipArchiveZipDecrypt = function(inputFile, zipPassword, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling zipArchiveZipDecrypt");
      }

      // verify the required parameter 'zipPassword' is set
      if (zipPassword === undefined || zipPassword === null) {
        throw new Error("Missing the required parameter 'zipPassword' when calling zipArchiveZipDecrypt");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'zipPassword': zipPassword
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/convert/archive/zip/decrypt', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the zipArchiveZipEncryptAdvanced operation.
     * @callback module:api/ZipArchiveApi~zipArchiveZipEncryptAdvancedCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Encrypt and password protect a zip file
     * Encrypts and password protects an existing zip file with the specified password and encryption algorithm
     * @param {module:model/ZipEncryptionAdvancedRequest} encryptionRequest Encryption request
     * @param {module:api/ZipArchiveApi~zipArchiveZipEncryptAdvancedCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.zipArchiveZipEncryptAdvanced = function(encryptionRequest, callback) {
      var postBody = encryptionRequest;

      // verify the required parameter 'encryptionRequest' is set
      if (encryptionRequest === undefined || encryptionRequest === null) {
        throw new Error("Missing the required parameter 'encryptionRequest' when calling zipArchiveZipEncryptAdvanced");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Apikey'];
      var contentTypes = ['application/json', 'text/json', 'application/xml', 'text/xml', 'application/x-www-form-urlencoded'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = Object;

      return this.apiClient.callApi(
        '/convert/archive/zip/encrypt/advanced', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the zipArchiveZipExtract operation.
     * @callback module:api/ZipArchiveApi~zipArchiveZipExtractCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ZipExtractResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Extract, decompress files and folders from a zip archive
     * Extracts a zip archive by decompressing files, and folders.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ZipArchiveApi~zipArchiveZipExtractCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ZipExtractResponse}
     */
    this.zipArchiveZipExtract = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling zipArchiveZipExtract");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = ZipExtractResponse;

      return this.apiClient.callApi(
        '/convert/archive/zip/extract', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
