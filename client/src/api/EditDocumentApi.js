/**
 * convertapi
 * Convert API lets you effortlessly convert file formats and types.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ReplaceStringRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ReplaceStringRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.EditDocumentApi = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.ReplaceStringRequest);
  }
}(this, function(ApiClient, ReplaceStringRequest) {
  'use strict';

  /**
   * EditDocument service.
   * @module api/EditDocumentApi
   * @version 1.2.2
   */

  /**
   * Constructs a new EditDocumentApi. 
   * @alias module:api/EditDocumentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the editDocumentBeginEditing operation.
     * @callback module:api/EditDocumentApi~editDocumentBeginEditingCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Begin editing a document
     * Uploads a document to Cloudmersive to begin a series of one or more editing operations
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/EditDocumentApi~editDocumentBeginEditingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.editDocumentBeginEditing = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling editDocumentBeginEditing");
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
      var accepts = ['application/octet-stream'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/convert/edit/begin-editing', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editDocumentDocxReplace operation.
     * @callback module:api/EditDocumentApi~editDocumentDocxReplaceCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace string in DOCX
     * Replace all instances of a string in an Office Word Document (docx)
     * @param {module:model/ReplaceStringRequest} reqConfig 
     * @param {module:api/EditDocumentApi~editDocumentDocxReplaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.editDocumentDocxReplace = function(reqConfig, callback) {
      var postBody = reqConfig;

      // verify the required parameter 'reqConfig' is set
      if (reqConfig === undefined || reqConfig === null) {
        throw new Error("Missing the required parameter 'reqConfig' when calling editDocumentDocxReplace");
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
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/edit/docx/replace-all', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editDocumentPptxReplace operation.
     * @callback module:api/EditDocumentApi~editDocumentPptxReplaceCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace string in PPTX
     * Replace all instances of a string in an Office PowerPoint Document (pptx)
     * @param {module:model/ReplaceStringRequest} reqConfig 
     * @param {module:api/EditDocumentApi~editDocumentPptxReplaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.editDocumentPptxReplace = function(reqConfig, callback) {
      var postBody = reqConfig;

      // verify the required parameter 'reqConfig' is set
      if (reqConfig === undefined || reqConfig === null) {
        throw new Error("Missing the required parameter 'reqConfig' when calling editDocumentPptxReplace");
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
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/edit/pptx/replace-all', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
