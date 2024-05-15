// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  FindingInferenceOutput,
  CriticalResultInferenceOutput,
  FollowupRecommendationInferenceOutput,
  FollowupCommunicationInferenceOutput,
  RadiologyInsightsInferenceOutput,
  ObservationOutput,
  DomainResourceOutput,
} from "../rest/index.js";
import {
  FindingInference,
  CriticalResultInference,
  FollowupRecommendationInference,
  FollowupCommunicationInference,
  RadiologyInsightsInferenceUnion,
  Observation,
  DomainResourceUnion,
} from "../models/models.js";

/** deserialize function for FindingInference */
function deserializeFindingInference(
  obj: FindingInferenceOutput,
): FindingInference {
  return {
    kind: obj["kind"],
    extension:
      obj["extension"] === undefined
        ? obj["extension"]
        : obj["extension"].map((p) => deserializeExtension(p)),
    finding: deserializeObservation(obj.finding),
  };
}

/** deserialize function for CriticalResultInference */
function deserializeCriticalResultInference(
  obj: CriticalResultInferenceOutput,
): CriticalResultInference {
  return {
    kind: obj["kind"],
    extension:
      obj["extension"] === undefined
        ? obj["extension"]
        : obj["extension"].map((p) => deserializeExtension(p)),
    result: deserializeCriticalResult(obj.result),
  };
}

/** deserialize function for FollowupRecommendationInference */
function deserializeFollowupRecommendationInference(
  obj: FollowupRecommendationInferenceOutput,
): FollowupRecommendationInference {
  return {
    kind: obj["kind"],
    extension:
      obj["extension"] === undefined
        ? obj["extension"]
        : obj["extension"].map((p) => deserializeExtension(p)),
    effectiveDateTime: obj["effectiveDateTime"],
    effectivePeriod: !obj.effectivePeriod
      ? obj.effectivePeriod
      : deserializePeriod(obj.effectivePeriod),
    findings:
      obj["findings"] === undefined
        ? obj["findings"]
        : obj["findings"].map((p) => deserializeRecommendationFinding(p)),
    isConditional: obj["isConditional"],
    isOption: obj["isOption"],
    isGuideline: obj["isGuideline"],
    isHedging: obj["isHedging"],
    recommendedProcedure: deserializeProcedureRecommendationUnion(
      obj.recommendedProcedure,
    ),
  };
}

/** deserialize function for FollowupCommunicationInference */
function deserializeFollowupCommunicationInference(
  obj: FollowupCommunicationInferenceOutput,
): FollowupCommunicationInference {
  return {
    kind: obj["kind"],
    extension:
      obj["extension"] === undefined
        ? obj["extension"]
        : obj["extension"].map((p) => deserializeExtension(p)),
    dateTime:
      obj["dateTime"] === undefined
        ? obj["dateTime"]
        : obj["dateTime"].map((p) => new Date(p)),
    recipient: obj["recipient"],
    wasAcknowledged: obj["wasAcknowledged"],
  };
}

/** deserialize function for RadiologyInsightsInferenceOutput */
export function deserializeRadiologyInsightsInferenceUnion(
  obj: RadiologyInsightsInferenceOutput,
): RadiologyInsightsInferenceUnion {
  switch (obj.kind) {
    case "finding":
      return deserializeFindingInference(obj as FindingInferenceOutput);
    case "criticalResult":
      return deserializeCriticalResultInference(
        obj as CriticalResultInferenceOutput,
      );
    case "followupRecommendation":
      return deserializeFollowupRecommendationInference(
        obj as FollowupRecommendationInferenceOutput,
      );
    case "followupCommunication":
      return deserializeFollowupCommunicationInference(
        obj as FollowupCommunicationInferenceOutput,
      );
    default:
      return obj;
  }
}

