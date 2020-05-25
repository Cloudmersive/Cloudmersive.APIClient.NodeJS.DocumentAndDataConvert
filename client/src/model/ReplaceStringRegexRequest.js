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
    root.CloudmersiveConvertApiClient.ReplaceStringRegexRequest = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReplaceStringRegexRequest model module.
   * @module model/ReplaceStringRegexRequest
   * @version 2.4.7
   */

  /**
   * Constructs a new <code>ReplaceStringRegexRequest</code>.
   * Request to replace a regex string in a string
   * @alias module:model/ReplaceStringRegexRequest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>ReplaceStringRegexRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReplaceStringRegexRequest} obj Optional instance to populate.
   * @return {module:model/ReplaceStringRegexRequest} The populated <code>ReplaceStringRegexRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TextContent')) {
        obj['TextContent'] = ApiClient.convertToType(data['TextContent'], 'String');
      }
      if (data.hasOwnProperty('RegularExpressionString')) {
        obj['RegularExpressionString'] = ApiClient.convertToType(data['RegularExpressionString'], 'String');
      }
      if (data.hasOwnProperty('ReplaceWithString')) {
        obj['ReplaceWithString'] = ApiClient.convertToType(data['ReplaceWithString'], 'String');
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
   * Target input regular expression (regex) string to match and be replaced; supports all regular expression values
   * @member {String} RegularExpressionString
   */
  exports.prototype['RegularExpressionString'] = undefined;
  /**
   * Replacement for target string; supports referencing indexed regex matched values from RegularExpressionString, such as $1, $2, and so on
   * @member {String} ReplaceWithString
   */
  exports.prototype['ReplaceWithString'] = undefined;



  return exports;
}));


