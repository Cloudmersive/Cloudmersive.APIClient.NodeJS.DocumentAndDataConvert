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
    define(['ApiClient', 'model/DocxTemplateOperation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxTemplateOperation'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.DocxTemplateApplicationRequest = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxTemplateOperation);
  }
}(this, function(ApiClient, DocxTemplateOperation) {
  'use strict';




  /**
   * The DocxTemplateApplicationRequest model module.
   * @module model/DocxTemplateApplicationRequest
   * @version 2.4.2
   */

  /**
   * Constructs a new <code>DocxTemplateApplicationRequest</code>.
   * Word DOCX template application request
   * @alias module:model/DocxTemplateApplicationRequest
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DocxTemplateApplicationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxTemplateApplicationRequest} obj Optional instance to populate.
   * @return {module:model/DocxTemplateApplicationRequest} The populated <code>DocxTemplateApplicationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Operations')) {
        obj['Operations'] = ApiClient.convertToType(data['Operations'], [DocxTemplateOperation]);
      }
    }
    return obj;
  }

  /**
   * Operations to apply to this template
   * @member {Array.<module:model/DocxTemplateOperation>} Operations
   */
  exports.prototype['Operations'] = undefined;



  return exports;
}));


