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
    root.CloudmersiveConvertApiClient.PdfPageText = factory(root.CloudmersiveConvertApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PdfPageText model module.
   * @module model/PdfPageText
   * @version 2.5.2
   */

  /**
   * Constructs a new <code>PdfPageText</code>.
   * Text of a single page of a PDF
   * @alias module:model/PdfPageText
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PdfPageText</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PdfPageText} obj Optional instance to populate.
   * @return {module:model/PdfPageText} The populated <code>PdfPageText</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('PageNumber')) {
        obj['PageNumber'] = ApiClient.convertToType(data['PageNumber'], 'Number');
      }
      if (data.hasOwnProperty('PageText')) {
        obj['PageText'] = ApiClient.convertToType(data['PageText'], 'String');
      }
    }
    return obj;
  }

  /**
   * Page number of the page (1-based)
   * @member {Number} PageNumber
   */
  exports.prototype['PageNumber'] = undefined;
  /**
   * Text of the page
   * @member {String} PageText
   */
  exports.prototype['PageText'] = undefined;



  return exports;
}));


