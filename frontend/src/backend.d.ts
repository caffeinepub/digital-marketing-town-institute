import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    id: bigint;
    service: string;
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
    phone: string;
}
export interface ContactInfo {
    email: string;
    address: string;
    phone: string;
}
export interface backendInterface {
    getContactInfo(): Promise<ContactInfo>;
    getInquiries(): Promise<Array<Inquiry>>;
    getInquiryById(id: bigint): Promise<Inquiry | null>;
    submitInquiry(name: string, phone: string, email: string, service: string, message: string): Promise<void>;
}
