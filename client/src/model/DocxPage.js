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
    define(['ApiClient', 'model/DocxParagraph'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxParagraph'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.DocxPage = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxParagraph);
  }
}(this, function(ApiClient, DocxParagraph) {
  'use strict';




  /**
   * The DocxPage model module.
   * @module model/DocxPage
   * @version 2.2.3
   */

  /**
   * Constructs a new <code>DocxPage</code>.
   * @alias module:model/DocxPage
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DocxPage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxPage} obj Optional instance to populate.
   * @return {module:model/DocxPage} The populated <code>DocxPage</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('PageNumber')) {
        obj['PageNumber'] = ApiClient.convertToType(data['PageNumber'], 'Number');
      }
      if (data.hasOwnProperty('Paragraphs')) {
        obj['Paragraphs'] = ApiClient.convertToType(data['Paragraphs'], [DocxParagraph]);
      }
    }
    return obj;
  }

  /**
   * Page number of this page, 1-based
   * @member {Number} PageNumber
   */
  exports.prototype['PageNumber'] = undefined;
  /**
   * All paragraphs anywhere in the document; these objects are not sequentially placed but are scatted across document
   * @member {Array.<module:model/DocxParagraph>} Paragraphs
   */
  exports.prototype['Paragraphs'] = undefined;



  return exports;
}));


