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
    root.CloudmersiveConvertApiClient.DocxStyle = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DocxStyle model module.
   * @module model/DocxStyle
   * @version 2.4.8
   */

  /**
   * Constructs a new <code>DocxStyle</code>.
   * Style in a DOCX Word Document
   * @alias module:model/DocxStyle
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>DocxStyle</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxStyle} obj Optional instance to populate.
   * @return {module:model/DocxStyle} The populated <code>DocxStyle</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('StyleID')) {
        obj['StyleID'] = ApiClient.convertToType(data['StyleID'], 'String');
      }
      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('Bold')) {
        obj['Bold'] = ApiClient.convertToType(data['Bold'], 'Boolean');
      }
      if (data.hasOwnProperty('Italic')) {
        obj['Italic'] = ApiClient.convertToType(data['Italic'], 'Boolean');
      }
      if (data.hasOwnProperty('Underline')) {
        obj['Underline'] = ApiClient.convertToType(data['Underline'], 'Boolean');
      }
      if (data.hasOwnProperty('FontSize')) {
        obj['FontSize'] = ApiClient.convertToType(data['FontSize'], 'String');
      }
      if (data.hasOwnProperty('FontFamily')) {
        obj['FontFamily'] = ApiClient.convertToType(data['FontFamily'], 'String');
      }
    }
    return obj;
  }

  /**
   * ID of the style
   * @member {String} StyleID
   */
  exports.prototype['StyleID'] = undefined;
  /**
   * The Path of the location of this object; leave blank for new tables
   * @member {String} Path
   */
  exports.prototype['Path'] = undefined;
  /**
   * Style applies bold formatting
   * @member {Boolean} Bold
   */
  exports.prototype['Bold'] = undefined;
  /**
   * Style applies italic formatting
   * @member {Boolean} Italic
   */
  exports.prototype['Italic'] = undefined;
  /**
   * Style applies underline formatting
   * @member {Boolean} Underline
   */
  exports.prototype['Underline'] = undefined;
  /**
   * Font size
   * @member {String} FontSize
   */
  exports.prototype['FontSize'] = undefined;
  /**
   * Font family
   * @member {String} FontFamily
   */
  exports.prototype['FontFamily'] = undefined;



  return exports;
}));


