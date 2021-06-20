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
    define(['ApiClient', 'model/DocxRun'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxRun'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.DocxParagraph = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxRun);
  }
}(this, function(ApiClient, DocxRun) {
  'use strict';




  /**
   * The DocxParagraph model module.
   * @module model/DocxParagraph
   * @version 2.6.6
   */

  /**
   * Constructs a new <code>DocxParagraph</code>.
   * A paragraph in a Word Document (DOCX) file; there is where text, content and formatting are stored - similar to the paragraph tag in HTML
   * @alias module:model/DocxParagraph
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>DocxParagraph</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxParagraph} obj Optional instance to populate.
   * @return {module:model/DocxParagraph} The populated <code>DocxParagraph</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ParagraphIndex')) {
        obj['ParagraphIndex'] = ApiClient.convertToType(data['ParagraphIndex'], 'Number');
      }
      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('ContentRuns')) {
        obj['ContentRuns'] = ApiClient.convertToType(data['ContentRuns'], [DocxRun]);
      }
      if (data.hasOwnProperty('StyleID')) {
        obj['StyleID'] = ApiClient.convertToType(data['StyleID'], 'String');
      }
    }
    return obj;
  }

  /**
   * The index of the paragraph; 0-based
   * @member {Number} ParagraphIndex
   */
  exports.prototype['ParagraphIndex'] = undefined;
  /**
   * The Path of the location of this Paragraph object; leave blank during creation
   * @member {String} Path
   */
  exports.prototype['Path'] = undefined;
  /**
   * The content runs in the paragraph - this is where text is stored; similar to a span in HTML
   * @member {Array.<module:model/DocxRun>} ContentRuns
   */
  exports.prototype['ContentRuns'] = undefined;
  /**
   * Style ID of the style applied to the paragraph; null if no style is applied
   * @member {String} StyleID
   */
  exports.prototype['StyleID'] = undefined;



  return exports;
}));


