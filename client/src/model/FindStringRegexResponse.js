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
    define(['ApiClient', 'model/FindRegexMatch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FindRegexMatch'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.FindStringRegexResponse = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.FindRegexMatch);
  }
}(this, function(ApiClient, FindRegexMatch) {
  'use strict';




  /**
   * The FindStringRegexResponse model module.
   * @module model/FindStringRegexResponse
   * @version 2.4.4
   */

  /**
   * Constructs a new <code>FindStringRegexResponse</code>.
   * Result of finding a string
   * @alias module:model/FindStringRegexResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>FindStringRegexResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FindStringRegexResponse} obj Optional instance to populate.
   * @return {module:model/FindStringRegexResponse} The populated <code>FindStringRegexResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Matches')) {
        obj['Matches'] = ApiClient.convertToType(data['Matches'], [FindRegexMatch]);
      }
      if (data.hasOwnProperty('MatchCount')) {
        obj['MatchCount'] = ApiClient.convertToType(data['MatchCount'], 'Number');
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
   * Regular expression matches
   * @member {Array.<module:model/FindRegexMatch>} Matches
   */
  exports.prototype['Matches'] = undefined;
  /**
   * The number of matches
   * @member {Number} MatchCount
   */
  exports.prototype['MatchCount'] = undefined;



  return exports;
}));


