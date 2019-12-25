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
    define(['ApiClient', 'model/SplitPdfResult', 'model/SplitXlsxWorksheetResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SplitPdfResult'), require('../model/SplitXlsxWorksheetResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.SplitDocumentApi = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.SplitPdfResult, root.CloudmersiveConvertApiClient.SplitXlsxWorksheetResult);
  }
}(this, function(ApiClient, SplitPdfResult, SplitXlsxWorksheetResult) {
  'use strict';

  /**
   * SplitDocument service.
   * @module api/SplitDocumentApi
   * @version 2.2.6
   */

  /**
   * Constructs a new SplitDocumentApi. 
   * @alias module:api/SplitDocumentApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the splitDocumentPdfByPage operation.
     * @callback module:api/SplitDocumentApi~splitDocumentPdfByPageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SplitPdfResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Split a PDF file into separate PDF files, one per page
     * Split an input PDF file into separate pages, comprised of one PDF file per page.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.returnDocumentContents Set to true to directly return all of the document contents in the DocumentContents field; set to false to return contents as temporary URLs (more efficient for large operations).  Default is false.
     * @param {module:api/SplitDocumentApi~splitDocumentPdfByPageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SplitPdfResult}
     */
    this.splitDocumentPdfByPage = function(inputFile, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling splitDocumentPdfByPage");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'returnDocumentContents': opts['returnDocumentContents']
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json', 'text/json', 'application/xml', 'text/xml'];
      var returnType = SplitPdfResult;

      return this.apiClient.callApi(
        '/convert/split/pdf', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the splitDocumentXlsx operation.
     * @callback module:api/SplitDocumentApi~splitDocumentXlsxCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SplitXlsxWorksheetResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Split a single Excel XLSX into Separate Worksheets
     * Split an Excel XLSX Spreadsheet, comprised of multiple Worksheets (or Tabs) into separate Excel XLSX spreadsheet files, with each containing exactly one Worksheet.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/SplitDocumentApi~splitDocumentXlsxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SplitXlsxWorksheetResult}
     */
    this.splitDocumentXlsx = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling splitDocumentXlsx");
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
      var returnType = SplitXlsxWorksheetResult;

      return this.apiClient.callApi(
        '/convert/split/xlsx', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