/** deserialize function for Observation */
function deserializeObservation(obj: ObservationOutput): Observation {
  return {
    text: !obj.text ? obj.text : deserializeNarrative(obj.text),
    contained:
      obj["contained"] === undefined
        ? obj["contained"]
        : obj["contained"].map((p) => deserializeResource(p)),
    extension:
      obj["extension"] === undefined
        ? obj["extension"]
        : obj["extension"].map((p) => deserializeExtension(p)),
    modifierExtension:
      obj["modifierExtension"] === undefined
        ? obj["modifierExtension"]
        : obj["modifierExtension"].map((p) => deserializeExtension(p)),
    resourceType: obj["resourceType"],
    id: obj["id"],
    meta: !obj.meta ? obj.meta : deserializeMeta(obj.meta),
    implicitRules: obj["implicitRules"],
    language: obj["language"],
    identifier:
      obj["identifier"] === undefined
        ? obj["identifier"]
        : obj["identifier"].map((p) => deserializeIdentifier(p)),
    status: obj["status"],
    category:
      obj["category"] === undefined
        ? obj["category"]
        : obj["category"].map((p) => deserializeCodeableConcept(p)),
    code: deserializeCodeableConcept(obj.code),
    subject: !obj.subject ? obj.subject : deserializeReference(obj.subject),
    encounter: !obj.encounter
      ? obj.encounter
      : deserializeReference(obj.encounter),
    effectiveDateTime: obj["effectiveDateTime"],
    effectivePeriod: !obj.effectivePeriod
      ? obj.effectivePeriod
      : deserializePeriod(obj.effectivePeriod),
    effectiveInstant: obj["effectiveInstant"],
    issued: obj["issued"],
    valueQuantity: !obj.valueQuantity
      ? obj.valueQuantity
      : deserializeQuantity(obj.valueQuantity),
    valueCodeableConcept: !obj.valueCodeableConcept
      ? obj.valueCodeableConcept
      : deserializeCodeableConcept(obj.valueCodeableConcept),
    valueString: obj["valueString"],
    valueBoolean: obj["valueBoolean"],
    valueInteger: obj["valueInteger"],
    valueRange: !obj.valueRange
      ? obj.valueRange
      : deserializeRange(obj.valueRange),
    valueRatio: !obj.valueRatio
      ? obj.valueRatio
      : deserializeRatio(obj.valueRatio),
    valueSampledData: !obj.valueSampledData
      ? obj.valueSampledData
      : deserializeSampledData(obj.valueSampledData),
    valueTime:
      obj["valueTime"] !== undefined ? new Date(obj["valueTime"]) : undefined,
    valueDateTime: obj["valueDateTime"],
    valuePeriod: !obj.valuePeriod
      ? obj.valuePeriod
      : deserializePeriod(obj.valuePeriod),
    dataAbsentReason: !obj.dataAbsentReason
      ? obj.dataAbsentReason
      : deserializeCodeableConcept(obj.dataAbsentReason),
    interpretation:
      obj["interpretation"] === undefined
        ? obj["interpretation"]
        : obj["interpretation"].map((p) => deserializeCodeableConcept(p)),
    note:
      obj["note"] === undefined
        ? obj["note"]
        : obj["note"].map((p) => deserializeAnnotation(p)),
    bodySite: !obj.bodySite
      ? obj.bodySite
      : deserializeCodeableConcept(obj.bodySite),
    method: !obj.method ? obj.method : deserializeCodeableConcept(obj.method),
    referenceRange:
      obj["referenceRange"] === undefined
        ? obj["referenceRange"]
        : obj["referenceRange"].map((p) =>
            deserializeObservationReferenceRange(p),
          ),
    hasMember:
      obj["hasMember"] === undefined
        ? obj["hasMember"]
        : obj["hasMember"].map((p) => deserializeReference(p)),
    derivedFrom:
      obj["derivedFrom"] === undefined
        ? obj["derivedFrom"]
        : obj["derivedFrom"].map((p) => deserializeReference(p)),
    component:
      obj["component"] === undefined
        ? obj["component"]
        : obj["component"].map((p) => deserializeObservationComponent(p)),
  };
}

/** deserialize function for DomainResourceOutput */
export function deserializeDomainResourceUnion(
  obj: DomainResourceOutput,
): DomainResourceUnion {
  switch (obj.resourceType) {
    case "Observation":
      return deserializeObservation(obj as ObservationOutput);
    default:
      return obj;
  }
}
