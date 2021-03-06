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
    root.CloudmersiveConvertApiClient.FindStringRegexRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FindStringRegexRequest model module.
   * @module model/FindStringRegexRequest
   * @version 2.6.7
   */

  /**
   * Constructs a new <code>FindStringRegexRequest</code>.
   * Request to find a string in a string
   * @alias module:model/FindStringRegexRequest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>FindStringRegexRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FindStringRegexRequest} obj Optional instance to populate.
   * @return {module:model/FindStringRegexRequest} The populated <code>FindStringRegexRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TextContent')) {
        obj['TextContent'] = ApiClient.convertToType(data['TextContent'], 'String');
      }
      if (data.hasOwnProperty('TargetRegex')) {
        obj['TargetRegex'] = ApiClient.convertToType(data['TargetRegex'], 'String');
      }
      if (data.hasOwnProperty('MatchCase')) {
        obj['MatchCase'] = ApiClient.convertToType(data['MatchCase'], 'Boolean');
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
   * Target input regular expression (regex) to find
   * @member {String} TargetRegex
   */
  exports.prototype['TargetRegex'] = undefined;
  /**
   * Set to True to match case, False to ignore case
   * @member {Boolean} MatchCase
   */
  exports.prototype['MatchCase'] = undefined;



  return exports;
}));


