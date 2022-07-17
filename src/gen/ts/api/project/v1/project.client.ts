/* eslint-disable */
// @generated by protobuf-ts 2.7.0 with parameter generate_dependencies,server_none,optimize_code_size,client_generic,output_typescript,long_type_string,eslint_disable
// @generated from protobuf file "api/project/v1/project.proto" (package "api.project.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { ProjectService } from "./project";
import type { PeopleResponse } from "./project";
import type { PeopleRequest } from "./project";
import type { DeleteResponse } from "./project";
import type { DeleteRequest } from "./project";
import type { EditResponse } from "./project";
import type { EditRequest } from "./project";
import type { CreateResponse } from "./project";
import type { CreateRequest } from "./project";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { ListResponse } from "./project";
import type { ListRequest } from "./project";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service api.project.v1.ProjectService
 */
export interface IProjectServiceClient {
    /**
     * @generated from protobuf rpc: List(api.project.v1.ListRequest) returns (api.project.v1.ListResponse);
     */
    list(input: ListRequest, options?: RpcOptions): UnaryCall<ListRequest, ListResponse>;
    /**
     * @generated from protobuf rpc: Create(api.project.v1.CreateRequest) returns (api.project.v1.CreateResponse);
     */
    create(input: CreateRequest, options?: RpcOptions): UnaryCall<CreateRequest, CreateResponse>;
    /**
     * @generated from protobuf rpc: Edit(api.project.v1.EditRequest) returns (api.project.v1.EditResponse);
     */
    edit(input: EditRequest, options?: RpcOptions): UnaryCall<EditRequest, EditResponse>;
    /**
     * @generated from protobuf rpc: Delete(api.project.v1.DeleteRequest) returns (api.project.v1.DeleteResponse);
     */
    delete(input: DeleteRequest, options?: RpcOptions): UnaryCall<DeleteRequest, DeleteResponse>;
    /**
     * @generated from protobuf rpc: People(api.project.v1.PeopleRequest) returns (api.project.v1.PeopleResponse);
     */
    people(input: PeopleRequest, options?: RpcOptions): UnaryCall<PeopleRequest, PeopleResponse>;
}
/**
 * @generated from protobuf service api.project.v1.ProjectService
 */
export class ProjectServiceClient implements IProjectServiceClient, ServiceInfo {
    typeName = ProjectService.typeName;
    methods = ProjectService.methods;
    options = ProjectService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: List(api.project.v1.ListRequest) returns (api.project.v1.ListResponse);
     */
    list(input: ListRequest, options?: RpcOptions): UnaryCall<ListRequest, ListResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<ListRequest, ListResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Create(api.project.v1.CreateRequest) returns (api.project.v1.CreateResponse);
     */
    create(input: CreateRequest, options?: RpcOptions): UnaryCall<CreateRequest, CreateResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateRequest, CreateResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Edit(api.project.v1.EditRequest) returns (api.project.v1.EditResponse);
     */
    edit(input: EditRequest, options?: RpcOptions): UnaryCall<EditRequest, EditResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<EditRequest, EditResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Delete(api.project.v1.DeleteRequest) returns (api.project.v1.DeleteResponse);
     */
    delete(input: DeleteRequest, options?: RpcOptions): UnaryCall<DeleteRequest, DeleteResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteRequest, DeleteResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: People(api.project.v1.PeopleRequest) returns (api.project.v1.PeopleResponse);
     */
    people(input: PeopleRequest, options?: RpcOptions): UnaryCall<PeopleRequest, PeopleResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<PeopleRequest, PeopleResponse>("unary", this._transport, method, opt, input);
    }
}
