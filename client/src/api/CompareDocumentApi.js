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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.CompareDocumentApi = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * CompareDocument service.
   * @module api/CompareDocumentApi
   * @version 2.4.8
   */

  /**
   * Constructs a new CompareDocumentApi. 
   * @alias module:api/CompareDocumentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the compareDocumentDocx operation.
     * @callback module:api/CompareDocumentApi~compareDocumentDocxCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Compare Two Word DOCX
     * Compare two Office Word Documents (docx) files and highlight the differences
     * @param {File} inputFile1 First input file to perform the operation on.
     * @param {File} inputFile2 Second input file to perform the operation on (more than 2 can be supplied).
     * @param {module:api/CompareDocumentApi~compareDocumentDocxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.compareDocumentDocx = function(inputFile1, inputFile2, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile1' is set
      if (inputFile1 === undefined || inputFile1 === null) {
        throw new Error("Missing the required parameter 'inputFile1' when calling compareDocumentDocx");
      }

      // verify the required parameter 'inputFile2' is set
      if (inputFile2 === undefined || inputFile2 === null) {
        throw new Error("Missing the required parameter 'inputFile2' when calling compareDocumentDocx");
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
        'inputFile2': inputFile2
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/compare/docx', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
