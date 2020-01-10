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
    root.CloudmersiveConvertApiClient.SetFormFieldValue = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SetFormFieldValue model module.
   * @module model/SetFormFieldValue
   * @version 2.3.5
   */

  /**
   * Constructs a new <code>SetFormFieldValue</code>.
   * Individual field value to set in a PDF form
   * @alias module:model/SetFormFieldValue
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SetFormFieldValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SetFormFieldValue} obj Optional instance to populate.
   * @return {module:model/SetFormFieldValue} The populated <code>SetFormFieldValue</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('FieldName')) {
        obj['FieldName'] = ApiClient.convertToType(data['FieldName'], 'String');
      }
      if (data.hasOwnProperty('TextValue')) {
        obj['TextValue'] = ApiClient.convertToType(data['TextValue'], 'String');
      }
      if (data.hasOwnProperty('CheckboxValue')) {
        obj['CheckboxValue'] = ApiClient.convertToType(data['CheckboxValue'], 'Boolean');
      }
      if (data.hasOwnProperty('ComboBoxSelectedIndex')) {
        obj['ComboBoxSelectedIndex'] = ApiClient.convertToType(data['ComboBoxSelectedIndex'], 'Number');
      }
    }
    return obj;
  }

  /**
   * Name of the field to set; you can call /convert/edit/pdf/form/get-fields to enumerate field names in a form
   * @member {String} FieldName
   */
  exports.prototype['FieldName'] = undefined;
  /**
   * For fields of type Text, the text value to put into the field
   * @member {String} TextValue
   */
  exports.prototype['TextValue'] = undefined;
  /**
   * For fields of type Checkbox, the value to put into the field
   * @member {Boolean} CheckboxValue
   */
  exports.prototype['CheckboxValue'] = undefined;
  /**
   * For fields of type ComboBox; specifies the selected index of the combo box selection
   * @member {Number} ComboBoxSelectedIndex
   */
  exports.prototype['ComboBoxSelectedIndex'] = undefined;



  return exports;
}));


