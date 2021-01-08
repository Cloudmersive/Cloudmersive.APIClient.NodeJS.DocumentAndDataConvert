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
    root.CloudmersiveConvertApiClient.FindStringSimpleRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FindStringSimpleRequest model module.
   * @module model/FindStringSimpleRequest
   * @version 2.6.1
   */

  /**
   * Constructs a new <code>FindStringSimpleRequest</code>.
   * Request to find a string in a string
   * @alias module:model/FindStringSimpleRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>FindStringSimpleRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FindStringSimpleRequest} obj Optional instance to populate.
   * @return {module:model/FindStringSimpleRequest} The populated <code>FindStringSimpleRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TextContent')) {
        obj['TextContent'] = ApiClient.convertToType(data['TextContent'], 'String');
      }
      if (data.hasOwnProperty('TargetString')) {
        obj['TargetString'] = ApiClient.convertToType(data['TargetString'], 'String');
      }
    }
    return obj;
  }

  /**
   * Input text content
   * @member {String} TextContent
   */
  exports.prototype['TextContent'] = undefined;
  /**
   * Target input string to find
   * @member {String} TargetString
   */
  exports.prototype['TargetString'] = undefined;



  return exports;
}));


