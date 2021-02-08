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
    define(['ApiClient', 'model/DocxPage'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxPage'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.GetDocxPagesResponse = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxPage);
  }
}(this, function(ApiClient, DocxPage) {
  'use strict';




  /**
   * The GetDocxPagesResponse model module.
   * @module model/GetDocxPagesResponse
   * @version 2.6.2
   */

  /**
   * Constructs a new <code>GetDocxPagesResponse</code>.
   * Result of getting pages from a Word Document DOCX
   * @alias module:model/GetDocxPagesResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>GetDocxPagesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDocxPagesResponse} obj Optional instance to populate.
   * @return {module:model/GetDocxPagesResponse} The populated <code>GetDocxPagesResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Pages')) {
        obj['Pages'] = ApiClient.convertToType(data['Pages'], [DocxPage]);
      }
      if (data.hasOwnProperty('PageCount')) {
        obj['PageCount'] = ApiClient.convertToType(data['PageCount'], 'Number');
      }
    }
    return obj;
  }

  /**
   * True if successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;
  /**
   * Pages in the document
   * @member {Array.<module:model/DocxPage>} Pages
   */
  exports.prototype['Pages'] = undefined;
  /**
   * Count of pages
   * @member {Number} PageCount
   */
  exports.prototype['PageCount'] = undefined;



  return exports;
}));


