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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloudmersiveConvertApiClient);
  }
}(this, function(expect, CloudmersiveConvertApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloudmersiveConvertApiClient.EditDocumentApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EditDocumentApi', function() {
    describe('editDocumentBeginEditing', function() {
      it('should call editDocumentBeginEditing successfully', function(done) {
        //uncomment below and update the code to test editDocumentBeginEditing
        //instance.editDocumentBeginEditing(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxAcceptAllTrackChanges', function() {
      it('should call editDocumentDocxAcceptAllTrackChanges successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxAcceptAllTrackChanges
        //instance.editDocumentDocxAcceptAllTrackChanges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxBody', function() {
      it('should call editDocumentDocxBody successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxBody
        //instance.editDocumentDocxBody(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxCreateBlankDocument', function() {
      it('should call editDocumentDocxCreateBlankDocument successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxCreateBlankDocument
        //instance.editDocumentDocxCreateBlankDocument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxDeletePages', function() {
      it('should call editDocumentDocxDeletePages successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxDeletePages
        //instance.editDocumentDocxDeletePages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxDeleteTableRow', function() {
      it('should call editDocumentDocxDeleteTableRow successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxDeleteTableRow
        //instance.editDocumentDocxDeleteTableRow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxDeleteTableRowRange', function() {
      it('should call editDocumentDocxDeleteTableRowRange successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxDeleteTableRowRange
        //instance.editDocumentDocxDeleteTableRowRange(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxDisableTrackChanges', function() {
      it('should call editDocumentDocxDisableTrackChanges successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxDisableTrackChanges
        //instance.editDocumentDocxDisableTrackChanges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxEnableTrackChanges', function() {
      it('should call editDocumentDocxEnableTrackChanges successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxEnableTrackChanges
        //instance.editDocumentDocxEnableTrackChanges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxFindParagraph', function() {
      it('should call editDocumentDocxFindParagraph successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxFindParagraph
        //instance.editDocumentDocxFindParagraph(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxGetComments', function() {
      it('should call editDocumentDocxGetComments successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxGetComments
        //instance.editDocumentDocxGetComments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxGetCommentsHierarchical', function() {
      it('should call editDocumentDocxGetCommentsHierarchical successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxGetCommentsHierarchical
        //instance.editDocumentDocxGetCommentsHierarchical(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxGetHeadersAndFooters', function() {
      it('should call editDocumentDocxGetHeadersAndFooters successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxGetHeadersAndFooters
        //instance.editDocumentDocxGetHeadersAndFooters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxGetImages', function() {
      it('should call editDocumentDocxGetImages successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxGetImages
        //instance.editDocumentDocxGetImages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxGetMacroInformation', function() {
      it('should call editDocumentDocxGetMacroInformation successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxGetMacroInformation
        //instance.editDocumentDocxGetMacroInformation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxGetMetadataProperties', function() {
      it('should call editDocumentDocxGetMetadataProperties successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxGetMetadataProperties
        //instance.editDocumentDocxGetMetadataProperties(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxGetSections', function() {
      it('should call editDocumentDocxGetSections successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxGetSections
        //instance.editDocumentDocxGetSections(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxGetStyles', function() {
      it('should call editDocumentDocxGetStyles successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxGetStyles
        //instance.editDocumentDocxGetStyles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxGetTableByIndex', function() {
      it('should call editDocumentDocxGetTableByIndex successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxGetTableByIndex
        //instance.editDocumentDocxGetTableByIndex(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxGetTableRow', function() {
      it('should call editDocumentDocxGetTableRow successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxGetTableRow
        //instance.editDocumentDocxGetTableRow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxGetTables', function() {
      it('should call editDocumentDocxGetTables successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxGetTables
        //instance.editDocumentDocxGetTables(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxInsertCommentOnParagraph', function() {
      it('should call editDocumentDocxInsertCommentOnParagraph successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxInsertCommentOnParagraph
        //instance.editDocumentDocxInsertCommentOnParagraph(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxInsertImage', function() {
      it('should call editDocumentDocxInsertImage successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxInsertImage
        //instance.editDocumentDocxInsertImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxInsertParagraph', function() {
      it('should call editDocumentDocxInsertParagraph successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxInsertParagraph
        //instance.editDocumentDocxInsertParagraph(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxInsertTable', function() {
      it('should call editDocumentDocxInsertTable successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxInsertTable
        //instance.editDocumentDocxInsertTable(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxInsertTableRow', function() {
      it('should call editDocumentDocxInsertTableRow successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxInsertTableRow
        //instance.editDocumentDocxInsertTableRow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxPages', function() {
      it('should call editDocumentDocxPages successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxPages
        //instance.editDocumentDocxPages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxRemoveAllComments', function() {
      it('should call editDocumentDocxRemoveAllComments successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxRemoveAllComments
        //instance.editDocumentDocxRemoveAllComments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxRemoveHeadersAndFooters', function() {
      it('should call editDocumentDocxRemoveHeadersAndFooters successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxRemoveHeadersAndFooters
        //instance.editDocumentDocxRemoveHeadersAndFooters(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxRemoveObject', function() {
      it('should call editDocumentDocxRemoveObject successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxRemoveObject
        //instance.editDocumentDocxRemoveObject(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxReplace', function() {
      it('should call editDocumentDocxReplace successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxReplace
        //instance.editDocumentDocxReplace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxReplaceMulti', function() {
      it('should call editDocumentDocxReplaceMulti successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxReplaceMulti
        //instance.editDocumentDocxReplaceMulti(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxReplaceParagraph', function() {
      it('should call editDocumentDocxReplaceParagraph successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxReplaceParagraph
        //instance.editDocumentDocxReplaceParagraph(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxSetCustomMetadataProperties', function() {
      it('should call editDocumentDocxSetCustomMetadataProperties successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxSetCustomMetadataProperties
        //instance.editDocumentDocxSetCustomMetadataProperties(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxSetFooter', function() {
      it('should call editDocumentDocxSetFooter successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxSetFooter
        //instance.editDocumentDocxSetFooter(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxSetFooterAddPageNumber', function() {
      it('should call editDocumentDocxSetFooterAddPageNumber successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxSetFooterAddPageNumber
        //instance.editDocumentDocxSetFooterAddPageNumber(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxSetHeader', function() {
      it('should call editDocumentDocxSetHeader successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxSetHeader
        //instance.editDocumentDocxSetHeader(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxUpdateTableCell', function() {
      it('should call editDocumentDocxUpdateTableCell successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxUpdateTableCell
        //instance.editDocumentDocxUpdateTableCell(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentDocxUpdateTableRow', function() {
      it('should call editDocumentDocxUpdateTableRow successfully', function(done) {
        //uncomment below and update the code to test editDocumentDocxUpdateTableRow
        //instance.editDocumentDocxUpdateTableRow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentFinishEditing', function() {
      it('should call editDocumentFinishEditing successfully', function(done) {
        //uncomment below and update the code to test editDocumentFinishEditing
        //instance.editDocumentFinishEditing(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentPptxDeleteSlides', function() {
      it('should call editDocumentPptxDeleteSlides successfully', function(done) {
        //uncomment below and update the code to test editDocumentPptxDeleteSlides
        //instance.editDocumentPptxDeleteSlides(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentPptxGetMacroInformation', function() {
      it('should call editDocumentPptxGetMacroInformation successfully', function(done) {
        //uncomment below and update the code to test editDocumentPptxGetMacroInformation
        //instance.editDocumentPptxGetMacroInformation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentPptxReplace', function() {
      it('should call editDocumentPptxReplace successfully', function(done) {
        //uncomment below and update the code to test editDocumentPptxReplace
        //instance.editDocumentPptxReplace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxAppendRow', function() {
      it('should call editDocumentXlsxAppendRow successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxAppendRow
        //instance.editDocumentXlsxAppendRow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxClearCellByIndex', function() {
      it('should call editDocumentXlsxClearCellByIndex successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxClearCellByIndex
        //instance.editDocumentXlsxClearCellByIndex(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxClearRow', function() {
      it('should call editDocumentXlsxClearRow successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxClearRow
        //instance.editDocumentXlsxClearRow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxCreateBlankSpreadsheet', function() {
      it('should call editDocumentXlsxCreateBlankSpreadsheet successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxCreateBlankSpreadsheet
        //instance.editDocumentXlsxCreateBlankSpreadsheet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxCreateSpreadsheetFromData', function() {
      it('should call editDocumentXlsxCreateSpreadsheetFromData successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxCreateSpreadsheetFromData
        //instance.editDocumentXlsxCreateSpreadsheetFromData(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxDeleteWorksheet', function() {
      it('should call editDocumentXlsxDeleteWorksheet successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxDeleteWorksheet
        //instance.editDocumentXlsxDeleteWorksheet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxDisableSharedWorkbook', function() {
      it('should call editDocumentXlsxDisableSharedWorkbook successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxDisableSharedWorkbook
        //instance.editDocumentXlsxDisableSharedWorkbook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxEnableSharedWorkbook', function() {
      it('should call editDocumentXlsxEnableSharedWorkbook successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxEnableSharedWorkbook
        //instance.editDocumentXlsxEnableSharedWorkbook(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxGetCellByIdentifier', function() {
      it('should call editDocumentXlsxGetCellByIdentifier successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxGetCellByIdentifier
        //instance.editDocumentXlsxGetCellByIdentifier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxGetCellByIndex', function() {
      it('should call editDocumentXlsxGetCellByIndex successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxGetCellByIndex
        //instance.editDocumentXlsxGetCellByIndex(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxGetColumns', function() {
      it('should call editDocumentXlsxGetColumns successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxGetColumns
        //instance.editDocumentXlsxGetColumns(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxGetImages', function() {
      it('should call editDocumentXlsxGetImages successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxGetImages
        //instance.editDocumentXlsxGetImages(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxGetMacroInformation', function() {
      it('should call editDocumentXlsxGetMacroInformation successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxGetMacroInformation
        //instance.editDocumentXlsxGetMacroInformation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxGetRowsAndCells', function() {
      it('should call editDocumentXlsxGetRowsAndCells successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxGetRowsAndCells
        //instance.editDocumentXlsxGetRowsAndCells(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxGetSpecificRow', function() {
      it('should call editDocumentXlsxGetSpecificRow successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxGetSpecificRow
        //instance.editDocumentXlsxGetSpecificRow(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxGetStyles', function() {
      it('should call editDocumentXlsxGetStyles successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxGetStyles
        //instance.editDocumentXlsxGetStyles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxGetWorksheets', function() {
      it('should call editDocumentXlsxGetWorksheets successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxGetWorksheets
        //instance.editDocumentXlsxGetWorksheets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxInsertWorksheet', function() {
      it('should call editDocumentXlsxInsertWorksheet successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxInsertWorksheet
        //instance.editDocumentXlsxInsertWorksheet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxRenameWorksheet', function() {
      it('should call editDocumentXlsxRenameWorksheet successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxRenameWorksheet
        //instance.editDocumentXlsxRenameWorksheet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxSetCellByIdentifier', function() {
      it('should call editDocumentXlsxSetCellByIdentifier successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxSetCellByIdentifier
        //instance.editDocumentXlsxSetCellByIdentifier(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('editDocumentXlsxSetCellByIndex', function() {
      it('should call editDocumentXlsxSetCellByIndex successfully', function(done) {
        //uncomment below and update the code to test editDocumentXlsxSetCellByIndex
        //instance.editDocumentXlsxSetCellByIndex(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
