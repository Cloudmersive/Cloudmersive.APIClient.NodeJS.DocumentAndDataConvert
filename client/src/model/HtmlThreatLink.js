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
    root.CloudmersiveConvertApiClient.HtmlThreatLink = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The HtmlThreatLink model module.
   * @module model/HtmlThreatLink
   * @version 2.6.6
   */

  /**
   * Constructs a new <code>HtmlThreatLink</code>.
   * Threat assessment for a hyperlink URL
   * @alias module:model/HtmlThreatLink
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>HtmlThreatLink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HtmlThreatLink} obj Optional instance to populate.
   * @return {module:model/HtmlThreatLink} The populated <code>HtmlThreatLink</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('LinkUrl')) {
        obj['LinkUrl'] = ApiClient.convertToType(data['LinkUrl'], 'String');
      }
      if (data.hasOwnProperty('ThreatLevel')) {
        obj['ThreatLevel'] = ApiClient.convertToType(data['ThreatLevel'], 'String');
      }
    }
    return obj;
  }

  /**
   * URL of the link
   * @member {String} LinkUrl
   */
  exports.prototype['LinkUrl'] = undefined;
  /**
   * Threat assessment level; possible values are None, Low, Medium and High
   * @member {String} ThreatLevel
   */
  exports.prototype['ThreatLevel'] = undefined;



  return exports;
}));

