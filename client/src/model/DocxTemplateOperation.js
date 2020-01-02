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
    root.CloudmersiveConvertApiClient.DocxTemplateOperation = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DocxTemplateOperation model module.
   * @module model/DocxTemplateOperation
   * @version 2.2.9
   */

  /**
   * Constructs a new <code>DocxTemplateOperation</code>.
   * @alias module:model/DocxTemplateOperation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DocxTemplateOperation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxTemplateOperation} obj Optional instance to populate.
   * @return {module:model/DocxTemplateOperation} The populated <code>DocxTemplateOperation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Action')) {
        obj['Action'] = ApiClient.convertToType(data['Action'], 'Number');
      }
      if (data.hasOwnProperty('MatchAgainst')) {
        obj['MatchAgainst'] = ApiClient.convertToType(data['MatchAgainst'], 'String');
      }
      if (data.hasOwnProperty('ReplaceWith')) {
        obj['ReplaceWith'] = ApiClient.convertToType(data['ReplaceWith'], 'String');
      }
    }
    return obj;
  }

  /**
   * Operation action to take; possible values are \"Replace\"
   * @member {module:model/DocxTemplateOperation.ActionEnum} Action
   */
  exports.prototype['Action'] = undefined;
  /**
   * For Replace operations, the string to match against (to be replaced with ReplaceWith string)
   * @member {String} MatchAgainst
   */
  exports.prototype['MatchAgainst'] = undefined;
  /**
   * For Replace operations, the string to Replace the original string with
   * @member {String} ReplaceWith
   */
  exports.prototype['ReplaceWith'] = undefined;


  /**
   * Allowed values for the <code>Action</code> property.
   * @enum {Number}
   * @readonly
   */
  exports.ActionEnum = {
    /**
     * value: 1
     * @const
     */
    "1": 1  };


  return exports;
}));


