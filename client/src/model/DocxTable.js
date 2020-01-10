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
    define(['ApiClient', 'model/DocxTableRow'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DocxTableRow'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConvertApiClient) {
      root.CloudmersiveConvertApiClient = {};
    }
    root.CloudmersiveConvertApiClient.DocxTable = factory(root.CloudmersiveConvertApiClient.ApiClient, root.CloudmersiveConvertApiClient.DocxTableRow);
  }
}(this, function(ApiClient, DocxTableRow) {
  'use strict';




  /**
   * The DocxTable model module.
   * @module model/DocxTable
   * @version 2.3.5
   */

  /**
   * Constructs a new <code>DocxTable</code>.
   * A table in a Word Document (DOCX) file
   * @alias module:model/DocxTable
   * @class
   */
  var exports = function() {
    var _this = this;








































  };

  /**
   * Constructs a <code>DocxTable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DocxTable} obj Optional instance to populate.
   * @return {module:model/DocxTable} The populated <code>DocxTable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TableID')) {
        obj['TableID'] = ApiClient.convertToType(data['TableID'], 'String');
      }
      if (data.hasOwnProperty('Path')) {
        obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
      }
      if (data.hasOwnProperty('Width')) {
        obj['Width'] = ApiClient.convertToType(data['Width'], 'String');
      }
      if (data.hasOwnProperty('WidthType')) {
        obj['WidthType'] = ApiClient.convertToType(data['WidthType'], 'String');
      }
      if (data.hasOwnProperty('TableRows')) {
        obj['TableRows'] = ApiClient.convertToType(data['TableRows'], [DocxTableRow]);
      }
      if (data.hasOwnProperty('TopBorderType')) {
        obj['TopBorderType'] = ApiClient.convertToType(data['TopBorderType'], 'String');
      }
      if (data.hasOwnProperty('TopBorderSize')) {
        obj['TopBorderSize'] = ApiClient.convertToType(data['TopBorderSize'], 'Number');
      }
      if (data.hasOwnProperty('TopBorderSpace')) {
        obj['TopBorderSpace'] = ApiClient.convertToType(data['TopBorderSpace'], 'Number');
      }
      if (data.hasOwnProperty('TopBorderColor')) {
        obj['TopBorderColor'] = ApiClient.convertToType(data['TopBorderColor'], 'String');
      }
      if (data.hasOwnProperty('BottomBorderType')) {
        obj['BottomBorderType'] = ApiClient.convertToType(data['BottomBorderType'], 'String');
      }
      if (data.hasOwnProperty('BottomBorderSize')) {
        obj['BottomBorderSize'] = ApiClient.convertToType(data['BottomBorderSize'], 'Number');
      }
      if (data.hasOwnProperty('BottomBorderSpace')) {
        obj['BottomBorderSpace'] = ApiClient.convertToType(data['BottomBorderSpace'], 'Number');
      }
      if (data.hasOwnProperty('BottomBorderColor')) {
        obj['BottomBorderColor'] = ApiClient.convertToType(data['BottomBorderColor'], 'String');
      }
      if (data.hasOwnProperty('LeftBorderType')) {
        obj['LeftBorderType'] = ApiClient.convertToType(data['LeftBorderType'], 'String');
      }
      if (data.hasOwnProperty('LeftBorderSize')) {
        obj['LeftBorderSize'] = ApiClient.convertToType(data['LeftBorderSize'], 'Number');
      }
      if (data.hasOwnProperty('LeftBorderSpace')) {
        obj['LeftBorderSpace'] = ApiClient.convertToType(data['LeftBorderSpace'], 'Number');
      }
      if (data.hasOwnProperty('LeftBorderColor')) {
        obj['LeftBorderColor'] = ApiClient.convertToType(data['LeftBorderColor'], 'String');
      }
      if (data.hasOwnProperty('RightBorderType')) {
        obj['RightBorderType'] = ApiClient.convertToType(data['RightBorderType'], 'String');
      }
      if (data.hasOwnProperty('RightBorderSize')) {
        obj['RightBorderSize'] = ApiClient.convertToType(data['RightBorderSize'], 'Number');
      }
      if (data.hasOwnProperty('RightBorderSpace')) {
        obj['RightBorderSpace'] = ApiClient.convertToType(data['RightBorderSpace'], 'Number');
      }
      if (data.hasOwnProperty('RightBorderColor')) {
        obj['RightBorderColor'] = ApiClient.convertToType(data['RightBorderColor'], 'String');
      }
      if (data.hasOwnProperty('CellHorizontalBorderType')) {
        obj['CellHorizontalBorderType'] = ApiClient.convertToType(data['CellHorizontalBorderType'], 'String');
      }
      if (data.hasOwnProperty('CellHorizontalBorderSize')) {
        obj['CellHorizontalBorderSize'] = ApiClient.convertToType(data['CellHorizontalBorderSize'], 'Number');
      }
      if (data.hasOwnProperty('CellHorizontalBorderSpace')) {
        obj['CellHorizontalBorderSpace'] = ApiClient.convertToType(data['CellHorizontalBorderSpace'], 'Number');
      }
      if (data.hasOwnProperty('CellHorizontalBorderColor')) {
        obj['CellHorizontalBorderColor'] = ApiClient.convertToType(data['CellHorizontalBorderColor'], 'String');
      }
      if (data.hasOwnProperty('CellVerticalBorderType')) {
        obj['CellVerticalBorderType'] = ApiClient.convertToType(data['CellVerticalBorderType'], 'String');
      }
      if (data.hasOwnProperty('CellVerticalBorderSize')) {
        obj['CellVerticalBorderSize'] = ApiClient.convertToType(data['CellVerticalBorderSize'], 'Number');
      }
      if (data.hasOwnProperty('CellVerticalBorderSpace')) {
        obj['CellVerticalBorderSpace'] = ApiClient.convertToType(data['CellVerticalBorderSpace'], 'Number');
      }
      if (data.hasOwnProperty('CellVerticalBorderColor')) {
        obj['CellVerticalBorderColor'] = ApiClient.convertToType(data['CellVerticalBorderColor'], 'String');
      }
      if (data.hasOwnProperty('StartBorderType')) {
        obj['StartBorderType'] = ApiClient.convertToType(data['StartBorderType'], 'String');
      }
      if (data.hasOwnProperty('StartBorderSize')) {
        obj['StartBorderSize'] = ApiClient.convertToType(data['StartBorderSize'], 'Number');
      }
      if (data.hasOwnProperty('StartBorderSpace')) {
        obj['StartBorderSpace'] = ApiClient.convertToType(data['StartBorderSpace'], 'Number');
      }
      if (data.hasOwnProperty('StartBorderColor')) {
        obj['StartBorderColor'] = ApiClient.convertToType(data['StartBorderColor'], 'String');
      }
      if (data.hasOwnProperty('EndBorderType')) {
        obj['EndBorderType'] = ApiClient.convertToType(data['EndBorderType'], 'String');
      }
      if (data.hasOwnProperty('EndBorderSize')) {
        obj['EndBorderSize'] = ApiClient.convertToType(data['EndBorderSize'], 'Number');
      }
      if (data.hasOwnProperty('EndBorderSpace')) {
        obj['EndBorderSpace'] = ApiClient.convertToType(data['EndBorderSpace'], 'Number');
      }
      if (data.hasOwnProperty('EndBorderColor')) {
        obj['EndBorderColor'] = ApiClient.convertToType(data['EndBorderColor'], 'String');
      }
      if (data.hasOwnProperty('TableIndentationMode')) {
        obj['TableIndentationMode'] = ApiClient.convertToType(data['TableIndentationMode'], 'String');
      }
      if (data.hasOwnProperty('TableIndentationWidth')) {
        obj['TableIndentationWidth'] = ApiClient.convertToType(data['TableIndentationWidth'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The ID of the table; leave blank for new tables
   * @member {String} TableID
   */
  exports.prototype['TableID'] = undefined;
  /**
   * The Path of the location of this table object; leave blank for new tables
   * @member {String} Path
   */
  exports.prototype['Path'] = undefined;
  /**
   * The Width of the table, or 0 if not specified
   * @member {String} Width
   */
  exports.prototype['Width'] = undefined;
  /**
   * The Width configuration type of the table
   * @member {String} WidthType
   */
  exports.prototype['WidthType'] = undefined;
  /**
   * Rows in the table; this is where the contents is located
   * @member {Array.<module:model/DocxTableRow>} TableRows
   */
  exports.prototype['TableRows'] = undefined;
  /**
   * Type for the top border - can be a Single, DashDotStroked, Dashed, DashSmallGap, DotDash, DotDotDash, Dotted, Double, DoubleWave, Inset, Nil, None, Outset, Thick, ThickThinLargeGap, ThickThinMediumGap, ThickThinSmallGap, ThinThickLargeGap, ThinThickMediumGap, ThinThickSmallGap, ThinThickThinLargeGap, ThinThickThinMediumGap, ThinThickThinSmallGap, ThreeDEmboss, ThreeDEngrave, Triple, Wave
   * @member {String} TopBorderType
   */
  exports.prototype['TopBorderType'] = undefined;
  /**
   * Width of the border in points (1/72nd of an inch)
   * @member {Number} TopBorderSize
   */
  exports.prototype['TopBorderSize'] = undefined;
  /**
   * Spacing around the border in points (1/72nd of an inch)
   * @member {Number} TopBorderSpace
   */
  exports.prototype['TopBorderSpace'] = undefined;
  /**
   * HTML-style color hex value (do not include a #)
   * @member {String} TopBorderColor
   */
  exports.prototype['TopBorderColor'] = undefined;
  /**
   * Type for the bottom border - can be a Single, DashDotStroked, Dashed, DashSmallGap, DotDash, DotDotDash, Dotted, Double, DoubleWave, Inset, Nil, None, Outset, Thick, ThickThinLargeGap, ThickThinMediumGap, ThickThinSmallGap, ThinThickLargeGap, ThinThickMediumGap, ThinThickSmallGap, ThinThickThinLargeGap, ThinThickThinMediumGap, ThinThickThinSmallGap, ThreeDEmboss, ThreeDEngrave, Triple, Wave
   * @member {String} BottomBorderType
   */
  exports.prototype['BottomBorderType'] = undefined;
  /**
   * Width of the border in points (1/72nd of an inch)
   * @member {Number} BottomBorderSize
   */
  exports.prototype['BottomBorderSize'] = undefined;
  /**
   * Spacing around the border in points (1/72nd of an inch)
   * @member {Number} BottomBorderSpace
   */
  exports.prototype['BottomBorderSpace'] = undefined;
  /**
   * HTML-style color hex value (do not include a #)
   * @member {String} BottomBorderColor
   */
  exports.prototype['BottomBorderColor'] = undefined;
  /**
   * Type for the left border - can be a Single, DashDotStroked, Dashed, DashSmallGap, DotDash, DotDotDash, Dotted, Double, DoubleWave, Inset, Nil, None, Outset, Thick, ThickThinLargeGap, ThickThinMediumGap, ThickThinSmallGap, ThinThickLargeGap, ThinThickMediumGap, ThinThickSmallGap, ThinThickThinLargeGap, ThinThickThinMediumGap, ThinThickThinSmallGap, ThreeDEmboss, ThreeDEngrave, Triple, Wave
   * @member {String} LeftBorderType
   */
  exports.prototype['LeftBorderType'] = undefined;
  /**
   * Width of the border in points (1/72nd of an inch)
   * @member {Number} LeftBorderSize
   */
  exports.prototype['LeftBorderSize'] = undefined;
  /**
   * Spacing around the border in points (1/72nd of an inch)
   * @member {Number} LeftBorderSpace
   */
  exports.prototype['LeftBorderSpace'] = undefined;
  /**
   * HTML-style color hex value (do not include a #)
   * @member {String} LeftBorderColor
   */
  exports.prototype['LeftBorderColor'] = undefined;
  /**
   * Type for the right border - can be a Single, DashDotStroked, Dashed, DashSmallGap, DotDash, DotDotDash, Dotted, Double, DoubleWave, Inset, Nil, None, Outset, Thick, ThickThinLargeGap, ThickThinMediumGap, ThickThinSmallGap, ThinThickLargeGap, ThinThickMediumGap, ThinThickSmallGap, ThinThickThinLargeGap, ThinThickThinMediumGap, ThinThickThinSmallGap, ThreeDEmboss, ThreeDEngrave, Triple, Wave
   * @member {String} RightBorderType
   */
  exports.prototype['RightBorderType'] = undefined;
  /**
   * Width of the border in points (1/72nd of an inch)
   * @member {Number} RightBorderSize
   */
  exports.prototype['RightBorderSize'] = undefined;
  /**
   * Spacing around the border in points (1/72nd of an inch)
   * @member {Number} RightBorderSpace
   */
  exports.prototype['RightBorderSpace'] = undefined;
  /**
   * HTML-style color hex value (do not include a #)
   * @member {String} RightBorderColor
   */
  exports.prototype['RightBorderColor'] = undefined;
  /**
   * Type for the cell horizontal border - can be a Single, DashDotStroked, Dashed, DashSmallGap, DotDash, DotDotDash, Dotted, Double, DoubleWave, Inset, Nil, None, Outset, Thick, ThickThinLargeGap, ThickThinMediumGap, ThickThinSmallGap, ThinThickLargeGap, ThinThickMediumGap, ThinThickSmallGap, ThinThickThinLargeGap, ThinThickThinMediumGap, ThinThickThinSmallGap, ThreeDEmboss, ThreeDEngrave, Triple, Wave
   * @member {String} CellHorizontalBorderType
   */
  exports.prototype['CellHorizontalBorderType'] = undefined;
  /**
   * Width of the border in points (1/72nd of an inch)
   * @member {Number} CellHorizontalBorderSize
   */
  exports.prototype['CellHorizontalBorderSize'] = undefined;
  /**
   * Spacing around the border in points (1/72nd of an inch)
   * @member {Number} CellHorizontalBorderSpace
   */
  exports.prototype['CellHorizontalBorderSpace'] = undefined;
  /**
   * HTML-style color hex value (do not include a #)
   * @member {String} CellHorizontalBorderColor
   */
  exports.prototype['CellHorizontalBorderColor'] = undefined;
  /**
   * Type for the cell vertical border - can be a Single, DashDotStroked, Dashed, DashSmallGap, DotDash, DotDotDash, Dotted, Double, DoubleWave, Inset, Nil, None, Outset, Thick, ThickThinLargeGap, ThickThinMediumGap, ThickThinSmallGap, ThinThickLargeGap, ThinThickMediumGap, ThinThickSmallGap, ThinThickThinLargeGap, ThinThickThinMediumGap, ThinThickThinSmallGap, ThreeDEmboss, ThreeDEngrave, Triple, Wave
   * @member {String} CellVerticalBorderType
   */
  exports.prototype['CellVerticalBorderType'] = undefined;
  /**
   * Width of the border in points (1/72nd of an inch)
   * @member {Number} CellVerticalBorderSize
   */
  exports.prototype['CellVerticalBorderSize'] = undefined;
  /**
   * Spacing around the border in points (1/72nd of an inch)
   * @member {Number} CellVerticalBorderSpace
   */
  exports.prototype['CellVerticalBorderSpace'] = undefined;
  /**
   * HTML-style color hex value (do not include a #)
   * @member {String} CellVerticalBorderColor
   */
  exports.prototype['CellVerticalBorderColor'] = undefined;
  /**
   * Type for the start border - can be a Single, DashDotStroked, Dashed, DashSmallGap, DotDash, DotDotDash, Dotted, Double, DoubleWave, Inset, Nil, None, Outset, Thick, ThickThinLargeGap, ThickThinMediumGap, ThickThinSmallGap, ThinThickLargeGap, ThinThickMediumGap, ThinThickSmallGap, ThinThickThinLargeGap, ThinThickThinMediumGap, ThinThickThinSmallGap, ThreeDEmboss, ThreeDEngrave, Triple, Wave
   * @member {String} StartBorderType
   */
  exports.prototype['StartBorderType'] = undefined;
  /**
   * Width of the border in points (1/72nd of an inch)
   * @member {Number} StartBorderSize
   */
  exports.prototype['StartBorderSize'] = undefined;
  /**
   * Spacing around the border in points (1/72nd of an inch)
   * @member {Number} StartBorderSpace
   */
  exports.prototype['StartBorderSpace'] = undefined;
  /**
   * HTML-style color hex value (do not include a #)
   * @member {String} StartBorderColor
   */
  exports.prototype['StartBorderColor'] = undefined;
  /**
   * Type for the end border - can be a Single, DashDotStroked, Dashed, DashSmallGap, DotDash, DotDotDash, Dotted, Double, DoubleWave, Inset, Nil, None, Outset, Thick, ThickThinLargeGap, ThickThinMediumGap, ThickThinSmallGap, ThinThickLargeGap, ThinThickMediumGap, ThinThickSmallGap, ThinThickThinLargeGap, ThinThickThinMediumGap, ThinThickThinSmallGap, ThreeDEmboss, ThreeDEngrave, Triple, Wave
   * @member {String} EndBorderType
   */
  exports.prototype['EndBorderType'] = undefined;
  /**
   * Width of the border in points (1/72nd of an inch)
   * @member {Number} EndBorderSize
   */
  exports.prototype['EndBorderSize'] = undefined;
  /**
   * Spacing around the border in points (1/72nd of an inch)
   * @member {Number} EndBorderSpace
   */
  exports.prototype['EndBorderSpace'] = undefined;
  /**
   * HTML-style color hex value (do not include a #)
   * @member {String} EndBorderColor
   */
  exports.prototype['EndBorderColor'] = undefined;
  /**
   * Table indentation type
   * @member {String} TableIndentationMode
   */
  exports.prototype['TableIndentationMode'] = undefined;
  /**
   * Table indentation width
   * @member {Number} TableIndentationWidth
   */
  exports.prototype['TableIndentationWidth'] = undefined;



  return exports;
}));


