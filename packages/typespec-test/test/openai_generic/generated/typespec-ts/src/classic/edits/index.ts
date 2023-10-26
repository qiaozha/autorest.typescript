// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { editsCreate } from "../../api/edits/index.js";
import { OpenAIContext } from "../../api/OpenAIContext.js";
import { CreateEditRequest, CreateEditResponse } from "../../models/models.js";
import { EditsCreateOptions } from "../../models/options.js";

export interface EditsOperations {
  edits: {
    create: (
      edit: CreateEditRequest,
      options?: EditsCreateOptions
    ) => Promise<CreateEditResponse>;
  };
}

export function getEdits(context: OpenAIContext) {
  return {
    create: (edit: CreateEditRequest, options?: EditsCreateOptions) =>
      editsCreate(context, edit, options),
  };
}

export function getEditsOperations(context: OpenAIContext): EditsOperations {
  return {
    edits: getEdits(context),
  };
}
