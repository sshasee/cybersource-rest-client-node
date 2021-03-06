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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CyberSource) {
      root.CyberSource = {};
    }
    root.CyberSource.DerPublicKey = factory(root.CyberSource.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DerPublicKey model module.
   * @module model/DerPublicKey
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>DerPublicKey</code>.
   * The public key in DER format. Used to validate the response from the Tokenize Card request. Additionally this format is useful for client side encryption in Android and iOS implementations.
   * @alias module:model/DerPublicKey
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>DerPublicKey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DerPublicKey} obj Optional instance to populate.
   * @return {module:model/DerPublicKey} The populated <code>DerPublicKey</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('format')) {
        obj['format'] = ApiClient.convertToType(data['format'], 'String');
      }
      if (data.hasOwnProperty('algorithm')) {
        obj['algorithm'] = ApiClient.convertToType(data['algorithm'], 'String');
      }
      if (data.hasOwnProperty('publicKey')) {
        obj['publicKey'] = ApiClient.convertToType(data['publicKey'], 'String');
      }
    }
    return obj;
  }

  /**
   * Specifies the format of the public key; currently X.509.
   * @member {String} format
   */
  exports.prototype['format'] = undefined;
  /**
   * Algorithm used to encrypt the public key.
   * @member {String} algorithm
   */
  exports.prototype['algorithm'] = undefined;
  /**
   * Base64 encoded public key value.
   * @member {String} publicKey
   */
  exports.prototype['publicKey'] = undefined;



  return exports;
}));


