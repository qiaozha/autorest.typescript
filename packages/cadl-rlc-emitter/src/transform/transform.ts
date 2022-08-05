import { Paths, RLCModel, Schema } from "@azure-tools/rlc-codegen";
import { Program } from "@cadl-lang/compiler";
import { join } from "path";
import { transformPaths } from "./transformPaths.js";
import { transformSchemas } from "./transformSchemas.js";

export async function transformRLCModel(program: Program): Promise<RLCModel> {
    const srcPath = program.compilerOptions.outputPath
      ? join(program.compilerOptions.outputPath, "src")
      : "src";
    const libraryName = "Foo";
    const paths: Paths = transformPaths(program);
    const schemas: Schema[] = transformSchemas(program);
  
    return { srcPath, libraryName, paths, schemas };
  }