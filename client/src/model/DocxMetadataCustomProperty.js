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
    root.CloudmersiveConvertApiClient.DocxMetadataCustomProperty = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DocxMetadataCustomProperty model module.
   * @module model/DocxMetadataCustomProperty
   * @version 2.6.0
   */

  /**
   * Constructs a new <code>DocxMetadataCustomProperty</code>.
   * Name and value pair for a custom-defined DOCX metadata property
   * @alias module:model/DocxMetadataCustomProperty
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>DocxMetadataCustomProperty</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxMetadataCustomProperty} obj Optional instance to populate.
   * @return {module:model/DocxMetadataCustomProperty} The populated <code>DocxMetadataCustomProperty</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('PropertyName')) {
        obj['PropertyName'] = ApiClient.convertToType(data['PropertyName'], 'String');
      }
      if (data.hasOwnProperty('PropertyDataType')) {
        obj['PropertyDataType'] = ApiClient.convertToType(data['PropertyDataType'], 'String');
      }
      if (data.hasOwnProperty('StringValue')) {
        obj['StringValue'] = ApiClient.convertToType(data['StringValue'], 'String');
      }
      if (data.hasOwnProperty('IntegerValue')) {
        obj['IntegerValue'] = ApiClient.convertToType(data['IntegerValue'], 'Number');
      }
      if (data.hasOwnProperty('DoubleValue')) {
        obj['DoubleValue'] = ApiClient.convertToType(data['DoubleValue'], 'Number');
      }
      if (data.hasOwnProperty('DateValue')) {
        obj['DateValue'] = ApiClient.convertToType(data['DateValue'], 'Date');
      }
    }
    return obj;
  }

  /**
   * Name of the property
   * @member {String} PropertyName
   */
  exports.prototype['PropertyName'] = undefined;
  /**
   * Data type of the property; possible values are \"string\", \"integer\", \"double\" or \"date\"
   * @member {String} PropertyDataType
   */
  exports.prototype['PropertyDataType'] = undefined;
  /**
   * If the property is of a string data type, then provides the string value if available
   * @member {String} StringValue
   */
  exports.prototype['StringValue'] = undefined;
  /**
   * If the property is of a integer data type, then provides the integer value if available
   * @member {Number} IntegerValue
   */
  exports.prototype['IntegerValue'] = undefined;
  /**
   * If the property is of a double floating point data type, then provides the double value if available
   * @member {Number} DoubleValue
   */
  exports.prototype['DoubleValue'] = undefined;
  /**
   * If the property is of a date time data type, then provides the date time value if available
   * @member {Date} DateValue
   */
  exports.prototype['DateValue'] = undefined;



  return exports;
}));


