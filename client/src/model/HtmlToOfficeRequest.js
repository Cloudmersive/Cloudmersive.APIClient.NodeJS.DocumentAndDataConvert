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
    root.CloudmersiveConvertApiClient.HtmlToOfficeRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HtmlToOfficeRequest model module.
   * @module model/HtmlToOfficeRequest
   * @version 2.4.1
   */

  /**
   * Constructs a new <code>HtmlToOfficeRequest</code>.
   * Details of the HTML to Office request
   * @alias module:model/HtmlToOfficeRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>HtmlToOfficeRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HtmlToOfficeRequest} obj Optional instance to populate.
   * @return {module:model/HtmlToOfficeRequest} The populated <code>HtmlToOfficeRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Html')) {
        obj['Html'] = ApiClient.convertToType(data['Html'], 'String');
      }
    }
    return obj;
  }

  /**
   * HTML to render to Office format
   * @member {String} Html
   */
  exports.prototype['Html'] = undefined;



  return exports;
}));


