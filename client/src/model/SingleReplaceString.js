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
    root.CloudmersiveConvertApiClient.SingleReplaceString = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SingleReplaceString model module.
   * @module model/SingleReplaceString
   * @version 2.6.7
   */

  /**
   * Constructs a new <code>SingleReplaceString</code>.
   * A single string replacement request
   * @alias module:model/SingleReplaceString
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SingleReplaceString</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SingleReplaceString} obj Optional instance to populate.
   * @return {module:model/SingleReplaceString} The populated <code>SingleReplaceString</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('MatchString')) {
        obj['MatchString'] = ApiClient.convertToType(data['MatchString'], 'String');
      }
      if (data.hasOwnProperty('ReplaceString')) {
        obj['ReplaceString'] = ApiClient.convertToType(data['ReplaceString'], 'String');
      }
      if (data.hasOwnProperty('MatchCase')) {
        obj['MatchCase'] = ApiClient.convertToType(data['MatchCase'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * String to search for and match against, to be replaced
   * @member {String} MatchString
   */
  exports.prototype['MatchString'] = undefined;
  /**
   * String to replace the matched values with
   * @member {String} ReplaceString
   */
  exports.prototype['ReplaceString'] = undefined;
  /**
   * True if the case should be matched, false for case insensitive match
   * @member {Boolean} MatchCase
   */
  exports.prototype['MatchCase'] = undefined;



  return exports;
}));


