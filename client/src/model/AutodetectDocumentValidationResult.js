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
    define(['ApiClient', 'model/DocumentValidationError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocumentValidationError'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.AutodetectDocumentValidationResult = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocumentValidationError);
  }
}(this, function(ApiClient, DocumentValidationError) {
  'use strict';




  /**
   * The AutodetectDocumentValidationResult model module.
   * @module model/AutodetectDocumentValidationResult
   * @version 2.3.4
   */

  /**
   * Constructs a new <code>AutodetectDocumentValidationResult</code>.
   * Document validation result
   * @alias module:model/AutodetectDocumentValidationResult
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>AutodetectDocumentValidationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AutodetectDocumentValidationResult} obj Optional instance to populate.
   * @return {module:model/AutodetectDocumentValidationResult} The populated <code>AutodetectDocumentValidationResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('FileFormatExtension')) {
        obj['FileFormatExtension'] = ApiClient.convertToType(data['FileFormatExtension'], 'String');
      }
      if (data.hasOwnProperty('DocumentIsValid')) {
        obj['DocumentIsValid'] = ApiClient.convertToType(data['DocumentIsValid'], 'Boolean');
      }
      if (data.hasOwnProperty('ErrorCount')) {
        obj['ErrorCount'] = ApiClient.convertToType(data['ErrorCount'], 'Number');
      }
      if (data.hasOwnProperty('WarningCount')) {
        obj['WarningCount'] = ApiClient.convertToType(data['WarningCount'], 'Number');
      }
      if (data.hasOwnProperty('ErrorsAndWarnings')) {
        obj['ErrorsAndWarnings'] = ApiClient.convertToType(data['ErrorsAndWarnings'], [DocumentValidationError]);
      }
    }
    return obj;
  }

  /**
   * @member {String} FileFormatExtension
   */
  exports.prototype['FileFormatExtension'] = undefined;
  /**
   * True if the document is valid and has no errors, false otherwise
   * @member {Boolean} DocumentIsValid
   */
  exports.prototype['DocumentIsValid'] = undefined;
  /**
   * Number of validation errors found in the document
   * @member {Number} ErrorCount
   */
  exports.prototype['ErrorCount'] = undefined;
  /**
   * Number of validation warnings found in the document
   * @member {Number} WarningCount
   */
  exports.prototype['WarningCount'] = undefined;
  /**
   * Details of errors and warnings found
   * @member {Array.<module:model/DocumentValidationError>} ErrorsAndWarnings
   */
  exports.prototype['ErrorsAndWarnings'] = undefined;



  return exports;
}));


