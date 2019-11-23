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
    define(['ApiClient', 'model/DocxText'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxText'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.DocxRun = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxText);
  }
}(this, function(ApiClient, DocxText) {
  'use strict';




  /**
   * The DocxRun model module.
   * @module model/DocxRun
   * @version 2.1.7
   */

  /**
   * Constructs a new <code>DocxRun</code>.
   * A content run in a Word Document (DOCX) file
   * @alias module:model/DocxRun
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>DocxRun</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxRun} obj Optional instance to populate.
   * @return {module:model/DocxRun} The populated <code>DocxRun</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('RunIndex')) {
        obj['RunIndex'] = ApiClient.convertToType(data['RunIndex'], 'Number');
      }
      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('TextItems')) {
        obj['TextItems'] = ApiClient.convertToType(data['TextItems'], [DocxText]);
      }
      if (data.hasOwnProperty('Bold')) {
        obj['Bold'] = ApiClient.convertToType(data['Bold'], 'Boolean');
      }
      if (data.hasOwnProperty('Italic')) {
        obj['Italic'] = ApiClient.convertToType(data['Italic'], 'Boolean');
      }
      if (data.hasOwnProperty('Underline')) {
        obj['Underline'] = ApiClient.convertToType(data['Underline'], 'String');
      }
      if (data.hasOwnProperty('FontFamily')) {
        obj['FontFamily'] = ApiClient.convertToType(data['FontFamily'], 'String');
      }
      if (data.hasOwnProperty('FontSize')) {
        obj['FontSize'] = ApiClient.convertToType(data['FontSize'], 'String');
      }
    }
    return obj;
  }

  /**
   * Index of the run, 0-based
   * @member {Number} RunIndex
   */
  exports.prototype['RunIndex'] = undefined;
  /**
   * The Path of the location of this object; leave blank for new tables
   * @member {String} Path
   */
  exports.prototype['Path'] = undefined;
  /**
   * Text items inside the run; this is where the actual text content is stored
   * @member {Array.<module:model/DocxText>} TextItems
   */
  exports.prototype['TextItems'] = undefined;
  /**
   * True to make the text bold, false otherwise
   * @member {Boolean} Bold
   */
  exports.prototype['Bold'] = undefined;
  /**
   * True to make the text italic, false otherwise
   * @member {Boolean} Italic
   */
  exports.prototype['Italic'] = undefined;
  /**
   * Underline mode for the text; possible values are: Words, Double, Thick, Dotted, DottedHeavy, Dash, DashedHeavy, DashLong, DashLongHeavy, DotDash, DashDotHeavy, DotDotDash, DashDotDotHeavy, Wave, WavyHeavy, WavyDouble, None
   * @member {String} Underline
   */
  exports.prototype['Underline'] = undefined;
  /**
   * Font Family name for the text, e.g. \"Arial\" or \"Times New Roman\"
   * @member {String} FontFamily
   */
  exports.prototype['FontFamily'] = undefined;
  /**
   * Font size in font points (e.g. \"24\")
   * @member {String} FontSize
   */
  exports.prototype['FontSize'] = undefined;



  return exports;
}));


