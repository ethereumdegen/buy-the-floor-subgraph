// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class BoughtTheFloor extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BoughtTheFloor entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BoughtTheFloor entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BoughtTheFloor", id.toString(), this);
  }

  static load(id: string): BoughtTheFloor | null {
    return store.get("BoughtTheFloor", id) as BoughtTheFloor | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bidderAddress(): Bytes {
    let value = this.get("bidderAddress");
    return value.toBytes();
  }

  set bidderAddress(value: Bytes) {
    this.set("bidderAddress", Value.fromBytes(value));
  }

  get sellerAddress(): Bytes {
    let value = this.get("sellerAddress");
    return value.toBytes();
  }

  set sellerAddress(value: Bytes) {
    this.set("sellerAddress", Value.fromBytes(value));
  }

  get nftContractAddress(): Bytes {
    let value = this.get("nftContractAddress");
    return value.toBytes();
  }

  set nftContractAddress(value: Bytes) {
    this.set("nftContractAddress", Value.fromBytes(value));
  }

  get currencyTokenAddress(): Bytes {
    let value = this.get("currencyTokenAddress");
    return value.toBytes();
  }

  set currencyTokenAddress(value: Bytes) {
    this.set("currencyTokenAddress", Value.fromBytes(value));
  }

  get currencyTokenAmount(): BigInt {
    let value = this.get("currencyTokenAmount");
    return value.toBigInt();
  }

  set currencyTokenAmount(value: BigInt) {
    this.set("currencyTokenAmount", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }
}

export class BurnedSignature extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save BurnedSignature entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save BurnedSignature entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("BurnedSignature", id.toString(), this);
  }

  static load(id: string): BurnedSignature | null {
    return store.get("BurnedSignature", id) as BurnedSignature | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bidderAddress(): Bytes {
    let value = this.get("bidderAddress");
    return value.toBytes();
  }

  set bidderAddress(value: Bytes) {
    this.set("bidderAddress", Value.fromBytes(value));
  }

  get hash(): Bytes {
    let value = this.get("hash");
    return value.toBytes();
  }

  set hash(value: Bytes) {
    this.set("hash", Value.fromBytes(value));
  }
}