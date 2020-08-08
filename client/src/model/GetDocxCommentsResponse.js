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
    define(['ApiClient', 'model/DocxComment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxComment'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.GetDocxCommentsResponse = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxComment);
  }
}(this, function(ApiClient, DocxComment) {
  'use strict';




  /**
   * The GetDocxCommentsResponse model module.
   * @module model/GetDocxCommentsResponse
   * @version 2.5.4
   */

  /**
   * Constructs a new <code>GetDocxCommentsResponse</code>.
   * Result of getting comments from a Word Document DOCX
   * @alias module:model/GetDocxCommentsResponse
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>GetDocxCommentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GetDocxCommentsResponse} obj Optional instance to populate.
   * @return {module:model/GetDocxCommentsResponse} The populated <code>GetDocxCommentsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
      if (data.hasOwnProperty('Comments')) {
        obj['Comments'] = ApiClient.convertToType(data['Comments'], [DocxComment]);
      }
      if (data.hasOwnProperty('CommentCount')) {
        obj['CommentCount'] = ApiClient.convertToType(data['CommentCount'], 'Number');
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
   * Comments in the document
   * @member {Array.<module:model/DocxComment>} Comments
   */
  exports.prototype['Comments'] = undefined;
  /**
   * The number of comments in the document
   * @member {Number} CommentCount
   */
  exports.prototype['CommentCount'] = undefined;



  return exports;
}));


