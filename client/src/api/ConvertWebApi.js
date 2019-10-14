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
    define(['ApiClient', 'model/HtmlMdResult', 'model/HtmlToOfficeRequest', 'model/HtmlToPdfRequest', 'model/ScreenshotRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/HtmlMdResult'), require('../model/HtmlToOfficeRequest'), require('../model/HtmlToPdfRequest'), require('../model/ScreenshotRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.ConvertWebApi = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.HtmlMdResult, root.CloudmersiveConvertApiClient.HtmlToOfficeRequest, root.CloudmersiveConvertApiClient.HtmlToPdfRequest, root.CloudmersiveConvertApiClient.ScreenshotRequest);
  }
}(this, function(ApiClient, HtmlMdResult, HtmlToOfficeRequest, HtmlToPdfRequest, ScreenshotRequest) {
  'use strict';

  /**
   * ConvertWeb service.
   * @module api/ConvertWebApi
   * @version 2.1.0
   */

  /**
   * Constructs a new ConvertWebApi. 
   * @alias module:api/ConvertWebApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the convertWebHtmlToDocx operation.
     * @callback module:api/ConvertWebApi~convertWebHtmlToDocxCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * HTML to DOCX
     * Convert HTML to Office Word Document (DOCX) format
     * @param {module:model/HtmlToOfficeRequest} inputRequest 
     * @param {module:api/ConvertWebApi~convertWebHtmlToDocxCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.convertWebHtmlToDocx = function(inputRequest, callback) {
      var postBody = inputRequest;

      // verify the required parameter 'inputRequest' is set
      if (inputRequest === undefined || inputRequest === null) {
        throw new Error("Missing the required parameter 'inputRequest' when calling convertWebHtmlToDocx");
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
        '/convert/html/to/docx', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertWebHtmlToPdf operation.
     * @callback module:api/ConvertWebApi~convertWebHtmlToPdfCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert HTML string to PDF
     * Fully renders a website and returns a PDF of the HTML.  Javascript, HTML5, CSS and other advanced features are all supported.
     * @param {module:model/HtmlToPdfRequest} input HTML to PDF request parameters
     * @param {module:api/ConvertWebApi~convertWebHtmlToPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.convertWebHtmlToPdf = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling convertWebHtmlToPdf");
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
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/web/html/to/pdf', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertWebMdToHtml operation.
     * @callback module:api/ConvertWebApi~convertWebMdToHtmlCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HtmlMdResult} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert Markdown to HTML
     * Convert a markdown file (.md) to HTML
     * @param {File} inputFile Input file to perform the operation on.
     * @param {module:api/ConvertWebApi~convertWebMdToHtmlCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HtmlMdResult}
     */
    this.convertWebMdToHtml = function(inputFile, callback) {
      var postBody = null;

      // verify the required parameter 'inputFile' is set
      if (inputFile === undefined || inputFile === null) {
        throw new Error("Missing the required parameter 'inputFile' when calling convertWebMdToHtml");
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
      var returnType = HtmlMdResult;

      return this.apiClient.callApi(
        '/convert/web/md/to/html', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertWebUrlToPdf operation.
     * @callback module:api/ConvertWebApi~convertWebUrlToPdfCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Convert a URL to PDF
     * Fully renders a website and returns a PDF of the full page.  Javascript, HTML5, CSS and other advanced features are all supported.
     * @param {module:model/ScreenshotRequest} input URL to PDF request parameters
     * @param {module:api/ConvertWebApi~convertWebUrlToPdfCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.convertWebUrlToPdf = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling convertWebUrlToPdf");
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
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/web/url/to/pdf', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the convertWebUrlToScreenshot operation.
     * @callback module:api/ConvertWebApi~convertWebUrlToScreenshotCallback
     * @param {String} error Error message, if any.
     * @param {'Blob'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Take screenshot of URL
     * Fully renders a website and returns a PNG screenshot of the full page image.  Javascript, HTML5, CSS and other advanced features are all supported.
     * @param {module:model/ScreenshotRequest} input Screenshot request parameters
     * @param {module:api/ConvertWebApi~convertWebUrlToScreenshotCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'Blob'}
     */
    this.convertWebUrlToScreenshot = function(input, callback) {
      var postBody = input;

      // verify the required parameter 'input' is set
      if (input === undefined || input === null) {
        throw new Error("Missing the required parameter 'input' when calling convertWebUrlToScreenshot");
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
      var returnType = 'Blob';

      return this.apiClient.callApi(
        '/convert/web/url/to/screenshot', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
