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
    root.CloudmersiveConvertApiClient.PdfFormField = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PdfFormField model module.
   * @module model/PdfFormField
   * @version 2.5.7
   */

  /**
   * Constructs a new <code>PdfFormField</code>.
   * Field definition and value in the form
   * @alias module:model/PdfFormField
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PdfFormField</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PdfFormField} obj Optional instance to populate.
   * @return {module:model/PdfFormField} The populated <code>PdfFormField</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('FieldName')) {
        obj['FieldName'] = ApiClient.convertToType(data['FieldName'], 'String');
      }
      if (data.hasOwnProperty('FieldType')) {
        obj['FieldType'] = ApiClient.convertToType(data['FieldType'], 'String');
      }
      if (data.hasOwnProperty('FieldValue')) {
        obj['FieldValue'] = ApiClient.convertToType(data['FieldValue'], 'String');
      }
      if (data.hasOwnProperty('FieldComboBoxSelectedIndex')) {
        obj['FieldComboBoxSelectedIndex'] = ApiClient.convertToType(data['FieldComboBoxSelectedIndex'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Name of the form field
   * @member {String} FieldName
   */
  exports.prototype['FieldName'] = undefined;
  /**
   * The data type of the field; possible values are Text (FieldValue will be a string), Checkbox (FieldValue can be \"true\" or \"false\"), ComboBox (FieldComboBoxSelectedIndex will also be populated), Other
   * @member {String} FieldType
   */
  exports.prototype['FieldType'] = undefined;
  /**
   * Value of the form field
   * @member {String} FieldValue
   */
  exports.prototype['FieldValue'] = undefined;
  /**
   * Applies to ComboBox field types only; specifies the selected index of the combo box selection if available
   * @member {Number} FieldComboBoxSelectedIndex
   */
  exports.prototype['FieldComboBoxSelectedIndex'] = undefined;



  return exports;
}));


