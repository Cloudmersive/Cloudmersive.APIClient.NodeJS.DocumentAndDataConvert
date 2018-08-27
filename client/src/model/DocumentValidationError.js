/**
 * convertapi
 * Convert API lets you effortlessly convert file formats and types.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
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
    root.CloudmersiveConvertApiClient.DocumentValidationError = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DocumentValidationError model module.
   * @module model/DocumentValidationError
   * @version 1.2.4
   */

  /**
   * Constructs a new <code>DocumentValidationError</code>.
   * Validation error found in document
   * @alias module:model/DocumentValidationError
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DocumentValidationError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocumentValidationError} obj Optional instance to populate.
   * @return {module:model/DocumentValidationError} The populated <code>DocumentValidationError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Description')) {
        obj['Description'] = ApiClient.convertToType(data['Description'], 'String');
      }
      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('Uri')) {
        obj['Uri'] = ApiClient.convertToType(data['Uri'], 'String');
      }
      if (data.hasOwnProperty('IsError')) {
        obj['IsError'] = ApiClient.convertToType(data['IsError'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Description of the error
   * @member {String} Description
   */
  exports.prototype['Description'] = undefined;
  /**
   * XPath to the error
   * @member {String} Path
   */
  exports.prototype['Path'] = undefined;
  /**
   * URI of the part in question
   * @member {String} Uri
   */
  exports.prototype['Uri'] = undefined;
  /**
   * True if this is an error, false otherwise
   * @member {Boolean} IsError
   */
  exports.prototype['IsError'] = undefined;



  return exports;
}));

