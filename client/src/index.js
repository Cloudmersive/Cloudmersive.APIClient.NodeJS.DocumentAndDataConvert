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

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AlternateFileFormatCandidate', 'model/AutodetectDocumentValidationResult', 'model/AutodetectGetInfoResult', 'model/AutodetectToPngResult', 'model/ConvertedPngPage', 'model/CreateBlankDocxRequest', 'model/CreateBlankDocxResponse', 'model/CreateBlankSpreadsheetRequest', 'model/CreateBlankSpreadsheetResponse', 'model/DeleteDocxTableRowRequest', 'model/DeleteDocxTableRowResponse', 'model/DocumentValidationError', 'model/DocumentValidationResult', 'model/DocxBody', 'model/DocxCellStyle', 'model/DocxFooter', 'model/DocxHeader', 'model/DocxImage', 'model/DocxInsertImageRequest', 'model/DocxInsertImageResponse', 'model/DocxPage', 'model/DocxParagraph', 'model/DocxRemoveObjectRequest', 'model/DocxRemoveObjectResponse', 'model/DocxRun', 'model/DocxSection', 'model/DocxSetFooterAddPageNumberRequest', 'model/DocxSetFooterRequest', 'model/DocxSetFooterResponse', 'model/DocxSetHeaderRequest', 'model/DocxSetHeaderResponse', 'model/DocxStyle', 'model/DocxTable', 'model/DocxTableCell', 'model/DocxTableRow', 'model/DocxTemplateApplicationRequest', 'model/DocxTemplateOperation', 'model/DocxText', 'model/ExifValue', 'model/FinishEditingRequest', 'model/GetDocxBodyRequest', 'model/GetDocxBodyResponse', 'model/GetDocxHeadersAndFootersRequest', 'model/GetDocxHeadersAndFootersResponse', 'model/GetDocxImagesRequest', 'model/GetDocxImagesResponse', 'model/GetDocxPagesRequest', 'model/GetDocxPagesResponse', 'model/GetDocxSectionsRequest', 'model/GetDocxSectionsResponse', 'model/GetDocxStylesRequest', 'model/GetDocxStylesResponse', 'model/GetDocxTableByIndexRequest', 'model/GetDocxTableByIndexResponse', 'model/GetDocxTableRowRequest', 'model/GetDocxTableRowResponse', 'model/GetDocxTablesRequest', 'model/GetDocxTablesResponse', 'model/GetImageInfoResult', 'model/GetXlsxCellRequest', 'model/GetXlsxCellResponse', 'model/GetXlsxColumnsRequest', 'model/GetXlsxColumnsResponse', 'model/GetXlsxImagesRequest', 'model/GetXlsxImagesResponse', 'model/GetXlsxRowsAndCellsRequest', 'model/GetXlsxRowsAndCellsResponse', 'model/GetXlsxStylesRequest', 'model/GetXlsxStylesResponse', 'model/GetXlsxWorksheetsRequest', 'model/GetXlsxWorksheetsResponse', 'model/HtmlMdResult', 'model/HtmlTemplateApplicationRequest', 'model/HtmlTemplateApplicationResponse', 'model/HtmlTemplateOperation', 'model/HtmlToOfficeRequest', 'model/HtmlToPdfRequest', 'model/HtmlToPngRequest', 'model/HtmlToTextRequest', 'model/HtmlToTextResponse', 'model/InsertDocxInsertParagraphRequest', 'model/InsertDocxInsertParagraphResponse', 'model/InsertDocxTableRowRequest', 'model/InsertDocxTableRowResponse', 'model/InsertDocxTablesRequest', 'model/InsertDocxTablesResponse', 'model/InsertXlsxWorksheetRequest', 'model/InsertXlsxWorksheetResponse', 'model/MultipageImageFormatConversionResult', 'model/PageConversionResult', 'model/PdfDocument', 'model/PdfFormField', 'model/PdfFormFields', 'model/PdfMetadata', 'model/PdfPageText', 'model/PdfTextByPageResult', 'model/PdfToPngResult', 'model/RemoveDocxHeadersAndFootersRequest', 'model/RemoveDocxHeadersAndFootersResponse', 'model/RemoveDocxPagesRequest', 'model/ReplaceStringRequest', 'model/ScreenshotRequest', 'model/SetFormFieldValue', 'model/SetPdfFormFieldsRequest', 'model/SetPdfMetadataRequest', 'model/SplitPdfResult', 'model/SplitXlsxWorksheetResult', 'model/TextConversionResult', 'model/UpdateDocxTableCellRequest', 'model/UpdateDocxTableCellResponse', 'model/UpdateDocxTableRowRequest', 'model/UpdateDocxTableRowResponse', 'model/UrlToTextRequest', 'model/UrlToTextResponse', 'model/ViewerResponse', 'model/WorksheetResult', 'model/XlsxImage', 'model/XlsxSpreadsheetCell', 'model/XlsxSpreadsheetColumn', 'model/XlsxSpreadsheetRow', 'model/XlsxWorksheet', 'api/CompareDocumentApi', 'api/ConvertDataApi', 'api/ConvertDocumentApi', 'api/ConvertImageApi', 'api/ConvertTemplateApi', 'api/ConvertWebApi', 'api/EditDocumentApi', 'api/EditPdfApi', 'api/MergeDocumentApi', 'api/SplitDocumentApi', 'api/ValidateDocumentApi', 'api/ViewerToolsApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/AlternateFileFormatCandidate'), require('./model/AutodetectDocumentValidationResult'), require('./model/AutodetectGetInfoResult'), require('./model/AutodetectToPngResult'), require('./model/ConvertedPngPage'), require('./model/CreateBlankDocxRequest'), require('./model/CreateBlankDocxResponse'), require('./model/CreateBlankSpreadsheetRequest'), require('./model/CreateBlankSpreadsheetResponse'), require('./model/DeleteDocxTableRowRequest'), require('./model/DeleteDocxTableRowResponse'), require('./model/DocumentValidationError'), require('./model/DocumentValidationResult'), require('./model/DocxBody'), require('./model/DocxCellStyle'), require('./model/DocxFooter'), require('./model/DocxHeader'), require('./model/DocxImage'), require('./model/DocxInsertImageRequest'), require('./model/DocxInsertImageResponse'), require('./model/DocxPage'), require('./model/DocxParagraph'), require('./model/DocxRemoveObjectRequest'), require('./model/DocxRemoveObjectResponse'), require('./model/DocxRun'), require('./model/DocxSection'), require('./model/DocxSetFooterAddPageNumberRequest'), require('./model/DocxSetFooterRequest'), require('./model/DocxSetFooterResponse'), require('./model/DocxSetHeaderRequest'), require('./model/DocxSetHeaderResponse'), require('./model/DocxStyle'), require('./model/DocxTable'), require('./model/DocxTableCell'), require('./model/DocxTableRow'), require('./model/DocxTemplateApplicationRequest'), require('./model/DocxTemplateOperation'), require('./model/DocxText'), require('./model/ExifValue'), require('./model/FinishEditingRequest'), require('./model/GetDocxBodyRequest'), require('./model/GetDocxBodyResponse'), require('./model/GetDocxHeadersAndFootersRequest'), require('./model/GetDocxHeadersAndFootersResponse'), require('./model/GetDocxImagesRequest'), require('./model/GetDocxImagesResponse'), require('./model/GetDocxPagesRequest'), require('./model/GetDocxPagesResponse'), require('./model/GetDocxSectionsRequest'), require('./model/GetDocxSectionsResponse'), require('./model/GetDocxStylesRequest'), require('./model/GetDocxStylesResponse'), require('./model/GetDocxTableByIndexRequest'), require('./model/GetDocxTableByIndexResponse'), require('./model/GetDocxTableRowRequest'), require('./model/GetDocxTableRowResponse'), require('./model/GetDocxTablesRequest'), require('./model/GetDocxTablesResponse'), require('./model/GetImageInfoResult'), require('./model/GetXlsxCellRequest'), require('./model/GetXlsxCellResponse'), require('./model/GetXlsxColumnsRequest'), require('./model/GetXlsxColumnsResponse'), require('./model/GetXlsxImagesRequest'), require('./model/GetXlsxImagesResponse'), require('./model/GetXlsxRowsAndCellsRequest'), require('./model/GetXlsxRowsAndCellsResponse'), require('./model/GetXlsxStylesRequest'), require('./model/GetXlsxStylesResponse'), require('./model/GetXlsxWorksheetsRequest'), require('./model/GetXlsxWorksheetsResponse'), require('./model/HtmlMdResult'), require('./model/HtmlTemplateApplicationRequest'), require('./model/HtmlTemplateApplicationResponse'), require('./model/HtmlTemplateOperation'), require('./model/HtmlToOfficeRequest'), require('./model/HtmlToPdfRequest'), require('./model/HtmlToPngRequest'), require('./model/HtmlToTextRequest'), require('./model/HtmlToTextResponse'), require('./model/InsertDocxInsertParagraphRequest'), require('./model/InsertDocxInsertParagraphResponse'), require('./model/InsertDocxTableRowRequest'), require('./model/InsertDocxTableRowResponse'), require('./model/InsertDocxTablesRequest'), require('./model/InsertDocxTablesResponse'), require('./model/InsertXlsxWorksheetRequest'), require('./model/InsertXlsxWorksheetResponse'), require('./model/MultipageImageFormatConversionResult'), require('./model/PageConversionResult'), require('./model/PdfDocument'), require('./model/PdfFormField'), require('./model/PdfFormFields'), require('./model/PdfMetadata'), require('./model/PdfPageText'), require('./model/PdfTextByPageResult'), require('./model/PdfToPngResult'), require('./model/RemoveDocxHeadersAndFootersRequest'), require('./model/RemoveDocxHeadersAndFootersResponse'), require('./model/RemoveDocxPagesRequest'), require('./model/ReplaceStringRequest'), require('./model/ScreenshotRequest'), require('./model/SetFormFieldValue'), require('./model/SetPdfFormFieldsRequest'), require('./model/SetPdfMetadataRequest'), require('./model/SplitPdfResult'), require('./model/SplitXlsxWorksheetResult'), require('./model/TextConversionResult'), require('./model/UpdateDocxTableCellRequest'), require('./model/UpdateDocxTableCellResponse'), require('./model/UpdateDocxTableRowRequest'), require('./model/UpdateDocxTableRowResponse'), require('./model/UrlToTextRequest'), require('./model/UrlToTextResponse'), require('./model/ViewerResponse'), require('./model/WorksheetResult'), require('./model/XlsxImage'), require('./model/XlsxSpreadsheetCell'), require('./model/XlsxSpreadsheetColumn'), require('./model/XlsxSpreadsheetRow'), require('./model/XlsxWorksheet'), require('./api/CompareDocumentApi'), require('./api/ConvertDataApi'), require('./api/ConvertDocumentApi'), require('./api/ConvertImageApi'), require('./api/ConvertTemplateApi'), require('./api/ConvertWebApi'), require('./api/EditDocumentApi'), require('./api/EditPdfApi'), require('./api/MergeDocumentApi'), require('./api/SplitDocumentApi'), require('./api/ValidateDocumentApi'), require('./api/ViewerToolsApi'));
  }
}(function(ApiClient, AlternateFileFormatCandidate, AutodetectDocumentValidationResult, AutodetectGetInfoResult, AutodetectToPngResult, ConvertedPngPage, CreateBlankDocxRequest, CreateBlankDocxResponse, CreateBlankSpreadsheetRequest, CreateBlankSpreadsheetResponse, DeleteDocxTableRowRequest, DeleteDocxTableRowResponse, DocumentValidationError, DocumentValidationResult, DocxBody, DocxCellStyle, DocxFooter, DocxHeader, DocxImage, DocxInsertImageRequest, DocxInsertImageResponse, DocxPage, DocxParagraph, DocxRemoveObjectRequest, DocxRemoveObjectResponse, DocxRun, DocxSection, DocxSetFooterAddPageNumberRequest, DocxSetFooterRequest, DocxSetFooterResponse, DocxSetHeaderRequest, DocxSetHeaderResponse, DocxStyle, DocxTable, DocxTableCell, DocxTableRow, DocxTemplateApplicationRequest, DocxTemplateOperation, DocxText, ExifValue, FinishEditingRequest, GetDocxBodyRequest, GetDocxBodyResponse, GetDocxHeadersAndFootersRequest, GetDocxHeadersAndFootersResponse, GetDocxImagesRequest, GetDocxImagesResponse, GetDocxPagesRequest, GetDocxPagesResponse, GetDocxSectionsRequest, GetDocxSectionsResponse, GetDocxStylesRequest, GetDocxStylesResponse, GetDocxTableByIndexRequest, GetDocxTableByIndexResponse, GetDocxTableRowRequest, GetDocxTableRowResponse, GetDocxTablesRequest, GetDocxTablesResponse, GetImageInfoResult, GetXlsxCellRequest, GetXlsxCellResponse, GetXlsxColumnsRequest, GetXlsxColumnsResponse, GetXlsxImagesRequest, GetXlsxImagesResponse, GetXlsxRowsAndCellsRequest, GetXlsxRowsAndCellsResponse, GetXlsxStylesRequest, GetXlsxStylesResponse, GetXlsxWorksheetsRequest, GetXlsxWorksheetsResponse, HtmlMdResult, HtmlTemplateApplicationRequest, HtmlTemplateApplicationResponse, HtmlTemplateOperation, HtmlToOfficeRequest, HtmlToPdfRequest, HtmlToPngRequest, HtmlToTextRequest, HtmlToTextResponse, InsertDocxInsertParagraphRequest, InsertDocxInsertParagraphResponse, InsertDocxTableRowRequest, InsertDocxTableRowResponse, InsertDocxTablesRequest, InsertDocxTablesResponse, InsertXlsxWorksheetRequest, InsertXlsxWorksheetResponse, MultipageImageFormatConversionResult, PageConversionResult, PdfDocument, PdfFormField, PdfFormFields, PdfMetadata, PdfPageText, PdfTextByPageResult, PdfToPngResult, RemoveDocxHeadersAndFootersRequest, RemoveDocxHeadersAndFootersResponse, RemoveDocxPagesRequest, ReplaceStringRequest, ScreenshotRequest, SetFormFieldValue, SetPdfFormFieldsRequest, SetPdfMetadataRequest, SplitPdfResult, SplitXlsxWorksheetResult, TextConversionResult, UpdateDocxTableCellRequest, UpdateDocxTableCellResponse, UpdateDocxTableRowRequest, UpdateDocxTableRowResponse, UrlToTextRequest, UrlToTextResponse, ViewerResponse, WorksheetResult, XlsxImage, XlsxSpreadsheetCell, XlsxSpreadsheetColumn, XlsxSpreadsheetRow, XlsxWorksheet, CompareDocumentApi, ConvertDataApi, ConvertDocumentApi, ConvertImageApi, ConvertTemplateApi, ConvertWebApi, EditDocumentApi, EditPdfApi, MergeDocumentApi, SplitDocumentApi, ValidateDocumentApi, ViewerToolsApi) {
  'use strict';

  /**
   * Convert_API_lets_you_effortlessly_convert_file_formats_and_types_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var CloudmersiveConvertApiClient = require('index'); // See note below*.
   * var xxxSvc = new CloudmersiveConvertApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new CloudmersiveConvertApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new CloudmersiveConvertApiClient.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new CloudmersiveConvertApiClient.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 2.2.5
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The AlternateFileFormatCandidate model constructor.
     * @property {module:model/AlternateFileFormatCandidate}
     */
    AlternateFileFormatCandidate: AlternateFileFormatCandidate,
    /**
     * The AutodetectDocumentValidationResult model constructor.
     * @property {module:model/AutodetectDocumentValidationResult}
     */
    AutodetectDocumentValidationResult: AutodetectDocumentValidationResult,
    /**
     * The AutodetectGetInfoResult model constructor.
     * @property {module:model/AutodetectGetInfoResult}
     */
    AutodetectGetInfoResult: AutodetectGetInfoResult,
    /**
     * The AutodetectToPngResult model constructor.
     * @property {module:model/AutodetectToPngResult}
     */
    AutodetectToPngResult: AutodetectToPngResult,
    /**
     * The ConvertedPngPage model constructor.
     * @property {module:model/ConvertedPngPage}
     */
    ConvertedPngPage: ConvertedPngPage,
    /**
     * The CreateBlankDocxRequest model constructor.
     * @property {module:model/CreateBlankDocxRequest}
     */
    CreateBlankDocxRequest: CreateBlankDocxRequest,
    /**
     * The CreateBlankDocxResponse model constructor.
     * @property {module:model/CreateBlankDocxResponse}
     */
    CreateBlankDocxResponse: CreateBlankDocxResponse,
    /**
     * The CreateBlankSpreadsheetRequest model constructor.
     * @property {module:model/CreateBlankSpreadsheetRequest}
     */
    CreateBlankSpreadsheetRequest: CreateBlankSpreadsheetRequest,
    /**
     * The CreateBlankSpreadsheetResponse model constructor.
     * @property {module:model/CreateBlankSpreadsheetResponse}
     */
    CreateBlankSpreadsheetResponse: CreateBlankSpreadsheetResponse,
    /**
     * The DeleteDocxTableRowRequest model constructor.
     * @property {module:model/DeleteDocxTableRowRequest}
     */
    DeleteDocxTableRowRequest: DeleteDocxTableRowRequest,
    /**
     * The DeleteDocxTableRowResponse model constructor.
     * @property {module:model/DeleteDocxTableRowResponse}
     */
    DeleteDocxTableRowResponse: DeleteDocxTableRowResponse,
    /**
     * The DocumentValidationError model constructor.
     * @property {module:model/DocumentValidationError}
     */
    DocumentValidationError: DocumentValidationError,
    /**
     * The DocumentValidationResult model constructor.
     * @property {module:model/DocumentValidationResult}
     */
    DocumentValidationResult: DocumentValidationResult,
    /**
     * The DocxBody model constructor.
     * @property {module:model/DocxBody}
     */
    DocxBody: DocxBody,
    /**
     * The DocxCellStyle model constructor.
     * @property {module:model/DocxCellStyle}
     */
    DocxCellStyle: DocxCellStyle,
    /**
     * The DocxFooter model constructor.
     * @property {module:model/DocxFooter}
     */
    DocxFooter: DocxFooter,
    /**
     * The DocxHeader model constructor.
     * @property {module:model/DocxHeader}
     */
    DocxHeader: DocxHeader,
    /**
     * The DocxImage model constructor.
     * @property {module:model/DocxImage}
     */
    DocxImage: DocxImage,
    /**
     * The DocxInsertImageRequest model constructor.
     * @property {module:model/DocxInsertImageRequest}
     */
    DocxInsertImageRequest: DocxInsertImageRequest,
    /**
     * The DocxInsertImageResponse model constructor.
     * @property {module:model/DocxInsertImageResponse}
     */
    DocxInsertImageResponse: DocxInsertImageResponse,
    /**
     * The DocxPage model constructor.
     * @property {module:model/DocxPage}
     */
    DocxPage: DocxPage,
    /**
     * The DocxParagraph model constructor.
     * @property {module:model/DocxParagraph}
     */
    DocxParagraph: DocxParagraph,
    /**
     * The DocxRemoveObjectRequest model constructor.
     * @property {module:model/DocxRemoveObjectRequest}
     */
    DocxRemoveObjectRequest: DocxRemoveObjectRequest,
    /**
     * The DocxRemoveObjectResponse model constructor.
     * @property {module:model/DocxRemoveObjectResponse}
     */
    DocxRemoveObjectResponse: DocxRemoveObjectResponse,
    /**
     * The DocxRun model constructor.
     * @property {module:model/DocxRun}
     */
    DocxRun: DocxRun,
    /**
     * The DocxSection model constructor.
     * @property {module:model/DocxSection}
     */
    DocxSection: DocxSection,
    /**
     * The DocxSetFooterAddPageNumberRequest model constructor.
     * @property {module:model/DocxSetFooterAddPageNumberRequest}
     */
    DocxSetFooterAddPageNumberRequest: DocxSetFooterAddPageNumberRequest,
    /**
     * The DocxSetFooterRequest model constructor.
     * @property {module:model/DocxSetFooterRequest}
     */
    DocxSetFooterRequest: DocxSetFooterRequest,
    /**
     * The DocxSetFooterResponse model constructor.
     * @property {module:model/DocxSetFooterResponse}
     */
    DocxSetFooterResponse: DocxSetFooterResponse,
    /**
     * The DocxSetHeaderRequest model constructor.
     * @property {module:model/DocxSetHeaderRequest}
     */
    DocxSetHeaderRequest: DocxSetHeaderRequest,
    /**
     * The DocxSetHeaderResponse model constructor.
     * @property {module:model/DocxSetHeaderResponse}
     */
    DocxSetHeaderResponse: DocxSetHeaderResponse,
    /**
     * The DocxStyle model constructor.
     * @property {module:model/DocxStyle}
     */
    DocxStyle: DocxStyle,
    /**
     * The DocxTable model constructor.
     * @property {module:model/DocxTable}
     */
    DocxTable: DocxTable,
    /**
     * The DocxTableCell model constructor.
     * @property {module:model/DocxTableCell}
     */
    DocxTableCell: DocxTableCell,
    /**
     * The DocxTableRow model constructor.
     * @property {module:model/DocxTableRow}
     */
    DocxTableRow: DocxTableRow,
    /**
     * The DocxTemplateApplicationRequest model constructor.
     * @property {module:model/DocxTemplateApplicationRequest}
     */
    DocxTemplateApplicationRequest: DocxTemplateApplicationRequest,
    /**
     * The DocxTemplateOperation model constructor.
     * @property {module:model/DocxTemplateOperation}
     */
    DocxTemplateOperation: DocxTemplateOperation,
    /**
     * The DocxText model constructor.
     * @property {module:model/DocxText}
     */
    DocxText: DocxText,
    /**
     * The ExifValue model constructor.
     * @property {module:model/ExifValue}
     */
    ExifValue: ExifValue,
    /**
     * The FinishEditingRequest model constructor.
     * @property {module:model/FinishEditingRequest}
     */
    FinishEditingRequest: FinishEditingRequest,
    /**
     * The GetDocxBodyRequest model constructor.
     * @property {module:model/GetDocxBodyRequest}
     */
    GetDocxBodyRequest: GetDocxBodyRequest,
    /**
     * The GetDocxBodyResponse model constructor.
     * @property {module:model/GetDocxBodyResponse}
     */
    GetDocxBodyResponse: GetDocxBodyResponse,
    /**
     * The GetDocxHeadersAndFootersRequest model constructor.
     * @property {module:model/GetDocxHeadersAndFootersRequest}
     */
    GetDocxHeadersAndFootersRequest: GetDocxHeadersAndFootersRequest,
    /**
     * The GetDocxHeadersAndFootersResponse model constructor.
     * @property {module:model/GetDocxHeadersAndFootersResponse}
     */
    GetDocxHeadersAndFootersResponse: GetDocxHeadersAndFootersResponse,
    /**
     * The GetDocxImagesRequest model constructor.
     * @property {module:model/GetDocxImagesRequest}
     */
    GetDocxImagesRequest: GetDocxImagesRequest,
    /**
     * The GetDocxImagesResponse model constructor.
     * @property {module:model/GetDocxImagesResponse}
     */
    GetDocxImagesResponse: GetDocxImagesResponse,
    /**
     * The GetDocxPagesRequest model constructor.
     * @property {module:model/GetDocxPagesRequest}
     */
    GetDocxPagesRequest: GetDocxPagesRequest,
    /**
     * The GetDocxPagesResponse model constructor.
     * @property {module:model/GetDocxPagesResponse}
     */
    GetDocxPagesResponse: GetDocxPagesResponse,
    /**
     * The GetDocxSectionsRequest model constructor.
     * @property {module:model/GetDocxSectionsRequest}
     */
    GetDocxSectionsRequest: GetDocxSectionsRequest,
    /**
     * The GetDocxSectionsResponse model constructor.
     * @property {module:model/GetDocxSectionsResponse}
     */
    GetDocxSectionsResponse: GetDocxSectionsResponse,
    /**
     * The GetDocxStylesRequest model constructor.
     * @property {module:model/GetDocxStylesRequest}
     */
    GetDocxStylesRequest: GetDocxStylesRequest,
    /**
     * The GetDocxStylesResponse model constructor.
     * @property {module:model/GetDocxStylesResponse}
     */
    GetDocxStylesResponse: GetDocxStylesResponse,
    /**
     * The GetDocxTableByIndexRequest model constructor.
     * @property {module:model/GetDocxTableByIndexRequest}
     */
    GetDocxTableByIndexRequest: GetDocxTableByIndexRequest,
    /**
     * The GetDocxTableByIndexResponse model constructor.
     * @property {module:model/GetDocxTableByIndexResponse}
     */
    GetDocxTableByIndexResponse: GetDocxTableByIndexResponse,
    /**
     * The GetDocxTableRowRequest model constructor.
     * @property {module:model/GetDocxTableRowRequest}
     */
    GetDocxTableRowRequest: GetDocxTableRowRequest,
    /**
     * The GetDocxTableRowResponse model constructor.
     * @property {module:model/GetDocxTableRowResponse}
     */
    GetDocxTableRowResponse: GetDocxTableRowResponse,
    /**
     * The GetDocxTablesRequest model constructor.
     * @property {module:model/GetDocxTablesRequest}
     */
    GetDocxTablesRequest: GetDocxTablesRequest,
    /**
     * The GetDocxTablesResponse model constructor.
     * @property {module:model/GetDocxTablesResponse}
     */
    GetDocxTablesResponse: GetDocxTablesResponse,
    /**
     * The GetImageInfoResult model constructor.
     * @property {module:model/GetImageInfoResult}
     */
    GetImageInfoResult: GetImageInfoResult,
    /**
     * The GetXlsxCellRequest model constructor.
     * @property {module:model/GetXlsxCellRequest}
     */
    GetXlsxCellRequest: GetXlsxCellRequest,
    /**
     * The GetXlsxCellResponse model constructor.
     * @property {module:model/GetXlsxCellResponse}
     */
    GetXlsxCellResponse: GetXlsxCellResponse,
    /**
     * The GetXlsxColumnsRequest model constructor.
     * @property {module:model/GetXlsxColumnsRequest}
     */
    GetXlsxColumnsRequest: GetXlsxColumnsRequest,
    /**
     * The GetXlsxColumnsResponse model constructor.
     * @property {module:model/GetXlsxColumnsResponse}
     */
    GetXlsxColumnsResponse: GetXlsxColumnsResponse,
    /**
     * The GetXlsxImagesRequest model constructor.
     * @property {module:model/GetXlsxImagesRequest}
     */
    GetXlsxImagesRequest: GetXlsxImagesRequest,
    /**
     * The GetXlsxImagesResponse model constructor.
     * @property {module:model/GetXlsxImagesResponse}
     */
    GetXlsxImagesResponse: GetXlsxImagesResponse,
    /**
     * The GetXlsxRowsAndCellsRequest model constructor.
     * @property {module:model/GetXlsxRowsAndCellsRequest}
     */
    GetXlsxRowsAndCellsRequest: GetXlsxRowsAndCellsRequest,
    /**
     * The GetXlsxRowsAndCellsResponse model constructor.
     * @property {module:model/GetXlsxRowsAndCellsResponse}
     */
    GetXlsxRowsAndCellsResponse: GetXlsxRowsAndCellsResponse,
    /**
     * The GetXlsxStylesRequest model constructor.
     * @property {module:model/GetXlsxStylesRequest}
     */
    GetXlsxStylesRequest: GetXlsxStylesRequest,
    /**
     * The GetXlsxStylesResponse model constructor.
     * @property {module:model/GetXlsxStylesResponse}
     */
    GetXlsxStylesResponse: GetXlsxStylesResponse,
    /**
     * The GetXlsxWorksheetsRequest model constructor.
     * @property {module:model/GetXlsxWorksheetsRequest}
     */
    GetXlsxWorksheetsRequest: GetXlsxWorksheetsRequest,
    /**
     * The GetXlsxWorksheetsResponse model constructor.
     * @property {module:model/GetXlsxWorksheetsResponse}
     */
    GetXlsxWorksheetsResponse: GetXlsxWorksheetsResponse,
    /**
     * The HtmlMdResult model constructor.
     * @property {module:model/HtmlMdResult}
     */
    HtmlMdResult: HtmlMdResult,
    /**
     * The HtmlTemplateApplicationRequest model constructor.
     * @property {module:model/HtmlTemplateApplicationRequest}
     */
    HtmlTemplateApplicationRequest: HtmlTemplateApplicationRequest,
    /**
     * The HtmlTemplateApplicationResponse model constructor.
     * @property {module:model/HtmlTemplateApplicationResponse}
     */
    HtmlTemplateApplicationResponse: HtmlTemplateApplicationResponse,
    /**
     * The HtmlTemplateOperation model constructor.
     * @property {module:model/HtmlTemplateOperation}
     */
    HtmlTemplateOperation: HtmlTemplateOperation,
    /**
     * The HtmlToOfficeRequest model constructor.
     * @property {module:model/HtmlToOfficeRequest}
     */
    HtmlToOfficeRequest: HtmlToOfficeRequest,
    /**
     * The HtmlToPdfRequest model constructor.
     * @property {module:model/HtmlToPdfRequest}
     */
    HtmlToPdfRequest: HtmlToPdfRequest,
    /**
     * The HtmlToPngRequest model constructor.
     * @property {module:model/HtmlToPngRequest}
     */
    HtmlToPngRequest: HtmlToPngRequest,
    /**
     * The HtmlToTextRequest model constructor.
     * @property {module:model/HtmlToTextRequest}
     */
    HtmlToTextRequest: HtmlToTextRequest,
    /**
     * The HtmlToTextResponse model constructor.
     * @property {module:model/HtmlToTextResponse}
     */
    HtmlToTextResponse: HtmlToTextResponse,
    /**
     * The InsertDocxInsertParagraphRequest model constructor.
     * @property {module:model/InsertDocxInsertParagraphRequest}
     */
    InsertDocxInsertParagraphRequest: InsertDocxInsertParagraphRequest,
    /**
     * The InsertDocxInsertParagraphResponse model constructor.
     * @property {module:model/InsertDocxInsertParagraphResponse}
     */
    InsertDocxInsertParagraphResponse: InsertDocxInsertParagraphResponse,
    /**
     * The InsertDocxTableRowRequest model constructor.
     * @property {module:model/InsertDocxTableRowRequest}
     */
    InsertDocxTableRowRequest: InsertDocxTableRowRequest,
    /**
     * The InsertDocxTableRowResponse model constructor.
     * @property {module:model/InsertDocxTableRowResponse}
     */
    InsertDocxTableRowResponse: InsertDocxTableRowResponse,
    /**
     * The InsertDocxTablesRequest model constructor.
     * @property {module:model/InsertDocxTablesRequest}
     */
    InsertDocxTablesRequest: InsertDocxTablesRequest,
    /**
     * The InsertDocxTablesResponse model constructor.
     * @property {module:model/InsertDocxTablesResponse}
     */
    InsertDocxTablesResponse: InsertDocxTablesResponse,
    /**
     * The InsertXlsxWorksheetRequest model constructor.
     * @property {module:model/InsertXlsxWorksheetRequest}
     */
    InsertXlsxWorksheetRequest: InsertXlsxWorksheetRequest,
    /**
     * The InsertXlsxWorksheetResponse model constructor.
     * @property {module:model/InsertXlsxWorksheetResponse}
     */
    InsertXlsxWorksheetResponse: InsertXlsxWorksheetResponse,
    /**
     * The MultipageImageFormatConversionResult model constructor.
     * @property {module:model/MultipageImageFormatConversionResult}
     */
    MultipageImageFormatConversionResult: MultipageImageFormatConversionResult,
    /**
     * The PageConversionResult model constructor.
     * @property {module:model/PageConversionResult}
     */
    PageConversionResult: PageConversionResult,
    /**
     * The PdfDocument model constructor.
     * @property {module:model/PdfDocument}
     */
    PdfDocument: PdfDocument,
    /**
     * The PdfFormField model constructor.
     * @property {module:model/PdfFormField}
     */
    PdfFormField: PdfFormField,
    /**
     * The PdfFormFields model constructor.
     * @property {module:model/PdfFormFields}
     */
    PdfFormFields: PdfFormFields,
    /**
     * The PdfMetadata model constructor.
     * @property {module:model/PdfMetadata}
     */
    PdfMetadata: PdfMetadata,
    /**
     * The PdfPageText model constructor.
     * @property {module:model/PdfPageText}
     */
    PdfPageText: PdfPageText,
    /**
     * The PdfTextByPageResult model constructor.
     * @property {module:model/PdfTextByPageResult}
     */
    PdfTextByPageResult: PdfTextByPageResult,
    /**
     * The PdfToPngResult model constructor.
     * @property {module:model/PdfToPngResult}
     */
    PdfToPngResult: PdfToPngResult,
    /**
     * The RemoveDocxHeadersAndFootersRequest model constructor.
     * @property {module:model/RemoveDocxHeadersAndFootersRequest}
     */
    RemoveDocxHeadersAndFootersRequest: RemoveDocxHeadersAndFootersRequest,
    /**
     * The RemoveDocxHeadersAndFootersResponse model constructor.
     * @property {module:model/RemoveDocxHeadersAndFootersResponse}
     */
    RemoveDocxHeadersAndFootersResponse: RemoveDocxHeadersAndFootersResponse,
    /**
     * The RemoveDocxPagesRequest model constructor.
     * @property {module:model/RemoveDocxPagesRequest}
     */
    RemoveDocxPagesRequest: RemoveDocxPagesRequest,
    /**
     * The ReplaceStringRequest model constructor.
     * @property {module:model/ReplaceStringRequest}
     */
    ReplaceStringRequest: ReplaceStringRequest,
    /**
     * The ScreenshotRequest model constructor.
     * @property {module:model/ScreenshotRequest}
     */
    ScreenshotRequest: ScreenshotRequest,
    /**
     * The SetFormFieldValue model constructor.
     * @property {module:model/SetFormFieldValue}
     */
    SetFormFieldValue: SetFormFieldValue,
    /**
     * The SetPdfFormFieldsRequest model constructor.
     * @property {module:model/SetPdfFormFieldsRequest}
     */
    SetPdfFormFieldsRequest: SetPdfFormFieldsRequest,
    /**
     * The SetPdfMetadataRequest model constructor.
     * @property {module:model/SetPdfMetadataRequest}
     */
    SetPdfMetadataRequest: SetPdfMetadataRequest,
    /**
     * The SplitPdfResult model constructor.
     * @property {module:model/SplitPdfResult}
     */
    SplitPdfResult: SplitPdfResult,
    /**
     * The SplitXlsxWorksheetResult model constructor.
     * @property {module:model/SplitXlsxWorksheetResult}
     */
    SplitXlsxWorksheetResult: SplitXlsxWorksheetResult,
    /**
     * The TextConversionResult model constructor.
     * @property {module:model/TextConversionResult}
     */
    TextConversionResult: TextConversionResult,
    /**
     * The UpdateDocxTableCellRequest model constructor.
     * @property {module:model/UpdateDocxTableCellRequest}
     */
    UpdateDocxTableCellRequest: UpdateDocxTableCellRequest,
    /**
     * The UpdateDocxTableCellResponse model constructor.
     * @property {module:model/UpdateDocxTableCellResponse}
     */
    UpdateDocxTableCellResponse: UpdateDocxTableCellResponse,
    /**
     * The UpdateDocxTableRowRequest model constructor.
     * @property {module:model/UpdateDocxTableRowRequest}
     */
    UpdateDocxTableRowRequest: UpdateDocxTableRowRequest,
    /**
     * The UpdateDocxTableRowResponse model constructor.
     * @property {module:model/UpdateDocxTableRowResponse}
     */
    UpdateDocxTableRowResponse: UpdateDocxTableRowResponse,
    /**
     * The UrlToTextRequest model constructor.
     * @property {module:model/UrlToTextRequest}
     */
    UrlToTextRequest: UrlToTextRequest,
    /**
     * The UrlToTextResponse model constructor.
     * @property {module:model/UrlToTextResponse}
     */
    UrlToTextResponse: UrlToTextResponse,
    /**
     * The ViewerResponse model constructor.
     * @property {module:model/ViewerResponse}
     */
    ViewerResponse: ViewerResponse,
    /**
     * The WorksheetResult model constructor.
     * @property {module:model/WorksheetResult}
     */
    WorksheetResult: WorksheetResult,
    /**
     * The XlsxImage model constructor.
     * @property {module:model/XlsxImage}
     */
    XlsxImage: XlsxImage,
    /**
     * The XlsxSpreadsheetCell model constructor.
     * @property {module:model/XlsxSpreadsheetCell}
     */
    XlsxSpreadsheetCell: XlsxSpreadsheetCell,
    /**
     * The XlsxSpreadsheetColumn model constructor.
     * @property {module:model/XlsxSpreadsheetColumn}
     */
    XlsxSpreadsheetColumn: XlsxSpreadsheetColumn,
    /**
     * The XlsxSpreadsheetRow model constructor.
     * @property {module:model/XlsxSpreadsheetRow}
     */
    XlsxSpreadsheetRow: XlsxSpreadsheetRow,
    /**
     * The XlsxWorksheet model constructor.
     * @property {module:model/XlsxWorksheet}
     */
    XlsxWorksheet: XlsxWorksheet,
    /**
     * The CompareDocumentApi service constructor.
     * @property {module:api/CompareDocumentApi}
     */
    CompareDocumentApi: CompareDocumentApi,
    /**
     * The ConvertDataApi service constructor.
     * @property {module:api/ConvertDataApi}
     */
    ConvertDataApi: ConvertDataApi,
    /**
     * The ConvertDocumentApi service constructor.
     * @property {module:api/ConvertDocumentApi}
     */
    ConvertDocumentApi: ConvertDocumentApi,
    /**
     * The ConvertImageApi service constructor.
     * @property {module:api/ConvertImageApi}
     */
    ConvertImageApi: ConvertImageApi,
    /**
     * The ConvertTemplateApi service constructor.
     * @property {module:api/ConvertTemplateApi}
     */
    ConvertTemplateApi: ConvertTemplateApi,
    /**
     * The ConvertWebApi service constructor.
     * @property {module:api/ConvertWebApi}
     */
    ConvertWebApi: ConvertWebApi,
    /**
     * The EditDocumentApi service constructor.
     * @property {module:api/EditDocumentApi}
     */
    EditDocumentApi: EditDocumentApi,
    /**
     * The EditPdfApi service constructor.
     * @property {module:api/EditPdfApi}
     */
    EditPdfApi: EditPdfApi,
    /**
     * The MergeDocumentApi service constructor.
     * @property {module:api/MergeDocumentApi}
     */
    MergeDocumentApi: MergeDocumentApi,
    /**
     * The SplitDocumentApi service constructor.
     * @property {module:api/SplitDocumentApi}
     */
    SplitDocumentApi: SplitDocumentApi,
    /**
     * The ValidateDocumentApi service constructor.
     * @property {module:api/ValidateDocumentApi}
     */
    ValidateDocumentApi: ValidateDocumentApi,
    /**
     * The ViewerToolsApi service constructor.
     * @property {module:api/ViewerToolsApi}
     */
    ViewerToolsApi: ViewerToolsApi
  };

  return exports;
}));
