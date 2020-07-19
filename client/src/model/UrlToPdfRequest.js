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
    root.CloudmersiveConvertApiClient.UrlToPdfRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UrlToPdfRequest model module.
   * @module model/UrlToPdfRequest
   * @version 2.5.2
   */

  /**
   * Constructs a new <code>UrlToPdfRequest</code>.
   * Request to convert a URL to a PDF file
   * @alias module:model/UrlToPdfRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>UrlToPdfRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UrlToPdfRequest} obj Optional instance to populate.
   * @return {module:model/UrlToPdfRequest} The populated <code>UrlToPdfRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Url')) {
        obj['Url'] = ApiClient.convertToType(data['Url'], 'String');
      }
      if (data.hasOwnProperty('ExtraLoadingWait')) {
        obj['ExtraLoadingWait'] = ApiClient.convertToType(data['ExtraLoadingWait'], 'Number');
      }
      if (data.hasOwnProperty('IncludeBackgroundGraphics')) {
        obj['IncludeBackgroundGraphics'] = ApiClient.convertToType(data['IncludeBackgroundGraphics'], 'Boolean');
      }
      if (data.hasOwnProperty('ScaleFactor')) {
        obj['ScaleFactor'] = ApiClient.convertToType(data['ScaleFactor'], 'Number');
      }
    }
    return obj;
  }

  /**
   * URL address of the website to screenshot.  HTTP and HTTPS are both supported, as are custom ports.
   * @member {String} Url
   */
  exports.prototype['Url'] = undefined;
  /**
   * Optional: Additional number of milliseconds to wait once the web page has finished loading before taking the screenshot.  Can be helpful for highly asynchronous websites.  Provide a value of 0 for the default of 5000 milliseconds (5 seconds)
   * @member {Number} ExtraLoadingWait
   */
  exports.prototype['ExtraLoadingWait'] = undefined;
  /**
   * Optional: Set to true to include background graphics in the PDF, or false to not include.  Default is true.
   * @member {Boolean} IncludeBackgroundGraphics
   */
  exports.prototype['IncludeBackgroundGraphics'] = undefined;
  /**
   * Optional: Set to 100 to scale at 100%, set to 50% to scale down to 50% scale, set to 200% to scale up to 200% scale, etc.  Default is 100%
   * @member {Number} ScaleFactor
   */
  exports.prototype['ScaleFactor'] = undefined;



  return exports;
}));


