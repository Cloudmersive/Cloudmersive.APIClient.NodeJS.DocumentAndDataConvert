/**
 * convertapi
 * Convert API lets you effortlessly convert file formats and types.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    root.CloudmersiveConvertApiClient.DocxText = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DocxText model module.
   * @module model/DocxText
   * @version 1.3.1
   */

  /**
   * Constructs a new <code>DocxText</code>.
   * Unit of text content in a Word Document (DOCX) file
   * @alias module:model/DocxText
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DocxText</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxText} obj Optional instance to populate.
   * @return {module:model/DocxText} The populated <code>DocxText</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TextIndex')) {
        obj['TextIndex'] = ApiClient.convertToType(data['TextIndex'], 'Number');
      }
      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('TextContent')) {
        obj['TextContent'] = ApiClient.convertToType(data['TextContent'], 'String');
      }
    }
    return obj;
  }

  /**
   * Index of the text content in the run; 0-based
   * @member {Number} TextIndex
   */
  exports.prototype['TextIndex'] = undefined;
  /**
   * The Path of the location of this object; leave blank for new tables
   * @member {String} Path
   */
  exports.prototype['Path'] = undefined;
  /**
   * Text string containing the text content of this text content item
   * @member {String} TextContent
   */
  exports.prototype['TextContent'] = undefined;



  return exports;
}));


