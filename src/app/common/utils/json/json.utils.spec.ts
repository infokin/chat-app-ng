import { JsonUtils } from "./json.utils";
import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("MockObject")
class MockObject {

  @JsonProperty("content", String)
  private content: string | undefined = undefined;

  public getContent(): string | undefined {
    return this.content;
  }

  public setContent(content: string | undefined): void {
    this.content = content;
  }

}

function createMockObject(content: string): MockObject {
  const mockObject: MockObject = new MockObject();
  mockObject.setContent(content);
  return mockObject;
}

describe("JsonUtils", (): void => {

  it("should serialize an object", (): void => {
    const content: string = "This is a test message..";
    const testObject: MockObject = createMockObject(content);

    const serializedObject: string = JsonUtils.serializeObject(testObject);

    expect(serializedObject).toContain(content);
  });

  it("should serialize an array", (): void => {
    const content1: string = "This is test message 1..";
    const testObject1: MockObject = createMockObject(content1);

    const content2: string = "This is test message 2..";
    const testObject2: MockObject = createMockObject(content2);

    const testArray: MockObject[] = [
      testObject1,
      testObject2
    ];

    const serializedArray: string = JsonUtils.serializeArray(testArray);

    expect(serializedArray).toContain(content1);
    expect(serializedArray).toContain(content2);
  });

  it("should deserialize an object from a JSON string", (): void => {
    const content: string = "This is a test message..";
    const testObject: MockObject = createMockObject(content);

    const json: string = JsonUtils.serializeObject(testObject);

    const deserializedObject: MockObject = JsonUtils.deserializeObject(json, MockObject);

    expect(deserializedObject).not.toBeNull();
    expect(deserializedObject).toBeInstanceOf(MockObject);
    expect(deserializedObject.getContent()).toEqual(content);
  });

  it("should deserialize an array", (): void => {
    const content1: string = "This is test message 1..";
    const testObject1: MockObject = createMockObject(content1);

    const content2: string = "This is test message 2..";
    const testObject2: MockObject = createMockObject(content2);

    const testArray: MockObject[] = [
      testObject1,
      testObject2
    ];

    const json: string = JsonUtils.serializeArray(testArray);

    const deserializedArray: MockObject[] = JsonUtils.deserializeArray(json, MockObject);

    expect(deserializedArray.length).toEqual(testArray.length);

    for (let i: number = 0; i < deserializedArray.length; i++) {
      const deserializedObject: MockObject | null = deserializedArray[i] ?? null;
      expect(deserializedObject).not.toBeNull();
      expect(deserializedObject).toBeInstanceOf(MockObject);

      const testObject: MockObject | null = testArray[i] ?? null;
      expect(testObject).not.toBeNull();

      const actualObject: string | undefined = deserializedObject?.getContent();
      const expectedObject: string | undefined = testObject?.getContent();
      expect(actualObject).toEqual(expectedObject);
    }
  });

});
