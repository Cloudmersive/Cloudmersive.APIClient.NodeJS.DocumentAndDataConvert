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
    define(['ApiClient', 'model/CreateZipArchiveRequest', 'model/ZipExtractResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateZipArchiveRequest'), require('../model/ZipExtractResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.ZipArchiveApi = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.CreateZipArchiveRequest, root.CloudmersiveConvertApiClient.ZipExtractResponse);
  }
}(this, function(ApiClient, CreateZipArchiveRequest, ZipExtractResponse) {
  'use strict';

  /**
   * ZipArchive service.
   * @module api/ZipArchiveApi
   * @version 2.4.4
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
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Compress files to create a new zip archive
     * Create a new zip archive by compressing input files.
     * @param {module:api/ZipArchiveApi~zipArchiveZipCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    this.zipArchiveZipCreate = function(callback) {
      var postBody = null;


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
      var contentTypes = [];
      var accepts = ['application/octet-stream'];
      var returnType = Object;

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
