/**
 * CyberSource Flex API
 * Simple PAN tokenization service
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CapturePaymentRequest', 'model/InlineResponse2004', 'model/InlineResponse2012', 'model/InlineResponse4002', 'model/InlineResponse502'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CapturePaymentRequest'), require('../model/InlineResponse2004'), require('../model/InlineResponse2012'), require('../model/InlineResponse4002'), require('../model/InlineResponse502'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.CaptureApi = factory(root.CyberSource.ApiClient, root.CyberSource.CapturePaymentRequest, root.CyberSource.InlineResponse2004, root.CyberSource.InlineResponse2012, root.CyberSource.InlineResponse4002, root.CyberSource.InlineResponse502);
  }
}(this, function(ApiClient, CapturePaymentRequest, InlineResponse2004, InlineResponse2012, InlineResponse4002, InlineResponse502) {
  'use strict';

  /**
   * Capture service.
   * @module api/CaptureApi
   * @version 0.0.1
   */

  /**
   * Constructs a new CaptureApi. 
   * @alias module:api/CaptureApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the capturePayment operation.
     * @callback module:api/CaptureApi~capturePaymentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2012} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Capture a Payment
     * Include the payment ID in the POST request to capture the payment amount.
     * @param {module:model/CapturePaymentRequest} capturePaymentRequest 
     * @param {String} id The payment ID returned from a previous payment request. This ID links the capture to the payment. 
     * @param {module:api/CaptureApi~capturePaymentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2012}
     */
    this.capturePayment = function(capturePaymentRequest, id, callback) {
      var postBody = capturePaymentRequest;

      // verify the required parameter 'capturePaymentRequest' is set
      if (capturePaymentRequest === undefined || capturePaymentRequest === null) {
        throw new Error("Missing the required parameter 'capturePaymentRequest' when calling capturePayment");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling capturePayment");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse2012;

      return this.apiClient.callApi(
        '/pts/v2/payments/{id}/captures', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCapture operation.
     * @callback module:api/CaptureApi~getCaptureCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2004} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a Capture
     * Include the capture ID in the GET request to retrieve the capture details. 
     * @param {String} id The capture ID returned from a previous capture request. 
     * @param {module:api/CaptureApi~getCaptureCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2004}
     */
    this.getCapture = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getCapture");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/hal+json;charset=utf-8'];
      var returnType = InlineResponse2004;

      return this.apiClient.callApi(
        '/pts/v2/captures/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));