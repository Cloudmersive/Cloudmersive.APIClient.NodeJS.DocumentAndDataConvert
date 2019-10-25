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
    define(['ApiClient', 'model/DocxParagraph', 'model/DocxSection'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxParagraph'), require('./DocxSection'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.DocxHeader = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxParagraph, root.CloudmersiveConvertApiClient.DocxSection);
  }
}(this, function(ApiClient, DocxParagraph, DocxSection) {
  'use strict';




  /**
   * The DocxHeader model module.
   * @module model/DocxHeader
   * @version 2.1.2
   */

  /**
   * Constructs a new <code>DocxHeader</code>.
   * Header of a Word Document (DOCX)
   * @alias module:model/DocxHeader
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DocxHeader</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxHeader} obj Optional instance to populate.
   * @return {module:model/DocxHeader} The populated <code>DocxHeader</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('Paragraphs')) {
        obj['Paragraphs'] = ApiClient.convertToType(data['Paragraphs'], [DocxParagraph]);
      }
      if (data.hasOwnProperty('SectionsWithHeader')) {
        obj['SectionsWithHeader'] = ApiClient.convertToType(data['SectionsWithHeader'], [DocxSection]);
      }
    }
    return obj;
  }

  /**
   * The Path of the location of this object; leave blank for new tables
   * @member {String} Path
   */
  exports.prototype['Path'] = undefined;
  /**
   * Paragraphs in this header
   * @member {Array.<module:model/DocxParagraph>} Paragraphs
   */
  exports.prototype['Paragraphs'] = undefined;
  /**
   * Sections that the header is applied to
   * @member {Array.<module:model/DocxSection>} SectionsWithHeader
   */
  exports.prototype['SectionsWithHeader'] = undefined;



  return exports;
}));


