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
    root.CloudmersiveConvertApiClient.FindRegexMatch = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FindRegexMatch model module.
   * @module model/FindRegexMatch
   * @version 2.6.2
   */

  /**
   * Constructs a new <code>FindRegexMatch</code>.
   * Individual regular expression match result of finding a target regex in a longer text string
   * @alias module:model/FindRegexMatch
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>FindRegexMatch</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FindRegexMatch} obj Optional instance to populate.
   * @return {module:model/FindRegexMatch} The populated <code>FindRegexMatch</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CharacterOffsetStart')) {
        obj['CharacterOffsetStart'] = ApiClient.convertToType(data['CharacterOffsetStart'], 'Number');
      }
      if (data.hasOwnProperty('CharacterOffsetEnd')) {
        obj['CharacterOffsetEnd'] = ApiClient.convertToType(data['CharacterOffsetEnd'], 'Number');
      }
      if (data.hasOwnProperty('ContainingLine')) {
        obj['ContainingLine'] = ApiClient.convertToType(data['ContainingLine'], 'String');
      }
      if (data.hasOwnProperty('MatchValue')) {
        obj['MatchValue'] = ApiClient.convertToType(data['MatchValue'], 'String');
      }
      if (data.hasOwnProperty('MatchGroups')) {
        obj['MatchGroups'] = ApiClient.convertToType(data['MatchGroups'], ['String']);
      }
    }
    return obj;
  }

  /**
   * 0-based index of the start of the match
   * @member {Number} CharacterOffsetStart
   */
  exports.prototype['CharacterOffsetStart'] = undefined;
  /**
   * 0-based index of the end of the match
   * @member {Number} CharacterOffsetEnd
   */
  exports.prototype['CharacterOffsetEnd'] = undefined;
  /**
   * Text content of the line containing the match
   * @member {String} ContainingLine
   */
  exports.prototype['ContainingLine'] = undefined;
  /**
   * The match value
   * @member {String} MatchValue
   */
  exports.prototype['MatchValue'] = undefined;
  /**
   * Regular expression regex match groups; these correspond to the match values
   * @member {Array.<String>} MatchGroups
   */
  exports.prototype['MatchGroups'] = undefined;



  return exports;
}));


