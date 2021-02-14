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
    define(['ApiClient', 'model/DocxParagraph', 'model/DocxTable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxParagraph'), require('./DocxTable'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.DocxBody = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxParagraph, root.CloudmersiveConvertApiClient.DocxTable);
  }
}(this, function(ApiClient, DocxParagraph, DocxTable) {
  'use strict';




  /**
   * The DocxBody model module.
   * @module model/DocxBody
   * @version 2.6.3
   */

  /**
   * Constructs a new <code>DocxBody</code>.
   * @alias module:model/DocxBody
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DocxBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxBody} obj Optional instance to populate.
   * @return {module:model/DocxBody} The populated <code>DocxBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('AllParagraphs')) {
        obj['AllParagraphs'] = ApiClient.convertToType(data['AllParagraphs'], [DocxParagraph]);
      }
      if (data.hasOwnProperty('AllTables')) {
        obj['AllTables'] = ApiClient.convertToType(data['AllTables'], [DocxTable]);
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
   * All paragraphs anywhere in the document; these objects are not sequentially placed but are scatted across document
   * @member {Array.<module:model/DocxParagraph>} AllParagraphs
   */
  exports.prototype['AllParagraphs'] = undefined;
  /**
   * All tables anywhere in the document; these objects are not sequentially placed but are scatted across the document
   * @member {Array.<module:model/DocxTable>} AllTables
   */
  exports.prototype['AllTables'] = undefined;



  return exports;
}));


