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
    root.CloudmersiveConvertApiClient.XmlReplaceWithXPathResult = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The XmlReplaceWithXPathResult model module.
   * @module model/XmlReplaceWithXPathResult
   * @version 2.2.7
   */

  /**
   * Constructs a new <code>XmlReplaceWithXPathResult</code>.
   * Result of performing a replace node operation on XML input using XPath
   * @alias module:model/XmlReplaceWithXPathResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>XmlReplaceWithXPathResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/XmlReplaceWithXPathResult} obj Optional instance to populate.
   * @return {module:model/XmlReplaceWithXPathResult} The populated <code>XmlReplaceWithXPathResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('ResultingXmlDocument')) {
        obj['ResultingXmlDocument'] = ApiClient.convertToType(data['ResultingXmlDocument'], 'String');
      }
      if (data.hasOwnProperty('NodesEditedCount')) {
        obj['NodesEditedCount'] = ApiClient.convertToType(data['NodesEditedCount'], 'Number');
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
   * Resulting, modified XML document
   * @member {String} ResultingXmlDocument
   */
  exports.prototype['ResultingXmlDocument'] = undefined;
  /**
   * Count of the matching results
   * @member {Number} NodesEditedCount
   */
  exports.prototype['NodesEditedCount'] = undefined;



  return exports;
}));


