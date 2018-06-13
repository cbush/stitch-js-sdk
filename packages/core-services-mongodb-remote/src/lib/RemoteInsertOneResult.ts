/// The result of an `insertOne` command on a `RemoteMongoCollection`.
export default interface RemoteInsertOneResult {
  /// The identifier that was inserted. If the document doesn't have an identifier, this value
  /// will be generated by the Stitch server and added to the document before insertion.
  readonly insertedId: any;
}