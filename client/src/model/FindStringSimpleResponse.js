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
    define(['ApiClient', 'model/FindStringMatch'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FindStringMatch'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.FindStringSimpleResponse = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.FindStringMatch);
  }
}(this, function(ApiClient, FindStringMatch) {
  'use strict';




  /**
   * The FindStringSimpleResponse model module.
   * @module model/FindStringSimpleResponse
   * @version 2.4.0
   */

  /**
   * Constructs a new <code>FindStringSimpleResponse</code>.
   * Result of finding a string
   * @alias module:model/FindStringSimpleResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>FindStringSimpleResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FindStringSimpleResponse} obj Optional instance to populate.
   * @return {module:model/FindStringSimpleResponse} The populated <code>FindStringSimpleResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Matches')) {
        obj['Matches'] = ApiClient.convertToType(data['Matches'], [FindStringMatch]);
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
   * Found matches
   * @member {Array.<module:model/FindStringMatch>} Matches
   */
  exports.prototype['Matches'] = undefined;
  /**
   * The number of matches
   * @member {Number} MatchCount
   */
  exports.prototype['MatchCount'] = undefined;



  return exports;
}));


