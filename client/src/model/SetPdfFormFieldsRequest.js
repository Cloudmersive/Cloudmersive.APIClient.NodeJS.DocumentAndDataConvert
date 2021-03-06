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
    define(['ApiClient', 'model/SetFormFieldValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SetFormFieldValue'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.SetPdfFormFieldsRequest = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.SetFormFieldValue);
  }
}(this, function(ApiClient, SetFormFieldValue) {
  'use strict';




  /**
   * The SetPdfFormFieldsRequest model module.
   * @module model/SetPdfFormFieldsRequest
   * @version 2.6.7
   */

  /**
   * Constructs a new <code>SetPdfFormFieldsRequest</code>.
   * Request to set the fields in a PDF form
   * @alias module:model/SetPdfFormFieldsRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SetPdfFormFieldsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SetPdfFormFieldsRequest} obj Optional instance to populate.
   * @return {module:model/SetPdfFormFieldsRequest} The populated <code>SetPdfFormFieldsRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('FieldValues')) {
        obj['FieldValues'] = ApiClient.convertToType(data['FieldValues'], [SetFormFieldValue]);
      }
      if (data.hasOwnProperty('InputFileBytes')) {
        obj['InputFileBytes'] = ApiClient.convertToType(data['InputFileBytes'], 'Blob');
      }
    }
    return obj;
  }

  /**
   * Field values to set
   * @member {Array.<module:model/SetFormFieldValue>} FieldValues
   */
  exports.prototype['FieldValues'] = undefined;
  /**
   * Contents of the input file to set the fields on
   * @member {Blob} InputFileBytes
   */
  exports.prototype['InputFileBytes'] = undefined;



  return exports;
}));


