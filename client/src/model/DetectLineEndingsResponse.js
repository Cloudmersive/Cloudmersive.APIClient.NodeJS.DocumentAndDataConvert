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
    root.CloudmersiveConvertApiClient.DetectLineEndingsResponse = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DetectLineEndingsResponse model module.
   * @module model/DetectLineEndingsResponse
   * @version 2.5.1
   */

  /**
   * Constructs a new <code>DetectLineEndingsResponse</code>.
   * Result of base 64 decoding
   * @alias module:model/DetectLineEndingsResponse
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DetectLineEndingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetectLineEndingsResponse} obj Optional instance to populate.
   * @return {module:model/DetectLineEndingsResponse} The populated <code>DetectLineEndingsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('PrimaryNewlineType')) {
        obj['PrimaryNewlineType'] = ApiClient.convertToType(data['PrimaryNewlineType'], 'String');
      }
      if (data.hasOwnProperty('PrimaryNewlineTerminator')) {
        obj['PrimaryNewlineTerminator'] = ApiClient.convertToType(data['PrimaryNewlineTerminator'], 'String');
      }
      if (data.hasOwnProperty('InputLength')) {
        obj['InputLength'] = ApiClient.convertToType(data['InputLength'], 'Number');
      }
    }
    return obj;
  }

  /**
   * True if successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Type of newline in the file; possible vlaues are \"Mac\" (legacy Mac OS uses carriage return only); \"Unix\" (Unix and Linux OSes, and modern Mac OS); \"Windows\" (Windows operating systems)
   * @member {String} PrimaryNewlineType
   */
  exports.prototype['PrimaryNewlineType'] = undefined;
  /**
   * Characters used to terminate a newline; can be carriage return, linefeed, or carriage return + linefeed
   * @member {String} PrimaryNewlineTerminator
   */
  exports.prototype['PrimaryNewlineTerminator'] = undefined;
  /**
   * Length of the input string in characters
   * @member {Number} InputLength
   */
  exports.prototype['InputLength'] = undefined;



  return exports;
}));


