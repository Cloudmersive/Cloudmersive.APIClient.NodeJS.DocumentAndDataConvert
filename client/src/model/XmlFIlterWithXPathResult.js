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
    root.CloudmersiveConvertApiClient.XmlFilterWithXPathResult = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The XmlFilterWithXPathResult model module.
   * @module model/XmlFilterWithXPathResult
   * @version 2.6.7
   */

  /**
   * Constructs a new <code>XmlFilterWithXPathResult</code>.
   * Result of performing a filter operation on XML input using XPath
   * @alias module:model/XmlFilterWithXPathResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>XmlFilterWithXPathResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/XmlFilterWithXPathResult} obj Optional instance to populate.
   * @return {module:model/XmlFilterWithXPathResult} The populated <code>XmlFilterWithXPathResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('XmlNodes')) {
        obj['XmlNodes'] = ApiClient.convertToType(data['XmlNodes'], ['String']);
      }
      if (data.hasOwnProperty('ResultCount')) {
        obj['ResultCount'] = ApiClient.convertToType(data['ResultCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * True if the operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Matching selected XML nodes as strings
   * @member {Array.<String>} XmlNodes
   */
  exports.prototype['XmlNodes'] = undefined;
  /**
   * Count of the matching results
   * @member {Number} ResultCount
   */
  exports.prototype['ResultCount'] = undefined;



  return exports;
}));


