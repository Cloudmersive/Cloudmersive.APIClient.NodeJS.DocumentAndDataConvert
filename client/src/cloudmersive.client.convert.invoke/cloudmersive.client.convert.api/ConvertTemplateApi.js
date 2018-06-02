/**
 * convertapi
 * Convert API lets you effortlessly convert file formats and types.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['cloudmersive.client.convert.invoke/ApiClient', 'cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlTemplateApplicationRequest', 'cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlTemplateApplicationResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../cloudmersive.client.convert.model/HtmlTemplateApplicationRequest'), require('../cloudmersive.client.convert.model/HtmlTemplateApplicationResponse'));
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
   * @module cloudmersive.client.convert.invoke/cloudmersive.client.convert.api/ConvertTemplateApi
   * @version 1.0.2
   */

  /**
   * Constructs a new ConvertTemplateApi. 
   * @alias module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.api/ConvertTemplateApi
   * @class
   * @param {module:cloudmersive.client.convert.invoke/ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:cloudmersive.client.convert.invoke/ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the convertTemplateApplyHtmlTemplate operation.
     * @callback module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.api/ConvertTemplateApi~convertTemplateApplyHtmlTemplateCallback
     * @param {String} error Error message, if any.
     * @param {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlTemplateApplicationResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Apply HTML template
     * Apply operations to fill in an HTML template, generating a final HTML result
     * @param {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlTemplateApplicationRequest} value Operations to apply to template
     * @param {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.api/ConvertTemplateApi~convertTemplateApplyHtmlTemplateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlTemplateApplicationResponse}
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

      var authNames = [];
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