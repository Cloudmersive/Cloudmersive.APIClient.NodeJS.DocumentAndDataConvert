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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['cloudmersive.client.convert.invoke/ApiClient', 'cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlTemplateApplicationRequest', 'cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlTemplateApplicationResponse', 'cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlTemplateOperation', 'cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlToPdfRequest', 'cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/ScreenshotRequest', 'cloudmersive.client.convert.invoke/cloudmersive.client.convert.api/ConvertDataApi', 'cloudmersive.client.convert.invoke/cloudmersive.client.convert.api/ConvertDocumentApi', 'cloudmersive.client.convert.invoke/cloudmersive.client.convert.api/ConvertImageApi', 'cloudmersive.client.convert.invoke/cloudmersive.client.convert.api/ConvertTemplateApi', 'cloudmersive.client.convert.invoke/cloudmersive.client.convert.api/ConvertWebApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./cloudmersive.client.convert.model/HtmlTemplateApplicationRequest'), require('./cloudmersive.client.convert.model/HtmlTemplateApplicationResponse'), require('./cloudmersive.client.convert.model/HtmlTemplateOperation'), require('./cloudmersive.client.convert.model/HtmlToPdfRequest'), require('./cloudmersive.client.convert.model/ScreenshotRequest'), require('./cloudmersive.client.convert.api/ConvertDataApi'), require('./cloudmersive.client.convert.api/ConvertDocumentApi'), require('./cloudmersive.client.convert.api/ConvertImageApi'), require('./cloudmersive.client.convert.api/ConvertTemplateApi'), require('./cloudmersive.client.convert.api/ConvertWebApi'));
  }
}(function(ApiClient, HtmlTemplateApplicationRequest, HtmlTemplateApplicationResponse, HtmlTemplateOperation, HtmlToPdfRequest, ScreenshotRequest, ConvertDataApi, ConvertDocumentApi, ConvertImageApi, ConvertTemplateApi, ConvertWebApi) {
  'use strict';

  /**
   * Convert_API_lets_you_effortlessly_convert_file_formats_and_types_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CloudmersiveConvertApiClient = require('cloudmersive.client.convert.invoke/index'); // See note below*.
   * var xxxSvc = new CloudmersiveConvertApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CloudmersiveConvertApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['cloudmersive.client.convert.invoke/index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CloudmersiveConvertApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CloudmersiveConvertApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module cloudmersive.client.convert.invoke/index
   * @version 1.0.2
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:cloudmersive.client.convert.invoke/ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The HtmlTemplateApplicationRequest model constructor.
     * @property {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlTemplateApplicationRequest}
     */
    HtmlTemplateApplicationRequest: HtmlTemplateApplicationRequest,
    /**
     * The HtmlTemplateApplicationResponse model constructor.
     * @property {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlTemplateApplicationResponse}
     */
    HtmlTemplateApplicationResponse: HtmlTemplateApplicationResponse,
    /**
     * The HtmlTemplateOperation model constructor.
     * @property {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlTemplateOperation}
     */
    HtmlTemplateOperation: HtmlTemplateOperation,
    /**
     * The HtmlToPdfRequest model constructor.
     * @property {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/HtmlToPdfRequest}
     */
    HtmlToPdfRequest: HtmlToPdfRequest,
    /**
     * The ScreenshotRequest model constructor.
     * @property {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/ScreenshotRequest}
     */
    ScreenshotRequest: ScreenshotRequest,
    /**
     * The ConvertDataApi service constructor.
     * @property {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.api/ConvertDataApi}
     */
    ConvertDataApi: ConvertDataApi,
    /**
     * The ConvertDocumentApi service constructor.
     * @property {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.api/ConvertDocumentApi}
     */
    ConvertDocumentApi: ConvertDocumentApi,
    /**
     * The ConvertImageApi service constructor.
     * @property {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.api/ConvertImageApi}
     */
    ConvertImageApi: ConvertImageApi,
    /**
     * The ConvertTemplateApi service constructor.
     * @property {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.api/ConvertTemplateApi}
     */
    ConvertTemplateApi: ConvertTemplateApi,
    /**
     * The ConvertWebApi service constructor.
     * @property {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.api/ConvertWebApi}
     */
    ConvertWebApi: ConvertWebApi
  };

  return exports;
}));
