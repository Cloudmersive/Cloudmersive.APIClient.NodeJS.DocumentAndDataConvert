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
    define(['ApiClient', 'model/PresentationResult'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PresentationResult'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.SplitPptxPresentationResult = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.PresentationResult);
  }
}(this, function(ApiClient, PresentationResult) {
  'use strict';




  /**
   * The SplitPptxPresentationResult model module.
   * @module model/SplitPptxPresentationResult
   * @version 2.3.5
   */

  /**
   * Constructs a new <code>SplitPptxPresentationResult</code>.
   * The result of splitting a presentation into individual PowerPoint PPTX slides
   * @alias module:model/SplitPptxPresentationResult
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SplitPptxPresentationResult</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SplitPptxPresentationResult} obj Optional instance to populate.
   * @return {module:model/SplitPptxPresentationResult} The populated <code>SplitPptxPresentationResult</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ResultPresentations')) {
        obj['ResultPresentations'] = ApiClient.convertToType(data['ResultPresentations'], [PresentationResult]);
      }
      if (data.hasOwnProperty('Successful')) {
        obj['Successful'] = ApiClient.convertToType(data['Successful'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/PresentationResult>} ResultPresentations
   */
  exports.prototype['ResultPresentations'] = undefined;
  /**
   * True if the operation was successful, false otherwise
   * @member {Boolean} Successful
   */
  exports.prototype['Successful'] = undefined;



  return exports;
}));


