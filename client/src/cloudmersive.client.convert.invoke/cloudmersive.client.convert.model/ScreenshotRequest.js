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
    define(['cloudmersive.client.convert.invoke/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.ScreenshotRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ScreenshotRequest model module.
   * @module cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/ScreenshotRequest
   * @version 1.0.3
   */

  /**
   * Constructs a new <code>ScreenshotRequest</code>.
   * Details of the screenshot request
   * @alias module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/ScreenshotRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ScreenshotRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/ScreenshotRequest} obj Optional instance to populate.
   * @return {module:cloudmersive.client.convert.invoke/cloudmersive.client.convert.model/ScreenshotRequest} The populated <code>ScreenshotRequest</code> instance.
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
    }
    return obj;
  }

  /**
   * @member {String} Url
   */
  exports.prototype['Url'] = undefined;
  /**
   * @member {Number} ExtraLoadingWait
   */
  exports.prototype['ExtraLoadingWait'] = undefined;



  return exports;
}));


