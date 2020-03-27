// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as gax from './index';
import {Descriptors, ClientOptions} from './index';
import {GrpcClient} from './grpc';
import {GrpcClient as FallbackGrpcClient} from './fallback';
import * as path from 'path';
import * as gapicConfig from './iam_policy_service_client_config.json';
import {ProjectIdCallback} from 'google-auth-library';
import * as protosTypes from '../protos/iam_service';
const version = require('../../package.json').version;
/**
 *  Google Cloud IAM Client.
 *  This is manually written for providing methods [setIamPolicy, getIamPolicy, testIamPerssion] to the KMS client.
 *  We don't support it now in micro-generators.
 *  New feature request link: [https://github.com/googleapis/gapic-generator-typescript/issues/315]
 */
export class IamClient {
  private _descriptors: Descriptors = {page: {}, stream: {}, longrunning: {}};
  private _innerApiCalls: {[name: string]: Function} = {};
  private _terminated = false;
  auth: gax.GoogleAuth;

  constructor(opts?: ClientOptions) {
    // Ensure that options include the service address and port.
    const staticMembers = this.constructor as typeof IamClient;
    const servicePath =
      opts && opts.servicePath
        ? opts.servicePath
        : opts && opts.apiEndpoint
        ? opts.apiEndpoint
        : staticMembers.servicePath;
    const port = opts && opts.port ? opts.port : staticMembers.port;

    if (!opts) {
      opts = {servicePath, port};
    }
    opts.servicePath = opts.servicePath || servicePath;
    opts.port = opts.port || port;
    opts.clientConfig = opts.clientConfig || {};

    const isBrowser = typeof window !== 'undefined';
    if (isBrowser) {
      opts.fallback = true;
    }
    const gaxModule = !isBrowser && opts.fallback ? gax.fallback : gax;

    // Create a `gaxGrpc` object, with any grpc-specific options
    // sent to the client.
    opts.scopes = (this.constructor as typeof IamClient).scopes;
    const gaxGrpc = new gaxModule.GrpcClient(opts);

    // Save the auth object to the client, for use by other methods.
    this.auth = gaxGrpc.auth as gax.GoogleAuth;
    const clientHeader = [`gax/${gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    const nodejsProtoPath = path.join(
      __dirname,
      '..',
      '..',
      'protos',
      'iam_service.json'
    );

    const protos = gaxGrpc.loadProto(
      opts.fallback ? require('../../protos/iam_service.json') : nodejsProtoPath
    );
    // Put together the default options sent with requests.
    const defaults = gaxGrpc.constructSettings(
      'google.iam.v1.IAMPolicy',
      gapicConfig as gax.ClientConfig,
      opts!.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );
    // Put together the "service stub" for
    // google.iam.v1.IAMPolicy.
    const iamPolicyStub = gaxGrpc.createStub(
      opts.fallback
        ? (protos as protobuf.Root).lookupService('google.iam.v1.IAMPolicy')
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (protos as any).google.iam.v1.IAMPolicy,
      opts
    ) as Promise<{[method: string]: Function}>;
    this._innerApiCalls = {};
    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const iamPolicyStubMethods = [
      'getIamPolicy',
      'setIamPolicy',
      'testIamPermissions',
    ];

    for (const methodName of iamPolicyStubMethods) {
      const innerCallPromise = iamPolicyStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );
      this._innerApiCalls[methodName] = gaxModule.createApiCall(
        innerCallPromise,
        defaults[methodName],
        this._descriptors.page[methodName]
      );
    }
  }

  /**
   * The DNS address for this API service.
   */
  static get servicePath() {
    return 'cloudkms.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   */
  static get apiEndpoint() {
    return 'cloudkms.googleapis.com';
  }

  /**
   * The port for this API service.
   */
  static get port() {
    return 443;
  }
  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/cloud-platform',
      'https://www.googleapis.com/auth/cloudkms',
    ];
  }
  /**
   * Return the project ID used by this class.
   * @param {function(Error, string)} callback - the callback to
   *   be called with the current project Id.
   */
  getProjectId(callback: ProjectIdCallback) {
    return this.auth.getProjectId(callback);
  }

  getIamPolicy(request: protosTypes.google.iam.v1.GetIamPolicyRequest): void;
  getIamPolicy(
    request: protosTypes.google.iam.v1.GetIamPolicyRequest,
    options?: gax.CallOptions,
    callback?: protosTypes.google.iam.v1.IAMPolicy.GetIamPolicyCallback
  ): Promise<protosTypes.google.iam.v1.Policy> {
    if (options instanceof Function && callback === undefined) {
      callback = (options as unknown) as protosTypes.google.iam.v1.IAMPolicy.GetIamPolicyCallback;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      resource: request.resource,
    });
    return this._innerApiCalls.getIamPolicy(request, options, callback);
  }
  setIamPolicy(request: protosTypes.google.iam.v1.SetIamPolicyRequest): void;
  setIamPolicy(
    request: protosTypes.google.iam.v1.SetIamPolicyRequest,
    options?: gax.CallOptions,
    callback?: protosTypes.google.iam.v1.IAMPolicy.SetIamPolicyCallback
  ): Promise<protosTypes.google.iam.v1.Policy> {
    if (options instanceof Function && callback === undefined) {
      callback = (options as unknown) as protosTypes.google.iam.v1.IAMPolicy.SetIamPolicyCallback;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      resource: request.resource,
    });

    return this._innerApiCalls.setIamPolicy(request, options, callback);
  }
  testIamPermissions(
    request: protosTypes.google.iam.v1.TestIamPermissionsRequest
  ): void;
  testIamPermissions(
    request: protosTypes.google.iam.v1.TestIamPermissionsRequest,
    options?: gax.CallOptions,
    callback?: protosTypes.google.iam.v1.IAMPolicy.TestIamPermissionsCallback
  ): Promise<protosTypes.google.iam.v1.TestIamPermissionsResponse> {
    if (options instanceof Function && callback === undefined) {
      callback = (options as unknown) as protosTypes.google.iam.v1.IAMPolicy.TestIamPermissionsCallback;
      options = {};
    }
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = gax.routingHeader.fromParams({
      resource: request.resource,
    });

    return this._innerApiCalls.testIamPermissions(request, options, callback);
  }
}
export interface IamClient {
  getIamPolicy(request: protosTypes.google.iam.v1.GetIamPolicyRequest): void;
  getIamPolicy(
    request: protosTypes.google.iam.v1.GetIamPolicyRequest,
    options?: gax.CallOptions,
    callback?: protosTypes.google.iam.v1.IAMPolicy.GetIamPolicyCallback
  ): Promise<protosTypes.google.iam.v1.Policy>;
  setIamPolicy(request: protosTypes.google.iam.v1.SetIamPolicyRequest): void;
  setIamPolicy(
    request: protosTypes.google.iam.v1.SetIamPolicyRequest,
    options?: gax.CallOptions,
    callback?: protosTypes.google.iam.v1.IAMPolicy.SetIamPolicyCallback
  ): Promise<protosTypes.google.iam.v1.Policy>;
  testIamPermissions(
    request: protosTypes.google.iam.v1.TestIamPermissionsRequest
  ): void;
  testIamPermissions(
    request: protosTypes.google.iam.v1.TestIamPermissionsRequest,
    options?: gax.CallOptions,
    callback?: protosTypes.google.iam.v1.IAMPolicy.TestIamPermissionsCallback
  ): Promise<protosTypes.google.iam.v1.TestIamPermissionsResponse>;
}
export class IamClientBuilder {
  iamClient: (opts: ClientOptions) => IamClient;

  /**
   * Builds a new Operations Client
   * @param gaxGrpc {GrpcClient}
   */
  constructor(gaxGrpc: GrpcClient | FallbackGrpcClient) {
    /**
     * Build a new instance of {@link IamClient}.
     *
     * @param {Object=} opts - The optional parameters.
     * @param {String=} opts.servicePath - Domain name of the API remote host.
     * @param {number=} opts.port - The port on which to connect to the remote host.
     * @param {grpc.ClientCredentials=} opts.sslCreds - A ClientCredentials for use with an SSL-enabled channel.
     * @param {Object=} opts.clientConfig - The customized config to build the call settings. See {@link gax.constructSettings} for the format.
     */
    this.iamClient = opts => {
      if (gaxGrpc.fallback) {
        opts.fallback = true;
      }
      return new IamClient(opts);
    };
    Object.assign(this.iamClient, IamClient);
  }
}
