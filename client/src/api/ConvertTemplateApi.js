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
    define(['ApiClient', 'model/HtmlTemplateApplicationRequest', 'model/HtmlTemplateApplicationResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/HtmlTemplateApplicationRequest'), require('../model/HtmlTemplateApplicationResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.ConvertTemplateApi = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.HtmlTemplateApplicationRequest, root.CloudmersiveConvertApiClient.HtmlTemplateApplicationResponse);
  }
}(this, function(ApiClient, HtmlTemplateApplicationRequest, HtmlTemplateApplicationResponse) {
  'use strict';

  /**
   * ConvertTemplate service.
   * @module api/ConvertTemplateApi
   * @version 2.4.4
   */

  /**
   * Constructs a new ConvertTemplateApi. 
   * @alias module:api/ConvertTemplateApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the convertTemplateApplyDocxTemplate operation.
     * @callback module:api/ConvertTemplateApi~convertTemplateApplyDocxTemplateCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apply Word DOCX template
     * Apply operations to fill in a Word DOCX template by replacing target template/placeholder strings in the DOCX with values, generating a final Word DOCX result.  For example, you could create a Word Document invoice containing strings such as \&quot;{FirstName}\&quot; and \&quot;{LastName}\&quot; and then replace these values with \&quot;John\&quot; and \&quot;Smith\&quot;.
     * @param {File} inputFile Input file to perform the operation on.
     * @param {Object} opts Optional parameters
     * @param {Object} opts.templateDefinition Template definition for the document, including what values to replace
     * @param {module:api/ConvertTemplateApi~convertTemplateApplyDocxTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.convertTemplateApplyDocxTemplate = function(inputFile, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertTemplateApplyDocxTemplate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'templateDefinition': opts['templateDefinition']
      };
      var formParams = {
        'inputFile': inputFile
      };

      var authNames = ['Apikey'];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/octet-stream'];
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/template/docx/apply', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertTemplateApplyHtmlTemplate operation.
     * @callback module:api/ConvertTemplateApi~convertTemplateApplyHtmlTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HtmlTemplateApplicationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apply HTML template
     * Apply operations to fill in an HTML template, generating a final HTML result
     * @param {module:model/HtmlTemplateApplicationRequest} value Operations to apply to template
     * @param {module:api/ConvertTemplateApi~convertTemplateApplyHtmlTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HtmlTemplateApplicationResponse}
     */
    this.convertTemplateApplyHtmlTemplate = function(value, callback) {
      var postBody = value;

      // verify the required parameter 'value' is set
      if (value === undefined || value === null) {
        throw new Error("Missing the required parameter 'value' when calling convertTemplateApplyHtmlTemplate");
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
      var returnType = HtmlTemplateApplicationResponse;

      return this.apiClient.callApi(
        '/convert/template/html/apply', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
