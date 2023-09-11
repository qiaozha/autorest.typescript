import { toPascalCase } from "../utils/casingUtils.js";
import { ModularCodeModel, Type } from "./modularCodeModel.js";

/**
 * This function creates a file under /api for each operation group.
 * If there is no operation group in the TypeSpec program, we create a single
 * file called operations.ts where all operations are generated.
 */
export function buildOperationUtils(
  model: ModularCodeModel,
  serializer: boolean = true
) {
  const models = model.types.filter((t) => t.type === "model");
  if (models.length === 0) {
    return;
  }
  const serailierFile = model.project.createSourceFile(
    `${model.modularOptions.sourceRoot}/api/${
      serializer ? "serailiers" : "deserializers"
    }.ts`
  );

  models.forEach((model) => {

  });
  return serailierFile;
}

export function getDeserializeFunctionName(
  type: Type,
  importSet?: Map<string, Set<string>>
) {
  const typeUnionNames = getTypeUnionName(type, false, importSet);
  const deserializeFunctionName = `deserialize${toPascalCase(
    formalizeTypeUnionName(typeUnionNames ?? "")
  )}Union`;
  return deserializeFunctionName;
}

function formalizeTypeUnionName(typeUnionName: string) {
  return typeUnionName
    .replace(/\[\]/g, "Array")
    .replace(/ /g, "")
    .replace(/\|/g, "And");
}


function addImportSet(
  importSet: Map<string, Set<string>>,
  sourceFile: string,
  importName: string
) {
  const set = importSet.get(sourceFile);
  if (!set) {
    importSet.set(sourceFile, new Set<string>().add(importName));
  } else {
    set.add(importName);
  }
}

function getTypeUnionName(
  type: Type,
  fromRest: boolean,
  importSet?: Map<string, Set<string>>
) {
  const types = type.types;
  if (type.type === "list") {
    types === type.elementType?.types;
  }
  return types
    ?.map((t) => {
      if (t.type === "list" && t.elementType?.type === "model") {
        if (fromRest && t.elementType.name && importSet) {
          addImportSet(
            importSet,
            "../rest/index.js",
            t.elementType.name + "Output"
          );
        } else if (t.elementType.name && importSet) {
          addImportSet(importSet, "../models/models.js", t.elementType.name);
        }
        return t.elementType.name + (fromRest ? "Output" : "") + "[]";
      }
      if (fromRest && t.name && importSet) {
        addImportSet(importSet, "../rest/index.js", t.name + "Output");
      } else if (t.name && importSet) {
        addImportSet(importSet, "../models/models.js", t.name);
      }
      return t.name
        ? t.name + (fromRest ? "Output" : "")
        : getMappedType(t.type, fromRest);
    })
    .join(" | ");
}

function getMappedType(modularType: string, fromRest?: boolean) {
  switch (modularType) {
    case "datetime":
      return fromRest ? "string" : "Date";
    case "byte-array":
      return fromRest ? "string" : "Uint8Array";
    default:
      return modularType;
  }
}
