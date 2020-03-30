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
    root.CloudmersiveConvertApiClient.HtmlToPngRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HtmlToPngRequest model module.
   * @module model/HtmlToPngRequest
   * @version 2.4.3
   */

  /**
   * Constructs a new <code>HtmlToPngRequest</code>.
   * Details of the HTML to PNG request
   * @alias module:model/HtmlToPngRequest
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>HtmlToPngRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HtmlToPngRequest} obj Optional instance to populate.
   * @return {module:model/HtmlToPngRequest} The populated <code>HtmlToPngRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Html')) {
        obj['Html'] = ApiClient.convertToType(data['Html'], 'String');
      }
      if (data.hasOwnProperty('ExtraLoadingWait')) {
        obj['ExtraLoadingWait'] = ApiClient.convertToType(data['ExtraLoadingWait'], 'Number');
      }
      if (data.hasOwnProperty('ScreenshotWidth')) {
        obj['ScreenshotWidth'] = ApiClient.convertToType(data['ScreenshotWidth'], 'Number');
      }
      if (data.hasOwnProperty('ScreenshotHeight')) {
        obj['ScreenshotHeight'] = ApiClient.convertToType(data['ScreenshotHeight'], 'Number');
      }
    }
    return obj;
  }

  /**
   * HTML to render to PNG (screenshot)
   * @member {String} Html
   */
  exports.prototype['Html'] = undefined;
  /**
   * Optional: Additional number of milliseconds to wait once the web page has finished loading before taking the screenshot.  Can be helpful for highly asynchronous websites.
   * @member {Number} ExtraLoadingWait
   */
  exports.prototype['ExtraLoadingWait'] = undefined;
  /**
   * Optional: Width of the screenshot in pixels; supply 0 to default to 1280 x 1024, supply -1 to measure the full screen height of the page and attempt to take a screen-height screenshot
   * @member {Number} ScreenshotWidth
   */
  exports.prototype['ScreenshotWidth'] = undefined;
  /**
   * Optional: Height of the screenshot in pixels; supply 0 to default to 1280 x 1024, supply -1 to measure the full screen height of the page and attempt to take a screen-height screenshot
   * @member {Number} ScreenshotHeight
   */
  exports.prototype['ScreenshotHeight'] = undefined;



  return exports;
}));


