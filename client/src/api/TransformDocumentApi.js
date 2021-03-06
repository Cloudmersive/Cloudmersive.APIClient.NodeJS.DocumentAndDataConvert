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
    root.CloudmersiveConvertApiClient.TransformDocumentApi = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * TransformDocument service.
   * @module api/TransformDocumentApi
   * @version 2.6.7
   */

  /**
   * Constructs a new TransformDocumentApi. 
   * @alias module:api/TransformDocumentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the transformDocumentDocxReplace operation.
     * @callback module:api/TransformDocumentApi~transformDocumentDocxReplaceCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace string in Word DOCX document
     * Replace all instances of a string in an Office Word Document (docx)
     * @param {String} matchString String to search for and match against, to be replaced
     * @param {String} replaceString String to replace the matched values with
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile Optional: Input file to perform the operation on.
     * @param {String} opts.inputFileUrl Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API (part of EditDocumentApi) to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public).
     * @param {Boolean} opts.matchCase Optional: True if the case should be matched, false for case insensitive match. Default is false.
     * @param {module:api/TransformDocumentApi~transformDocumentDocxReplaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.transformDocumentDocxReplace = function(matchString, replaceString, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'matchString' is set
      if (matchString === undefined || matchString === null) {
        throw new Error("Missing the required parameter 'matchString' when calling transformDocumentDocxReplace");
      }

      // verify the required parameter 'replaceString' is set
      if (replaceString === undefined || replaceString === null) {
        throw new Error("Missing the required parameter 'replaceString' when calling transformDocumentDocxReplace");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'inputFileUrl': opts['inputFileUrl'],
        'matchString': matchString,
        'replaceString': replaceString,
        'matchCase': opts['matchCase']
      };
      var formParams = {
        'inputFile': opts['inputFile']
      };

      var authNames = ['Apikey'];
      var contentTypes = [];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/transform/docx/replace-all', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the transformDocumentPptxReplace operation.
     * @callback module:api/TransformDocumentApi~transformDocumentPptxReplaceCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Replace string in PowerPoint PPTX presentation
     * Replace all instances of a string in an Office PowerPoint Document (pptx)
     * @param {String} matchString String to search for and match against, to be replaced
     * @param {String} replaceString String to replace the matched values with
     * @param {Object} opts Optional parameters
     * @param {File} opts.inputFile Optional: Input file to perform the operation on.
     * @param {String} opts.inputFileUrl Optional: URL of a file to operate on as input.  This can be a public URL, or you can also use the begin-editing API (part of EditDocumentApi) to upload a document and pass in the secure URL result from that operation as the URL here (this URL is not public).
     * @param {Boolean} opts.matchCase Optional: True if the case should be matched, false for case insensitive match. Default is false.
     * @param {module:api/TransformDocumentApi~transformDocumentPptxReplaceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.transformDocumentPptxReplace = function(matchString, replaceString, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'matchString' is set
      if (matchString === undefined || matchString === null) {
        throw new Error("Missing the required parameter 'matchString' when calling transformDocumentPptxReplace");
      }

      // verify the required parameter 'replaceString' is set
      if (replaceString === undefined || replaceString === null) {
        throw new Error("Missing the required parameter 'replaceString' when calling transformDocumentPptxReplace");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'inputFileUrl': opts['inputFileUrl'],
        'matchString': matchString,
        'replaceString': replaceString,
        'matchCase': opts['matchCase']
      };
      var formParams = {
        'inputFile': opts['inputFile']
      };

      var authNames = ['Apikey'];
      var contentTypes = [];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/transform/pptx/replace-all', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
