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
    define(['ApiClient', 'model/HtmlTemplateOperation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HtmlTemplateOperation'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.HtmlTemplateApplicationRequest = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.HtmlTemplateOperation);
  }
}(this, function(ApiClient, HtmlTemplateOperation) {
  'use strict';




  /**
   * The HtmlTemplateApplicationRequest model module.
   * @module model/HtmlTemplateApplicationRequest
   * @version 1.2.2
   */

  /**
   * Constructs a new <code>HtmlTemplateApplicationRequest</code>.
   * HTML template application request
   * @alias module:model/HtmlTemplateApplicationRequest
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>HtmlTemplateApplicationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HtmlTemplateApplicationRequest} obj Optional instance to populate.
   * @return {module:model/HtmlTemplateApplicationRequest} The populated <code>HtmlTemplateApplicationRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('HtmlTemplate')) {
        obj['HtmlTemplate'] = ApiClient.convertToType(data['HtmlTemplate'], 'String');
      }
      if (data.hasOwnProperty('HtmlTemplateUrl')) {
        obj['HtmlTemplateUrl'] = ApiClient.convertToType(data['HtmlTemplateUrl'], 'String');
      }
      if (data.hasOwnProperty('Operations')) {
        obj['Operations'] = ApiClient.convertToType(data['Operations'], [HtmlTemplateOperation]);
      }
    }
    return obj;
  }

  /**
   * @member {String} HtmlTemplate
   */
  exports.prototype['HtmlTemplate'] = undefined;
  /**
   * @member {String} HtmlTemplateUrl
   */
  exports.prototype['HtmlTemplateUrl'] = undefined;
  /**
   * @member {Array.<module:model/HtmlTemplateOperation>} Operations
   */
  exports.prototype['Operations'] = undefined;



  return exports;
}));


