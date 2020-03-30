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
    define(['ApiClient', 'model/PdfFormField'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PdfFormField'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.PdfFormFields = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.PdfFormField);
  }
}(this, function(ApiClient, PdfFormField) {
  'use strict';




  /**
   * The PdfFormFields model module.
   * @module model/PdfFormFields
   * @version 2.4.3
   */

  /**
   * Constructs a new <code>PdfFormFields</code>.
   * Result of retrieving PDF form fields
   * @alias module:model/PdfFormFields
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PdfFormFields</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PdfFormFields} obj Optional instance to populate.
   * @return {module:model/PdfFormFields} The populated <code>PdfFormFields</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('FormFields')) {
        obj['FormFields'] = ApiClient.convertToType(data['FormFields'], [PdfFormField]);
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
   * Fields and field values found in the form
   * @member {Array.<module:model/PdfFormField>} FormFields
   */
  exports.prototype['FormFields'] = undefined;



  return exports;
}));


