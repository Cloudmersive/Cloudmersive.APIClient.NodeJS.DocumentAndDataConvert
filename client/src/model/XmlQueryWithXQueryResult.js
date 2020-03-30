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
    root.CloudmersiveConvertApiClient.XmlQueryWithXQueryResult = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The XmlQueryWithXQueryResult model module.
   * @module model/XmlQueryWithXQueryResult
   * @version 2.4.3
   */

  /**
   * Constructs a new <code>XmlQueryWithXQueryResult</code>.
   * Result of performing an XQuery operation on an XML document.
   * @alias module:model/XmlQueryWithXQueryResult
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>XmlQueryWithXQueryResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/XmlQueryWithXQueryResult} obj Optional instance to populate.
   * @return {module:model/XmlQueryWithXQueryResult} The populated <code>XmlQueryWithXQueryResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('ResultingXml')) {
        obj['ResultingXml'] = ApiClient.convertToType(data['ResultingXml'], 'String');
      }
      if (data.hasOwnProperty('ErrorMessage')) {
        obj['ErrorMessage'] = ApiClient.convertToType(data['ErrorMessage'], 'String');
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
   * Resulting XML result output
   * @member {String} ResultingXml
   */
  exports.prototype['ResultingXml'] = undefined;
  /**
   * If an error occurs, additional details on the error
   * @member {String} ErrorMessage
   */
  exports.prototype['ErrorMessage'] = undefined;



  return exports;
}));

