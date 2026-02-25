import Array "mo:core/Array";
import Nat "mo:core/Nat";
import Runtime "mo:core/Runtime";
import MixinStorage "blob-storage/Mixin";

actor {
  include MixinStorage();

  public type Inquiry = {
    id : Nat;
    name : Text;
    phone : Text;
    email : Text;
    service : Text;
    message : Text;
    timestamp : Nat64;
  };

  public type ContactInfo = {
    phone : Text;
    address : Text;
    email : Text;
  };

  public type InquiryFormData = {
    name : Text;
    phone : Text;
    email : Text;
    service : Text;
    message : Text;
  };

  var nextId = 0;
  var inquiries : [Inquiry] = [];

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, email : Text, service : Text, message : Text) : async () {
    if (name == "" or phone == "" or email == "" or service == "" or message == "") {
      Runtime.trap("All form fields are required. Please fill out the form.");
    };

    let inquiry : Inquiry = {
      id = nextId;
      name;
      phone;
      email;
      service;
      message;
      timestamp = Nat64.fromNat(nextId * 10_000_000);
    };

    inquiries := inquiries.concat([inquiry]);
    nextId += 1;
  };

  public query ({ caller }) func getInquiries() : async [Inquiry] {
    inquiries;
  };

  public query ({ caller }) func getContactInfo() : async ContactInfo {
    {
      phone = "+91-9717044953";
      address = "Janakpuri C1 Delhi-110058";
      email = "digitalmarketingtown14@gmail.com";
    };
  };

  public query ({ caller }) func getInquiryById(id : Nat) : async ?Inquiry {
    inquiries.find(func(inquiry) { inquiry.id == id });
  };
};
