/* eslint-disable */
// @generated by protobuf-ts 2.7.0 with parameter generate_dependencies,server_none,optimize_code_size,client_generic,output_typescript,long_type_string,eslint_disable
// @generated from protobuf file "api/hello/v1/hello.proto" (package "api.hello.v1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * @generated from protobuf message api.hello.v1.IntroRequest
 */
export interface IntroRequest {
    /**
     * @generated from protobuf field: string name = 1;
     */
    name: string;
}
/**
 * @generated from protobuf message api.hello.v1.IntroResponse
 */
export interface IntroResponse {
    /**
     * @generated from protobuf field: string intro = 1;
     */
    intro: string;
}
/**
 * @generated from protobuf message api.hello.v1.MeRequest
 */
export interface MeRequest {
}
/**
 * @generated from protobuf message api.hello.v1.MeResponse
 */
export interface MeResponse {
    /**
     * @generated from protobuf field: string username = 1;
     */
    username: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class IntroRequest$Type extends MessageType<IntroRequest> {
    constructor() {
        super("api.hello.v1.IntroRequest", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message api.hello.v1.IntroRequest
 */
export const IntroRequest = new IntroRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class IntroResponse$Type extends MessageType<IntroResponse> {
    constructor() {
        super("api.hello.v1.IntroResponse", [
            { no: 1, name: "intro", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message api.hello.v1.IntroResponse
 */
export const IntroResponse = new IntroResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MeRequest$Type extends MessageType<MeRequest> {
    constructor() {
        super("api.hello.v1.MeRequest", []);
    }
}
/**
 * @generated MessageType for protobuf message api.hello.v1.MeRequest
 */
export const MeRequest = new MeRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MeResponse$Type extends MessageType<MeResponse> {
    constructor() {
        super("api.hello.v1.MeResponse", [
            { no: 1, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message api.hello.v1.MeResponse
 */
export const MeResponse = new MeResponse$Type();
/**
 * @generated ServiceType for protobuf service api.hello.v1.HelloService
 */
export const HelloService = new ServiceType("api.hello.v1.HelloService", [
    { name: "Intro", options: {}, I: IntroRequest, O: IntroResponse },
    { name: "Me", options: {}, I: MeRequest, O: MeResponse }
]);
